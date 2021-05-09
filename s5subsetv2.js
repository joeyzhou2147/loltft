class cham{
  constructor(typ, pri, nam = "") {
    this.types = typ;
    this.price = pri;
    this.name = nam;
  }
}
Rmap = {
"破败":new Set([3,6,9]),
"黑夜":new Set([2,4,6,8]),
"魔女":new Set([3]),
"小恶":new Set([3,5,7]),
"屠龙":new Set([2,4]),
"丧尸":new Set([3,4,5]),
"圣光":new Set([3,6,9]),
"黎明":new Set([2,4,6,8]),
"神佑":new Set([2,3]),
"龙族":new Set([3,5]),
"铁甲":new Set([2,3]),
"永猎":new Set([1]),
"复生":new Set([2,3]),
"刺客":new Set([2,4,6]),
"游侠":new Set([2,4]),
"斗士":new Set([2,4]),
"征服":new Set([2,4,6,8]),
"复苏":new Set([2,4]),
"神谕":new Set([2,4]),
"骑士":new Set([2,4,6]),
"法师":new Set([2,4]),
"神盾":new Set([3,6]),
"秘术":new Set([2,3,4]),
"重骑":new Set([2,3,4]),
"大魔":new Set([1]),
"神王":new Set([1]),
"驯龙":new Set([1])
}
cost1 = [["黑夜", "复苏"],[],[]];

cost1 = [
new Model(["黑夜", "复苏"],1),
new Model(["破败", "斗士"],1),
new Model(["破败", "游侠"],1),
new Model(["小恶", "骑士",1),
new Model(["龙族", "神谕",1),
new Model(["黎明", "斗士",1),
new Model(["圣光", "骑士",1),
new Model(["小恶", "法师",1),
new Model(["黎明", "刺客",1),
new Model(["魔女", "复苏",1),
new Model(["小恶", "重骑",1),
new Model(["圣光", "征服",1),
new Model(["丧尸", "征服",1)];
cost2 = [
new Model(["魔女", "刺客",2),
new Model(["黎明", "复苏",2),
new Model(["屠龙", "神谕",2),
new Model(["丧尸", "法师",2),
new Model(["小恶", "神谕",2),
new Model(["圣光", "游侠",2),
new Model(["铁甲", "骑士",2),
new Model(["破败", "法师",2),
new Model(["黑夜", "重骑",2),
new Model(["破败", "重骑",2),
new Model(["圣光", "神谕",2),
new Model(["破败", "骑士",2),
new Model(["龙族", "斗士",2),
];
cost3 = [
];
cost4 = [
];
cost5 = [
];
Alist = new Set(["破败","黑夜","魔女","小恶","屠龙","丧尸","圣光","黎明","神佑","龙族","铁甲","永猎","复生"])
Blist = new Set(["刺客","游侠","斗士","征服","复苏","神谕","骑士","法师","神盾","秘术","重骑","大魔","神王","驯龙"])
cost6 = [
new Model("龙族", "斗士",2),
];
