import{A as t,ar as e,as as n,cQ as a,T as i,cR as s,cc as r,Q as o,D as l,e as d,cS as c,cT as m,cU as p,L as g,bZ as f,c0 as h,c2 as u,bj as b,d as S,a6 as T,a as y,ap as w,b2 as R,am as P,K as A,aq as O}from"./detailed_results-ccec58a3.chunk.js";import{m as v,j as M,i as k,a as W,b as E,c as B,B as C,I as F,K as x,F as N,L as I,T as D,t as H}from"./individual_sim_ui-7a1d617c.chunk.js";v({fieldName:"innervateTarget",id:t.fromSpellId(29166),extraCssClasses:["within-raid-sim-hide"],getValue:t=>t.getSpecOptions().innervateTarget?.targetIndex!=e,setValue:(t,a,i)=>{const s=a.getSpecOptions();s.innervateTarget=n.create({targetIndex:i?0:e}),a.setSpecOptions(t,s)}});const j=M({fieldName:"latencyMs",label:"Latency",labelTooltip:"Player latency, in milliseconds. Adds a delay to actions that cannot be spell queued."}),U=k({fieldName:"prepopOoc",label:"Pre-pop Clearcasting",labelTooltip:"Start fight with clearcasting",showWhen:t=>t.getTalents().omenOfClarity,changeEmitter:t=>i.onAny([t.rotationChangeEmitter,t.talentsChangeEmitter])}),G=k({fieldName:"prePopBerserk",label:"Pre-pop Berserk",labelTooltip:"Pre pop berserk 1 sec before fight",showWhen:t=>t.getTalents().berserk,changeEmitter:t=>i.onAny([t.rotationChangeEmitter,t.talentsChangeEmitter])}),L=k({fieldName:"assumeBleedActive",label:"Assume Bleed Always Active",labelTooltip:"Assume bleed always exists for 'Rend and Tear' calculations. Otherwise will only calculate based on own rip/rake/lacerate.",extraCssClasses:["within-raid-sim-hide"]});function z(t){let e=t.getRotation();return e.manualParams&&e.rotationType==a.SingleTarget}function J(t){let e=t.getRotation();return e.manualParams&&e.rotationType==a.Aoe}const K={inputs:[W({fieldName:"rotationType",label:"Type",values:[{name:"Single Target",value:a.SingleTarget},{name:"AOE",value:a.Aoe}]}),E({fieldName:"manualParams",label:"Manual Advanced Parameters",labelTooltip:"Manually specify advanced parameters, otherwise will use preset defaults"}),B({fieldName:"maxFfDelay",label:"Max FF Delay",labelTooltip:"Max allowed delay to wait for ff to come off CD in seconds",float:!0,positive:!0,showWhen:t=>t.getRotation().manualParams}),B({fieldName:"minRoarOffset",label:"Roar Offset",labelTooltip:"Targeted offset in Rip/Roar timings",showWhen:z}),B({fieldName:"ripLeeway",label:"Rip Leeway",labelTooltip:"Rip leeway when determining roar clips",showWhen:z}),E({fieldName:"useRake",label:"Use Rake",labelTooltip:"Use rake during rotation",showWhen:z}),E({fieldName:"useBite",label:"Bite during rotation",labelTooltip:"Use bite during rotation rather than just at end",showWhen:z}),B({fieldName:"biteTime",label:"Bite Time",labelTooltip:"Min seconds on Rip/Roar to bite",showWhen:t=>z(t)&&1==t.getRotation().useBite&&t.getRotation().biteModeType==s.Emperical}),E({fieldName:"flowerWeave",label:"Flower Weave",labelTooltip:"Fish for clearcasting during rotation with gotw",showWhen:J}),B({fieldName:"raidTargets",label:"GotW Raid Targets",labelTooltip:"Raid size to assume for clearcast proc chance (can include pets as well, so 25 man raid potentically can be ~30)",showWhen:t=>J(t)&&1==t.getRotation().flowerWeave}),B({fieldName:"hotUptime",label:"Revitalize Hot Uptime",labelTooltip:"Hot uptime percentage to assume when theorizing energy gains",percent:!0,showWhen:t=>1==t.getRotation().useBite&&t.getRotation().biteModeType==s.Analytical})]},_={name:"Standard",data:r.create({talentsString:"-543202132322010053120030310511-203503012",glyphs:o.create({major1:l.GlyphOfRip,major2:l.GlyphOfSavageRoar,major3:l.GlyphOfShred,minor1:d.GlyphOfDash,minor2:d.GlyphOfTheWild,minor3:d.GlyphOfUnburdenedRebirth})})},q=c.create({rotationType:a.SingleTarget,bearWeaveType:m.None,minCombosForRip:5,minCombosForBite:5,useRake:!0,useBite:!0,mangleSpam:!1,biteModeType:s.Emperical,biteTime:4,berserkBiteThresh:25,berserkFfThresh:15,powerbear:!1,minRoarOffset:12,ripLeeway:3,maintainFaerieFire:!0,hotUptime:0,snekWeave:!1,flowerWeave:!1,raidTargets:30,maxFfDelay:.7}),Q=p.create({latencyMs:100,prepopOoc:!0,assumeBleedActive:!0}),V=g.create({flask:f.FlaskOfEndlessRage,food:h.FoodDragonfinFilet,defaultPotion:u.PotionOfSpeed}),Z={name:"PreRaid",tooltip:C,gear:b.fromJsonString('{"items": [\n\t\t{\n\t\t\t"id": 42550,\n\t\t\t"enchant": 3817,\n\t\t\t"gems": [\n\t\t\t\t41398,\n\t\t\t\t39996\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40678\n\t\t},\n\t\t{\n\t\t\t"id": 37139,\n\t\t\t"enchant": 3808,\n\t\t\t"gems": [\n\t\t\t\t39996\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 37840,\n\t\t\t"enchant": 3605\n\t\t},\n\t\t{\n\t\t\t"id": 37219,\n\t\t\t"enchant": 3832\n\t\t},\n\t\t{\n\t\t\t"id": 44203,\n\t\t\t"enchant": 3845,\n\t\t\t"gems": [\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 37409,\n\t\t\t"enchant": 3604,\n\t\t\t"gems": [\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40694,\n\t\t\t"gems": [\n\t\t\t\t49110,\n\t\t\t\t39996\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 37644,\n\t\t\t"enchant": 3823\n\t\t},\n\t\t{\n\t\t\t"id": 44297,\n\t\t\t"enchant": 3606\n\t\t},\n\t\t{\n\t\t\t"id": 37642\n\t\t},\n\t\t{\n\t\t\t"id": 37624\n\t\t},\n\t\t{\n\t\t\t"id": 40684\n\t\t},\n\t\t{\n\t\t\t"id": 37166\n\t\t},\n\t\t{\n\t\t\t"id": 37883,\n\t\t\t"enchant": 3827\n\t\t},\n\t\t{},\n\t\t{\n\t\t\t"id": 40713\n\t\t}\n  ]}')},X={name:"P1 Preset",tooltip:C,gear:b.fromJsonString('{"items": [\n\t\t{\n\t\t\t"id": 40473,\n\t\t\t"enchant": 3817,\n\t\t\t"gems": [\n\t\t\t\t41398,\n\t\t\t\t39996\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 44664,\n\t\t\t"gems": [\n\t\t\t\t39996\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40494,\n\t\t\t"enchant": 3808,\n\t\t\t"gems": [\n\t\t\t\t39996\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40403,\n\t\t\t"enchant": 3605\n\t\t},\n\t\t{\n\t\t\t"id": 40539,\n\t\t\t"enchant": 3832,\n\t\t\t"gems": [\n\t\t\t\t39996\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 39765,\n\t\t\t"enchant": 3845,\n\t\t\t"gems": [\n\t\t\t\t39996,\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40541,\n\t\t\t"enchant": 3604,\n\t\t\t"gems": [\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40205,\n\t\t\t"gems": [\n\t\t\t\t39996\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 44011,\n\t\t\t"enchant": 3823,\n\t\t\t"gems": [\n\t\t\t\t39996,\n\t\t\t\t49110\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40243,\n\t\t\t"enchant": 3606,\n\t\t\t"gems": [\n\t\t\t\t40014\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40474\n\t\t},\n\t\t{\n\t\t\t"id": 40717\n\t\t},\n\t\t{\n\t\t\t"id": 42987\n\t\t},\n\t\t{\n\t\t\t"id": 40256\n\t\t},\n\t\t{\n\t\t\t"id": 40388,\n\t\t\t"enchant": 3789\n\t\t},\n\t\t{},\n\t\t{\n\t\t\t"id": 39757\n\t\t}\n\t]}')},Y={name:"P2 Preset",tooltip:C,gear:b.fromJsonString('{"items": [\n\t\t{\n\t\t\t"id": 46161,\n\t\t\t"enchant": 3817,\n\t\t\t"gems": [\n\t\t\t\t41398,\n\t\t\t\t40002\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45517,\n\t\t\t"gems": [\n\t\t\t\t40002\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45245,\n\t\t\t"enchant": 3808,\n\t\t\t"gems": [\n\t\t\t\t40002,\n\t\t\t\t40002\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 46032,\n\t\t\t"enchant": 3605,\n\t\t\t"gems": [\n\t\t\t\t40002,\n\t\t\t\t40058\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45473,\n\t\t\t"enchant": 3832,\n\t\t\t"gems": [\n\t\t\t\t40002,\n\t\t\t\t40002,\n\t\t\t\t40002\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45869,\n\t\t\t"enchant": 3845,\n\t\t\t"gems": [\n\t\t\t\t40037\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 46158,\n\t\t\t"enchant": 3604,\n\t\t\t"gems": [\n\t\t\t\t40002\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 46095,\n\t\t\t"gems": [\n\t\t\t\t40002,\n\t\t\t\t40002,\n\t\t\t\t40002\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45536,\n\t\t\t"enchant": 3823,\n\t\t\t"gems": [\n\t\t\t\t39996,\n\t\t\t\t39996,\n\t\t\t\t39996\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45564,\n\t\t\t"enchant": 3606,\n\t\t\t"gems": [\n\t\t\t\t39996,\n\t\t\t\t39996\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 46048,\n\t\t\t"gems": [\n\t\t\t\t45862\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45608,\n\t\t\t"gems": [\n\t\t\t\t39996\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 45931\n\t\t},\n\t\t{\n\t\t\t"id": 46038\n\t\t},\n\t\t{\n\t\t\t"id": 45613,\n\t\t\t"enchant": 3789,\n\t\t\t"gems": [\n\t\t\t\t40037,\n\t\t\t\t42702\n\t\t\t]\n\t\t},\n\t\t{},\n\t\t{\n\t\t\t"id": 40713\n\t\t}\n\t]}')};class $ extends F{constructor(t,e){super(t,e,{cssClass:"feral-druid-sim-ui",cssScheme:"druid",knownIssues:[],warnings:[],epStats:[S.StatStrength,S.StatAgility,S.StatAttackPower,S.StatMeleeHit,S.StatMeleeCrit,S.StatMeleeHaste,S.StatArmorPenetration,S.StatExpertise],epPseudoStats:[T.PseudoStatMainHandDps],epReferenceStat:S.StatAttackPower,displayStats:[S.StatHealth,S.StatStrength,S.StatAgility,S.StatAttackPower,S.StatMeleeHit,S.StatMeleeCrit,S.StatMeleeHaste,S.StatArmorPenetration,S.StatExpertise,S.StatMana],defaults:{gear:Y.gear,epWeights:y.fromMap({[S.StatStrength]:2.4,[S.StatAgility]:2.39,[S.StatAttackPower]:1,[S.StatMeleeHit]:2.51,[S.StatMeleeCrit]:2.23,[S.StatMeleeHaste]:1.83,[S.StatArmorPenetration]:2.08,[S.StatExpertise]:2.44},{[T.PseudoStatMainHandDps]:16.5}),consumes:V,rotation:q,talents:_.data,specOptions:Q,raidBuffs:w.create({arcaneBrilliance:!0,giftOfTheWild:R.TristateEffectImproved,bloodlust:!0,manaSpringTotem:R.TristateEffectRegular,strengthOfEarthTotem:R.TristateEffectImproved,battleShout:R.TristateEffectImproved,unleashedRage:!0,icyTalons:!0,swiftRetribution:!0,sanctifiedRetribution:!0}),partyBuffs:P.create({}),individualBuffs:A.create({blessingOfKings:!0,blessingOfMight:R.TristateEffectImproved}),debuffs:O.create({judgementOfWisdom:!0,bloodFrenzy:!0,giftOfArthas:!0,exposeArmor:!0,faerieFire:R.TristateEffectImproved,sunderArmor:!0,curseOfWeakness:R.TristateEffectRegular,heartOfTheCrusader:!0})},playerIconInputs:[],rotationInputs:K,includeBuffDebuffInputs:[x,N,I],excludeBuffDebuffInputs:[],otherInputs:{inputs:[j,U,G,L,D,H]},encounterPicker:{showExecuteProportion:!1},presets:{talents:[_],gear:[Z,X,Y]}})}}export{q as D,$ as F,X as P,_ as S,Q as a,V as b,Y as c};
//# sourceMappingURL=sim-abc9b500.chunk.js.map