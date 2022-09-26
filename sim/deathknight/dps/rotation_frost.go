package dps

import (
	"time"

	"github.com/wowsims/wotlk/sim/core"
	"github.com/wowsims/wotlk/sim/core/neat"
	"github.com/wowsims/wotlk/sim/deathknight"
)

type FrostRotation struct {
	dk *DpsDeathknight

	genome    neat.Genome
	spellBook []*deathknight.RuneSpell

	oblitCount int32
	oblitDelay time.Duration
	uaCycle    bool

	// CDS
	hyperSpeedMCD           *core.MajorCooldown
	stoneformMCD            *core.MajorCooldown
	bloodfuryMCD            *core.MajorCooldown
	berserkingMCD           *core.MajorCooldown
	potionOfSpeedMCD        *core.MajorCooldown
	indestructiblePotionMCD *core.MajorCooldown
	potionUsed              bool

	oblitRPRegen float64
}

func (fr *FrostRotation) Initialize(dk *DpsDeathknight) {
	fr.dk = dk
	fr.oblitRPRegen = core.TernaryFloat64(dk.HasSetBonus(deathknight.ItemSetScourgeborneBattlegear, 4), 25.0, 20.0)

	// Relevant inputs 17
	// RP                          1
	// NB NF NU D                  4
	// ff - t, bp - t              2
	// KM, Rime	                   2

	// Relevant outputs 8
	// Icy Touch
	// Plague Strike
	// Obliterate
	// Blood Strike
	// Howling Blast
	// Frost Strike
	// Horn Of Winter
	// Wait Percent of 1 second

	fr.genome.FromString(dk.Rotation.NeatGenome)
	fr.spellBook = []*deathknight.RuneSpell{
		dk.IcyTouch,
		dk.PlagueStrike,
		dk.Obliterate,
		dk.BloodStrike,
		dk.HowlingBlast,
		dk.FrostStrike,
		dk.HornOfWinter,
	}
}

func (fr *FrostRotation) EvaluateGenome(sim *core.Simulation, target *core.Unit) (*deathknight.RuneSpell, time.Duration) {
	// Grab inputs
	dk := fr.dk

	inputs := []float64{
		dk.CurrentRunicPower(),
		float64(dk.NormalCurrentBloodRunes()),
		float64(dk.NormalCurrentFrostRunes()),
		float64(dk.NormalCurrentUnholyRunes()),
		float64(dk.CurrentDeathRunes()),
		float64(dk.FrostFeverDisease[target.Index].ExpiresAt()-sim.CurrentTime) / float64(time.Second),
		float64(dk.BloodPlagueDisease[target.Index].ExpiresAt()-sim.CurrentTime) / float64(time.Second),
		core.TernaryFloat64(dk.KM(), 1.0, 0.0),
		core.TernaryFloat64(dk.Rime(), 1.0, 0.0),
	}

	// Proliferate network
	maxIdx, outputs := fr.genome.Evaluate(inputs)

	if maxIdx < len(outputs)-1 {
		return fr.spellBook[maxIdx], -1
	} else {
		return nil, time.Duration(float64(time.Second) * outputs[maxIdx])
	}
}

func (fr *FrostRotation) Reset(sim *core.Simulation) {
	fr.oblitCount = 0
	fr.oblitDelay = 0
	fr.uaCycle = false

	fr.hyperSpeedMCD = nil
	fr.stoneformMCD = nil
	fr.bloodfuryMCD = nil
	fr.berserkingMCD = nil
	fr.potionOfSpeedMCD = nil
	fr.indestructiblePotionMCD = nil
	fr.potionUsed = false
}

func (dk *DpsDeathknight) getFrostMajorCooldown(actionID core.ActionID) *core.MajorCooldown {
	if dk.Character.HasMajorCooldown(actionID) {
		majorCd := dk.Character.GetMajorCooldown(actionID)
		majorCd.ShouldActivate = func(sim *core.Simulation, character *core.Character) bool {
			return false
		}
		return majorCd
	}
	return nil
}

