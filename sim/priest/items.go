package priest

import (
	"time"

	"github.com/wowsims/wotlk/sim/core"
	"github.com/wowsims/wotlk/sim/core/stats"
)

var ItemSetAbsolution = core.NewItemSet(core.ItemSet{
	Name: "Absolution Regalia",
	Bonuses: map[int32]core.ApplyEffect{
		2: func(agent core.Agent) {
			// this is implemented in swp.go
		},
		4: func(agent core.Agent) {
			// this is implemented in mindblast.go
		},
	},
})

var ItemSetValorous = core.NewItemSet(core.ItemSet{
	Name: "Garb of Faith",
	Bonuses: map[int32]core.ApplyEffect{
		2: func(agent core.Agent) {
			// this is implemented in mind_blast.go
		},
		4: func(agent core.Agent) {
			// this is implemented in shadow_word_death.go
		},
	},
})

var ItemSetConquerorSanct = core.NewItemSet(core.ItemSet{
	Name: "Sanctification Garb",
	Bonuses: map[int32]core.ApplyEffect{
		2: func(agent core.Agent) {
			// this is implemented in devouring_plague.go
		},
		4: func(agent core.Agent) {
			priest := agent.(PriestAgent).GetPriest()
			procAura := priest.NewTemporaryStatsAura("Devious Mind", core.ActionID{ItemID: 64907}, stats.Stats{stats.SpellHaste: 240}, time.Second*4)

			priest.RegisterAura(core.Aura{
				Label:    "Devious Mind Proc",
				Duration: core.NeverExpires,
				OnReset: func(aura *core.Aura, sim *core.Simulation) {
					aura.Activate(sim)
				},
				OnCastComplete: func(aura *core.Aura, sim *core.Simulation, spell *core.Spell) {
					if spell != priest.MindBlast {
						return
					}
					procAura.Activate(sim)
				},
			})
		},
	},
})

var ItemSetZabras = core.NewItemSet(core.ItemSet{
	Name: "Zabra's Regalia",
	Bonuses: map[int32]core.ApplyEffect{
		2: func(agent core.Agent) {
			// this is implemented in vampiric_touch.go
		},
		4: func(agent core.Agent) {
			// this is implemented in mind_flay.go
		},
	},
})

var ItemSetCrimsonAcolyte = core.NewItemSet(core.ItemSet{
	Name: "Crimson Acolyte's Regalia",
	Bonuses: map[int32]core.ApplyEffect{
		2: func(agent core.Agent) {
			// this is implemented in vampiric_touch.go/devouring_plague.go/swp.go
		},
		4: func(agent core.Agent) {
			// this is implemented in mind_flay.go
		},
	},
})

func init() {
	core.NewItemEffect(32490, func(agent core.Agent) {
		priest := agent.(PriestAgent).GetPriest()
		// Not in the game yet so cant test; this logic assumes that:
		// - procrate is 10%
		// - no ICD on proc
		const procrate = 0.1
		procAura := priest.NewTemporaryStatsAura("Ashtongue Talisman Proc", core.ActionID{ItemID: 32490}, stats.Stats{stats.SpellPower: 220}, time.Second*10)

		priest.RegisterAura(core.Aura{
			Label:    "Ashtongue Talisman",
			Duration: core.NeverExpires,
			OnReset: func(aura *core.Aura, sim *core.Simulation) {
				aura.Activate(sim)
			},
			OnPeriodicDamageDealt: func(aura *core.Aura, sim *core.Simulation, spell *core.Spell, spellEffect *core.SpellEffect) {
				if spell != priest.ShadowWordPain {
					return
				}

				if sim.RandomFloat("Ashtongue Talisman of Acumen") > procrate {
					return
				}

				procAura.Activate(sim)
			},
		})
	})

}
