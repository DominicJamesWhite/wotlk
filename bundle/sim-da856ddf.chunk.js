import{A as t,cA as n,cB as e,cc as a,Q as i,n as s,o as l,cC as o,cD as r,cE as d,cF as m,cG as c,cH as h,cI as g,L as u,c2 as p,bZ as f,c0 as S,bj as b,aJ as y,T as v,d as T,a as w,ap as M,b2 as C,am as P,K as W,aq as O}from"./detailed_results-ccec58a3.chunk.js";import{m as F,u as I,a as N,b as L,c as R,B as k,I as A,v as B,w as D,T as E}from"./individual_sim_ui-7a1d617c.chunk.js";import{T as H}from"./totem_inputs-92fc5250.chunk.js";const j=F({fieldName:"bloodlust",id:t.fromSpellId(2825)}),G=I({fieldName:"shield",values:[{value:n.NoShield,tooltip:"No Shield"},{actionId:t.fromSpellId(57960),value:n.WaterShield},{actionId:t.fromSpellId(49281),value:n.LightningShield}]}),x={inputs:[N({fieldName:"type",label:"Type",values:[{name:"Adaptive",value:e.Adaptive,tooltip:"Dynamically adapts based on available mana to maximize CL casts without going OOM."},{name:"Manual",value:e.Manual,tooltip:"Allows custom selection of which spells to use and to modify cast conditions."}]}),L({fieldName:"inThunderstormRange",label:"In Thunderstorm Range",labelTooltip:"Thunderstorm will hit all targets when cast. Ignores knockback.",showWhen:t=>t.getTalents().thunderstorm}),R({fieldName:"lvbFsWaitMs",label:"Max wait for LvB/FS (ms)",labelTooltip:"Amount of time the sim will wait if FS is about to fall off or LvB CD is about to come up. Setting to 0 will default to 175ms"}),L({fieldName:"useChainLightning",label:"Use Chain Lightning in Rotation",labelTooltip:"Use Chain Lightning in rotation",enableWhen:t=>t.getRotation().type==e.Manual}),L({fieldName:"useClOnlyGap",label:"Use CL only as gap filler",labelTooltip:"Use CL to fill short gaps in LvB CD instead of on CD.",enableWhen:t=>t.getRotation().type==e.Manual&&t.getRotation().useChainLightning}),R({fieldName:"clMinManaPer",label:"Min mana percent to use Chain Lightning",labelTooltip:"Customize minimum mana level to cast Chain Lightning. 0 will spam until OOM.",enableWhen:t=>t.getRotation().type==e.Manual&&t.getRotation().useChainLightning}),L({fieldName:"useFireNova",label:"Use Fire Nova in Rotation",labelTooltip:"Fire Nova will hit all targets when cast.",enableWhen:t=>t.getRotation().type==e.Manual}),R({fieldName:"fnMinManaPer",label:"Min mana percent to use FireNova",labelTooltip:"Customize minimum mana level to cast Fire Nova. 0 will spam until OOM.",enableWhen:t=>t.getRotation().type==e.Manual&&t.getRotation().useFireNova}),L({fieldName:"overwriteFlameshock",label:"Allow Flameshock to be overwritten",labelTooltip:"Will use flameshock at the end of the duration even if its still ticking if there isn't enough time to cast lavaburst before expiring.",enableWhen:t=>t.getRotation().type==e.Manual}),L({fieldName:"alwaysCritLvb",label:"Only cast Lavaburst with FS",labelTooltip:"Will only cast Lavaburst if Flameshock will be active when the cast finishes.",enableWhen:t=>t.getRotation().type==e.Manual}),L({fieldName:"useThunderstorm",label:"Allow Thunderstorm to be cast.",labelTooltip:"Disabling this will stop thunderstorm from being cast entirely.",enableWhen:t=>t.getRotation().type==e.Manual,showWhen:t=>t.getTalents().thunderstorm})]},J={name:"Standard",data:a.create({talentsString:"0532001523212351322301351-005052031",glyphs:i.create({major1:s.GlyphOfLava,major2:s.GlyphOfTotemOfWrath,major3:s.GlyphOfLightningBolt,minor1:l.GlyphOfThunderstorm,minor2:l.GlyphOfWaterShield,minor3:l.GlyphOfGhostWolf})})},U=o.create({totems:r.create({earth:d.StrengthOfEarthTotem,air:m.WrathOfAirTotem,fire:c.TotemOfWrath,water:h.ManaSpringTotem}),type:e.Adaptive,fnMinManaPer:66,clMinManaPer:33,useChainLightning:!1,useFireNova:!1,useThunderstorm:!0}),_=g.create({shield:n.WaterShield,bloodlust:!0}),z=u.create({defaultPotion:p.RunicManaInjector,flask:f.FlaskOfTheFrostWyrm,food:S.FoodFishFeast}),q={name:"Pre-raid Preset",tooltip:k,gear:b.fromJsonString('{"items": [\n\t\t{\n\t\t\t"id": 37180,\n\t\t\t"enchant": 3820,\n\t\t\t"gems": [\n\t\t\t\t41285,\n\t\t\t\t42144\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 37595\n\t\t},\n\t\t{\n\t\t\t"id": 37673,\n\t\t\t"enchant": 3810,\n\t\t\t"gems": [\n\t\t\t\t42144\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 41610,\n\t\t\t"enchant": 3722\n\t\t},\n\t\t{\n\t\t\t"id": 39592,\n\t\t\t"enchant": 3832,\n\t\t\t"gems": [\n\t\t\t\t42144,\n\t\t\t\t40025\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 37788,\n\t\t\t"enchant": 2332,\n\t\t\t"gems": [\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 39593,\n\t\t\t"enchant": 3246,\n\t\t\t"gems": [\n\t\t\t\t40051,\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40696,\n\t\t\t"gems": [\n\t\t\t\t40049,\n\t\t\t\t39998\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 37791,\n\t\t\t"enchant": 3719\n\t\t},\n\t\t{\n\t\t\t"id": 44202,\n\t\t\t"enchant": 3826,\n\t\t\t"gems": [\n\t\t\t\t39998\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 43253,\n\t\t\t"gems": [\n\t\t\t\t40027\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 37694\n\t\t},\n\t\t{\n\t\t\t"id": 40682\n\t\t},\n\t\t{\n\t\t\t"id": 37873\n\t\t},\n\t\t{\n\t\t\t"id": 41384,\n\t\t\t"enchant": 3834\n\t\t},\n\t\t{\n\t\t\t"id": 40698\n\t\t},\n\t\t{\n\t\t\t"id": 40708\n\t\t}\n  ]}')},K={name:"P1 Preset",tooltip:k,gear:b.fromJsonString('{"items": [\n\t\t{\n\t\t\t"id": 40516,\n\t\t\t"enchant": 3820,\n\t\t\t"gems": [\n\t\t\t\t41285,\n\t\t\t\t40027\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 44661,\n\t\t\t"gems": [\n\t\t\t\t39998\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40286,\n\t\t\t"enchant": 3810\n\t\t},\n\t\t{\n\t\t\t"id": 44005,\n\t\t\t"enchant": 3722,\n\t\t\t"gems": [\n\t\t\t\t40027\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40514,\n\t\t\t"enchant": 3832,\n\t\t\t"gems": [\n\t\t\t\t42144,\n\t\t\t\t42144\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40324,\n\t\t\t"enchant": 2332,\n\t\t\t"gems": [\n\t\t\t\t42144,\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40302,\n\t\t\t"enchant": 3246,\n\t\t\t"gems": [\n\t\t\t\t0\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40301,\n\t\t\t"gems": [\n\t\t\t\t40014\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\t"id": 40560,\n\t\t\t"enchant": 3721\n\t\t},\n\t\t{\n\t\t\t"id": 40519,\n\t\t\t"enchant": 3826\n\t\t},\n\t\t{\n\t\t\t"id": 37694\n\t\t},\n\t\t{\n\t\t\t"id": 40399\n\t\t},\n\t\t{\n\t\t\t"id": 40432\n\t\t},\n\t\t{\n\t\t\t"id": 40255\n\t\t},\n\t\t{\n\t\t\t"id": 40395,\n\t\t\t"enchant": 3834\n\t\t},\n\t\t{\n\t\t\t"id": 40401,\n\t\t\t"enchant": 1128\n\t\t},\n\t\t{\n\t\t\t"id": 40267\n\t\t}\n  ]}')},Q={name:"P2 Preset",tooltip:k,gear:b.fromJsonString('{"items": [\n        {\n          "id": 46209,\n          "enchant": 3820,\n          "gems": [\n            41285,\n            40048\n          ]\n        },\n        {\n          "id": 45933,\n          "gems": [\n            39998\n          ]\n        },\n        {\n          "id": 46211,\n          "enchant": 3810,\n          "gems": [\n            39998\n          ]\n        },\n        {\n          "id": 45242,\n          "enchant": 3722,\n          "gems": [\n            39998\n          ]\n        },\n        {\n          "id": 46206,\n          "enchant": 3832,\n          "gems": [\n            39998,\n            39998\n          ]\n        },\n        {\n          "id": 45460,\n          "enchant": 2332,\n          "gems": [\n            39998,\n            0\n          ]\n        },\n        {\n          "id": 45665,\n          "enchant": 3604,\n          "gems": [\n            39998,\n            39998,\n            0\n          ]\n        },\n        {\n          "id": 45616,\n          "enchant": 3599,\n          "gems": [\n            39998,\n            39998,\n            39998\n          ]\n        },\n        {\n          "id": 46210,\n          "enchant": 3721,\n          "gems": [\n            39998,\n            40027\n          ]\n        },\n        {\n          "id": 45537,\n          "enchant": 3606,\n          "gems": [\n            39998,\n            40027\n          ]\n        },\n        {\n          "id": 46046,\n          "gems": [\n            39998\n          ]\n        },\n        {\n          "id": 45495,\n          "gems": [\n            39998\n          ]\n        },\n        {\n          "id": 45518\n        },\n        {\n          "id": 40255\n        },\n        {\n          "id": 45612,\n          "enchant": 3834,\n          "gems": [\n            39998\n          ]\n        },\n        {\n          "id": 45470,\n          "enchant": 1128,\n          "gems": [\n            39998\n          ]\n        },\n        {\n          "id": 40267\n        }\n      ]}')},Z={name:"P3 Preset Horde",enableWhen:t=>t.getFaction()==y.Horde,tooltip:k,gear:b.fromJsonString('{"items": [\n        {\n          "id": 48328,\n          "enchant": 3820,\n          "gems": [\n            41285,\n            40153\n          ]\n        },\n        {\n          "id": 47468,\n          "gems": [\n            40155\n          ]\n        },\n        {\n          "id": 48330,\n          "enchant": 3810,\n          "gems": [\n            40113\n          ]\n        },\n        {\n          "id": 47551,\n          "enchant": 3722,\n          "gems": [\n            40113\n          ]\n        },\n        {\n          "id": 48326,\n          "enchant": 3832,\n          "gems": [\n            40113,\n            40132\n          ]\n        },\n        {\n          "id": 45460,\n          "enchant": 2332,\n          "gems": [\n            40113,\n            0\n          ]\n        },\n        {\n          "id": 48327,\n          "enchant": 3604,\n          "gems": [\n            40155,\n            0\n          ]\n        },\n        {\n          "id": 47447,\n          "enchant": 3599,\n          "gems": [\n            40132,\n            40113,\n            40113\n          ]\n        },\n        {\n          "id": 47479,\n          "enchant": 3721,\n          "gems": [\n            40113,\n            40113,\n            40113\n          ]\n        },\n        {\n          "id": 47456,\n          "enchant": 3606,\n          "gems": [\n            40113,\n            40113\n          ]\n        },\n        {\n          "id": 46046,\n          "gems": [\n            40155\n          ]\n        },\n        {\n          "id": 45495,\n          "gems": [\n            40113\n          ]\n        },\n        {\n          "id": 47477\n        },\n        {\n          "id": 45518\n        },\n        {\n          "id": 47422,\n          "enchant": 3834,\n          "gems": [\n            40113\n          ]\n        },\n        {\n          "id": 47448,\n          "enchant": 1128,\n          "gems": [\n            40155\n          ]\n        },\n        {\n          "id": 47666\n        }\n      ]\n    }')},V={name:"P3 Preset Alli",enableWhen:t=>t.getFaction()==y.Alliance,tooltip:k,gear:b.fromJsonString('{"items": [\n        {\n          "id": 48323,\n          "enchant": 3820,\n          "gems": [\n            41285,\n            40155\n          ]\n        },\n        {\n          "id": 47144,\n          "gems": [\n            40155\n          ]\n        },\n        {\n          "id": 48321,\n          "enchant": 3810,\n          "gems": [\n            40113\n          ]\n        },\n        {\n          "id": 47552,\n          "enchant": 3722,\n          "gems": [\n            40113\n          ]\n        },\n        {\n          "id": 48325,\n          "enchant": 3832,\n          "gems": [\n            40113,\n            40132\n          ]\n        },\n        {\n          "id": 45460,\n          "enchant": 2332,\n          "gems": [\n            40113,\n            0\n          ]\n        },\n        {\n          "id": 48324,\n          "enchant": 3604,\n          "gems": [\n            40155,\n            0\n          ]\n        },\n        {\n          "id": 47084,\n          "enchant": 3599,\n          "gems": [\n            40132,\n            40113,\n            40113\n          ]\n        },\n        {\n          "id": 47190,\n          "enchant": 3721,\n          "gems": [\n            40113,\n            40113,\n            40113\n          ]\n        },\n        {\n          "id": 47099,\n          "enchant": 3606,\n          "gems": [\n            40113,\n            40113\n          ]\n        },\n        {\n          "id": 46046,\n          "gems": [\n            40155\n          ]\n        },\n        {\n          "id": 45495,\n          "gems": [\n            40113\n          ]\n        },\n        {\n          "id": 47188\n        },\n        {\n          "id": 45518\n        },\n        {\n          "id": 46980,\n          "enchant": 3834,\n          "gems": [\n            40113\n          ]\n        },\n        {\n          "id": 47085,\n          "enchant": 1128,\n          "gems": [\n            40155\n          ]\n        },\n        {\n          "id": 47666\n        }\n      ]\n    }')};class X extends A{constructor(t,n){super(t,n,{cssClass:"elemental-shaman-sim-ui",cssScheme:"shaman",knownIssues:[],warnings:[t=>({updateOn:v.onAny([t.player.rotationChangeEmitter,t.player.currentStatsEmitter]),getContent:()=>{const n=t.player.getCurrentStats().sets.includes("Skyshatter Regalia (2pc)"),e=t.player.getRotation().totems,a=e&&e.earth&&e.air&&e.fire&&e.water;return n&&!a?"T6 2pc bonus is equipped, but inactive because not all 4 totem types are being used.":""}})],epStats:[T.StatIntellect,T.StatSpellPower,T.StatSpellHit,T.StatSpellCrit,T.StatSpellHaste,T.StatMP5],epReferenceStat:T.StatSpellPower,displayStats:[T.StatHealth,T.StatMana,T.StatStamina,T.StatIntellect,T.StatSpellPower,T.StatSpellHit,T.StatSpellCrit,T.StatSpellHaste,T.StatMP5],modifyDisplayStats:t=>{let n=new w;return n=n.addStat(T.StatSpellHit,t.getTalents().elementalPrecision*B),n=n.addStat(T.StatSpellCrit,1*t.getTalents().tidalMastery*D),{talents:n}},defaults:{gear:K.gear,epWeights:w.fromMap({[T.StatIntellect]:.22,[T.StatSpellPower]:1,[T.StatSpellCrit]:.67,[T.StatSpellHaste]:1.29,[T.StatMP5]:.08}),consumes:z,rotation:U,talents:J.data,specOptions:_,raidBuffs:M.create({arcaneBrilliance:!0,divineSpirit:!0,giftOfTheWild:C.TristateEffectImproved,moonkinAura:C.TristateEffectImproved,sanctifiedRetribution:!0,demonicPact:500}),partyBuffs:P.create({}),individualBuffs:W.create({blessingOfKings:!0,blessingOfWisdom:2,vampiricTouch:!0}),debuffs:O.create({faerieFire:C.TristateEffectImproved,judgementOfWisdom:!0,misery:!0,curseOfElements:!0,shadowMastery:!0})},playerIconInputs:[G,j],rotationInputs:x,includeBuffDebuffInputs:[],excludeBuffDebuffInputs:[],otherInputs:{inputs:[E]},customSections:[H],encounterPicker:{showExecuteProportion:!1},presets:{talents:[J],gear:[q,K,Q,V,Z]}})}}export{U as D,X as E,K as P,J as S,_ as a,z as b,Q as c};
//# sourceMappingURL=sim-da856ddf.chunk.js.map