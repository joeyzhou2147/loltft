main();//print all 8-length subsets sorted by total cost
function main(){

}


class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return '' + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod,pri) {
    super(brand);
    this.model = mod;
    this.price = pri*3;
  }
  show() {
    return this.present() + '-' + this.model;
  }
}
Amap = {
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
"复生":new Set([2,3])
}
Bmap = {
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

cost1 = [
new Model("黑夜", "复苏",1),
new Model("破败", "斗士",1),
new Model("破败", "游侠",1),
new Model("小恶", "骑士",1),
new Model("龙族", "神谕",1),
new Model("黎明", "斗士",1),
new Model("圣光", "骑士",1),
new Model("小恶", "法师",1),
new Model("黎明", "刺客",1),
new Model("魔女", "复苏",1),
new Model("小恶", "重骑",1),
new Model("圣光", "征服",1),
new Model("丧尸", "征服",1)];
Alist = new Set(["破败","黑夜","魔女","小恶","屠龙","丧尸","圣光","黎明","神佑","龙族","铁甲","永猎","复生"])
Blist = new Set(["刺客","游侠","斗士","征服","复苏","神谕","骑士","法师","神盾","秘术","重骑","大魔","神王","驯龙"])
cost2 = [
new Model("魔女", "刺客",2),
new Model("黎明", "复苏",2),
new Model("屠龙", "神谕",2),
new Model("丧尸", "法师",2),
new Model("小恶", "神谕",2),
new Model("圣光", "游侠",2),
new Model("铁甲", "骑士",2),
new Model("破败", "法师",2),
new Model("黑夜", "重骑",2),
new Model("破败", "重骑",2),
new Model("圣光", "神谕",2),
new Model("破败", "骑士",2),
new Model("龙族", "斗士",2),
];
all = cost1;
function sum(C){
	var str = "", a = {}, b = {},total=0,rate = 0;
    for(var i in C){
    	total += C[i].price;
    	a[C[i].carname] = !a[C[i].carname] ? 1 : a[C[i].carname]+1;
    	b[C[i].model] = !b[C[i].model] ? 1 : b[C[i].model]+1;
    }
    helpA = helperCom(a, Amap);helpB = helperCom(b, Bmap);
    rate += helpA[0] + helpB[0];
    str += [rate, total, helpA[1], helpB[1]].filter((s)=>s!="").join(",");
	return str;
}
function helperCom(countMap, typeMap){
	str = "";rate = 0;
    for(var i in countMap){
    	count = countMap[i];
        while(count > 0 && !typeMap[i].has(count)) count--
    	if(count > 0) str += countMap[i]+i;
        rate += count;
    }
    return [rate, str];
}
function test(){
	return com(all)
	var str = "";
    for(var i in all) str += all[i].show()+"; ";
	return str;
}
/*
1	100%0%	0%	0%	0%
2	100%0%	0%	0%	0%
3	75%	25%	0%	0%	0%
4	55%	30%	15%	0%	0%
5	45%	33%	20%	2%	0%
6	35%	35%	25%	5%	0%
7	19%	35%	30%	15%	1%
8	15%	20%	35%	25%	5%
9	10%	15%	30%	30%	15%
*/
function lvl4(){
	arr = cost1.concat(cost2)
    coms = [...new Set(subsetsK(arr, 5).map((a)=> sum(a)))];
    return coms.map((a)=> a.split(",")).filter((a)=>a.length>3).sort((a, b)=>{
        return b[0]*1 - a[0]*1 || b[1]*1 - a[1]*1;
    });
}

function subsets(nums) {
	const powerset = [];
	generatePowerset([], 0);

	function generatePowerset(path, index) {
		powerset.push(path);
		for (let i = index; i < nums.length; i++) {
			generatePowerset([...path, nums[i]], i + 1);
		}
	}

	return powerset;
}
function subsetsK(nums, k=7) {
	const powerset = [];
	generatePowerset([], 0);

	function generatePowerset(path, index) {
		powerset.push(path);
		for (let i = index; i < nums.length; i++) {
			generatePowerset([...path, nums[i]], i + 1);
		}
	}

	return powerset.filter((a)=>a.length==k);
}
