import{cc as t,Q as n,n as e,o as a,dQ as i,cD as s,cE as l,cF as r,cG as o,cH as d,dR as h,cA as m,L as c,c2 as p,bZ as g,c0 as S,bj as f,A as u,dS as y,T as E,d as b,a as v,ap as O,b2 as P,am as H,K as T,aq as W}from"./detailed_results-ccec58a3.chunk.js";import{B as C,m as I,u as w,a as G,b as j,j as R,I as M,w as A,T as k}from"./individual_sim_ui-7a1d617c.chunk.js";import{T as F}from"./totem_inputs-92fc5250.chunk.js";const N={name:"Tank Healing",data:t.create({talentsString:"-30205033-05005331335010501122331251",glyphs:n.create({major1:e.GlyphOfEarthlivingWeapon,major2:e.GlyphOfEarthShield,major3:e.GlyphOfLesserHealingWave,minor2:a.GlyphOfWaterShield,minor1:a.GlyphOfRenewedLife,minor3:a.GlyphOfGhostWolf})})},B={name:"Raid Healing",data:t.create({talentsString:"-3020503-50005331335310501122331251",glyphs:n.create({major1:e.GlyphOfChainHeal,major2:e.GlyphOfEarthShield,major3:e.GlyphOfEarthlivingWeapon,minor2:a.GlyphOfWaterShield,minor1:a.GlyphOfRenewedLife,minor3:a.GlyphOfGhostWolf})})},L=i.create({totems:s.create({earth:l.StrengthOfEarthTotem,air:r.WrathOfAirTotem,fire:o.FlametongueTotem,water:d.HealingStreamTotem}),useEarthShield:!0,useRiptide:!0}),D=h.create({shield:m.WaterShield,bloodlust:!0,earthShieldPPM:0}),x=c.create({defaultPotion:p.RunicManaInjector,flask:g.FlaskOfTheFrostWyrm,food:S.FoodFishFeast}),_={name:"Pre-raid Preset",tooltip:C,gear:f.fromJsonString('{"items": [\n\t\t{\n\t\t\t"id": 42555,\n\t\t\t"enchant": 3820,\n\t\t\t"gems": [\n\t\t\t\t41401,\n\t\t\t\t40017\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40681\n\t\t},\n\t\t{\n\t\t\t"id": 37875,\n\t\t\t"enchant": 3838,\n\t\t\t"gems": [\n\t\t\t\t40017\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 37291,\n\t\t\t"enchant": 3859\n\t\t},\n\t\t{\n\t\t\t"id": 44180,\n\t\t\t"enchant": 2381\n\t\t},\n\t\t{\n\t\t\t"id": 37788,\n\t\t\t"enchant": 3758,\n\t\t\t"gems": [\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 37623,\n\t\t\t"enchant": 3604,\n\t\t\t"gems": [\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40693,\n\t\t\t"gems": [\n\t\t\t\t40051,\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 37791,\n\t\t\t"enchant": 3721\n\t\t},\n\t\t{\n\t\t\t"id": 44202,\n\t\t\t"enchant": 3606,\n\t\t\t"gems": [\n\t\t\t\t40105\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 44283\n\t\t},\n\t\t{\n\t\t\t"id": 37694\n\t\t},\n\t\t{\n\t\t\t"id": 37111\n\t\t},\n\t\t{\n\t\t\t"id": 37657\n\t\t},\n\t\t{\n\t\t\t"id": 37169,\n\t\t\t"enchant": 3834\n\t\t},\n\t\t{\n\t\t\t"id": 40700,\n\t\t\t"enchant": 1128\n\t\t},\n\t\t{\n\t\t\t"id": 40709\n\t\t}\n  ]}')},J={name:"P1 Preset",tooltip:C,gear:f.fromJsonString('{"items": [\n        {\n          "id": 40510,\n          "enchant": 3820,\n          "gems": [\n            41401,\n            39998\n          ]\n        },\n        {\n          "id": 44662,\n          "gems": [\n            40051\n          ]\n        },\n        {\n          "id": 40513,\n          "enchant": 3810,\n          "gems": [\n            39998\n          ]\n        },\n        {\n          "id": 44005,\n          "enchant": 3831,\n          "gems": [\n            40027\n          ]\n        },\n        {\n          "id": 40508,\n          "enchant": 2381,\n          "gems": [\n            39998,\n            40051\n          ]\n        },\n        {\n          "id": 40209,\n          "enchant": 2332,\n          "gems": [\n            0\n          ]\n        },\n        {\n          "id": 40564,\n          "enchant": 3246,\n          "gems": [\n            0\n          ]\n        },\n        {\n          "id": 40327,\n          "gems": [\n            39998\n          ]\n        },\n        {\n          "id": 40512,\n          "enchant": 3721,\n          "gems": [\n            39998,\n            40027\n          ]\n        },\n        {\n          "id": 39734,\n          "enchant": 3244\n        },\n        {\n          "id": 40399\n        },\n        {\n          "id": 40375\n        },\n        {\n          "id": 37111\n        },\n        {\n          "id": 40685\n        },\n        {\n          "id": 40395,\n          "enchant": 3834\n        },\n        {\n          "id": 40401,\n          "enchant": 1128\n        },\n        {\n          "id": 40709\n        }\n      ]}')},K={name:"P2 Preset",tooltip:C,gear:f.fromJsonString('{"items": [\n        {\n          "id": 46201,\n          "enchant": 3820,\n          "gems": [\n            41401,\n            40027\n          ]\n        },\n        {\n          "id": 45443,\n          "gems": [\n            40027\n          ]\n        },\n        {\n          "id": 46204,\n          "enchant": 3810,\n          "gems": [\n            45883\n          ]\n        },\n        {\n          "id": 45486,\n          "enchant": 3831,\n          "gems": [\n            40051\n          ]\n        },\n        {\n          "id": 45867,\n          "enchant": 2381,\n          "gems": [\n            40051,\n            39998\n          ]\n        },\n        {\n          "id": 45460,\n          "enchant": 2332,\n          "gems": [\n            40027,\n            0\n          ]\n        },\n        {\n          "id": 46199,\n          "enchant": 3246,\n          "gems": [\n            40051,\n            0\n          ]\n        },\n        {\n          "id": 45151,\n          "gems": [\n            39998\n          ]\n        },\n        {\n          "id": 46202,\n          "enchant": 3721,\n          "gems": [\n            39998,\n            40027\n          ]\n        },\n        {\n          "id": 45615,\n          "enchant": 3232,\n          "gems": [\n            39998,\n            40027\n          ]\n        },\n        {\n          "id": 45614,\n          "gems": [\n            40051\n          ]\n        },\n        {\n          "id": 46046,\n          "gems": [\n            40051\n          ]\n        },\n        {\n          "id": 45535\n        },\n        {\n          "id": 45466\n        },\n        {\n          "id": 46017,\n          "enchant": 3834\n        },\n        {\n          "id": 45470,\n          "enchant": 1128,\n          "gems": [\n            40027\n          ]\n        },\n        {\n          "id": 45114\n        }\n      ]}')},Q=I({fieldName:"bloodlust",id:u.fromSpellId(2825)}),U=w({fieldName:"shield",values:[{value:m.NoShield,tooltip:"No Shield"},{actionId:u.fromSpellId(57960),value:m.WaterShield},{actionId:u.fromSpellId(49281),value:m.LightningShield}]}),q={inputs:[G({fieldName:"primaryHeal",label:"Primary Heal",labelTooltip:"Set to 'AutoHeal', to automatically swap based on best heal.",values:[{name:"Auto Heal",value:y.AutoHeal},{name:"Lesser Healing Wave",value:y.LesserHealingWave},{name:"Healing Wave",value:y.HealingWave},{name:"Chain Heal",value:y.ChainHeal}]}),j({fieldName:"useRiptide",label:"Use Riptide",labelTooltip:"Causes riptide to be cast on primary target when CD is available and not already on.",showWhen:t=>t.getTalents().riptide,changeEmitter:t=>E.onAny([t.specOptionsChangeEmitter,t.rotationChangeEmitter,t.talentsChangeEmitter])}),j({fieldName:"useEarthShield",label:"Use Earth Shield",labelTooltip:"Causes earth shield to be cast on healing target.",showWhen:t=>t.getTalents().earthShield,changeEmitter:t=>E.onAny([t.specOptionsChangeEmitter,t.rotationChangeEmitter,t.talentsChangeEmitter])}),R({fieldName:"earthShieldPPM",label:"Earth Shield PPM",labelTooltip:"How many times Earth Shield should be triggered per minute.",showWhen:t=>t.getTalents().earthShield&&t.getRotation().useEarthShield,changeEmitter:t=>E.onAny([t.specOptionsChangeEmitter,t.rotationChangeEmitter,t.talentsChangeEmitter])})]};class Z extends M{constructor(t,n){super(t,n,{cssClass:"restoration-shaman-sim-ui",cssScheme:"shaman",knownIssues:[],warnings:[],epStats:[b.StatIntellect,b.StatSpirit,b.StatSpellPower,b.StatSpellCrit,b.StatSpellHaste,b.StatMP5],epReferenceStat:b.StatSpellPower,displayStats:[b.StatHealth,b.StatMana,b.StatStamina,b.StatIntellect,b.StatSpirit,b.StatSpellPower,b.StatSpellCrit,b.StatSpellHaste,b.StatMP5],modifyDisplayStats:t=>{let n=new v;return n=n.addStat(b.StatSpellCrit,1*t.getTalents().tidalMastery*A),{talents:n}},defaults:{gear:J.gear,epWeights:v.fromMap({[b.StatIntellect]:.22,[b.StatSpirit]:.05,[b.StatSpellPower]:1,[b.StatSpellCrit]:.67,[b.StatSpellHaste]:1.29,[b.StatMP5]:.08}),consumes:x,rotation:L,talents:B.data,specOptions:D,raidBuffs:O.create({arcaneBrilliance:!0,divineSpirit:!0,giftOfTheWild:P.TristateEffectImproved,moonkinAura:P.TristateEffectImproved,sanctifiedRetribution:!0}),partyBuffs:H.create({}),individualBuffs:T.create({blessingOfKings:!0,blessingOfWisdom:2,vampiricTouch:!0}),debuffs:W.create({faerieFire:P.TristateEffectImproved,judgementOfWisdom:!0,misery:!0,curseOfElements:!0,shadowMastery:!0})},playerIconInputs:[U,Q],rotationInputs:q,includeBuffDebuffInputs:[],excludeBuffDebuffInputs:[],otherInputs:{inputs:[k]},customSections:[F],encounterPicker:{showExecuteProportion:!1},presets:{talents:[B,N],gear:[_,J,K]}})}}export{L as D,J as P,Z as R,B as a,D as b,x as c,K as d};
//# sourceMappingURL=sim-743548b2.chunk.js.map