func (dk *DpsDeathknight) setupUnbreakableArmorCooldowns() {
	fr := &dk.fr

	// hyperspeed accelerators
	fr.hyperSpeedMCD = dk.getFrostMajorCooldown(core.ActionID{SpellID: 54758})

	// stoneform (dwarf)
	fr.stoneformMCD = dk.getFrostMajorCooldown(core.ActionID{SpellID: 20594})

	// bloodfury (orc)
	fr.bloodfuryMCD = dk.getFrostMajorCooldown(core.ActionID{SpellID: 33697})

	// berserking (troll)
	fr.berserkingMCD = dk.getFrostMajorCooldown(core.ActionID{SpellID: 26297})

	// potion of speed
	fr.potionOfSpeedMCD = dk.getFrostMajorCooldown(core.ActionID{ItemID: 40211})

	// indestructible potion
	fr.indestructiblePotionMCD = dk.getFrostMajorCooldown(core.ActionID{ItemID: 40093})
}

func (dk *DpsDeathknight) castMajorCooldown(mcd *core.MajorCooldown, sim *core.Simulation, target *core.Unit) {
	if mcd != nil {
		if mcd.Spell.IsReady(sim) && dk.GCD.IsReady(sim) {
			mcd.Spell.Cast(sim, target)
		}
	}
}

func (dk *DpsDeathknight) castMajorCooldownConditional(mcd *core.MajorCooldown, conditionalMCDs []*core.MajorCooldown, sim *core.Simulation, target *core.Unit) {
	if mcd != nil && !dk.fr.potionUsed {
		if mcd.Spell.IsReady(sim) && dk.GCD.IsReady(sim) {
			allReady := true
			for i := range conditionalMCDs {
				if conditionalMCDs[i] != nil && allReady {
					spell := conditionalMCDs[i].Spell
					allReady = allReady && spell.CD.IsReady(sim)
					//// TODO: Find a way to get the racial aura durations
					if !allReady {
						if dk.Env.Encounter.Duration < time.Duration(float64(spell.CD.ReadyAt())*1.25) {
							allReady = true
						}
					}
				}
			}

			if allReady {
				mcd.Spell.Cast(sim, target)

				dk.fr.potionUsed = true
			}
		}
	}
}

func (dk *DpsDeathknight) castAllMajorCooldowns(sim *core.Simulation) {
	fr := &dk.fr
	target := dk.CurrentTarget

	racialConditionals := []*core.MajorCooldown{fr.bloodfuryMCD, fr.berserkingMCD, fr.stoneformMCD}

	dk.castMajorCooldownConditional(fr.potionOfSpeedMCD, racialConditionals, sim, target)
	dk.castMajorCooldownConditional(fr.indestructiblePotionMCD, racialConditionals, sim, target)
	dk.castMajorCooldown(fr.hyperSpeedMCD, sim, target)
	dk.castMajorCooldown(fr.stoneformMCD, sim, target)
	dk.castMajorCooldown(fr.bloodfuryMCD, sim, target)
	dk.castMajorCooldown(fr.berserkingMCD, sim, target)
}

func (dk *DpsDeathknight) RotationActionCallback_UA_Frost(sim *core.Simulation, target *core.Unit, s *deathknight.Sequence) time.Duration {
	if dk.UnbreakableArmor != nil {
		casted := dk.UnbreakableArmor.Cast(sim, target)

		if casted {
			dk.castAllMajorCooldowns(sim)
			s.ConditionalAdvance(casted)
			return sim.CurrentTime
		} else {
			s.ConditionalAdvance(casted)
			return -1
		}
	} else {
		casted := dk.BloodStrike.Cast(sim, target)
		if casted {
			dk.castAllMajorCooldowns(sim)
			s.ConditionalAdvance(casted)
			return sim.CurrentTime
		} else {
			s.ConditionalAdvance(casted)
			return -1
		}
	}
}
