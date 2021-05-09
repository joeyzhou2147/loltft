main();//print all 8-length subsets sorted by total cost
function main(){


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
  "恶魔":new Set([3,5,7]),
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
  "魔王":new Set([1]),
  "神王":new Set([1]),
  "驯龙":new Set([1])
  }
  all = [
  new Model("破败", "刺客",1),
  new Model("破败", "斗士",1),
  new Model("破败", "游侠",1),
  new Model("黑夜", "游侠",1)];
  function com(C){
    var str = "", a = {}, b = {};
      for(var i in all){
        a[C[i].carname] = !a[C[i].carname] ? 1 : a[C[i].carname]+1;
        b[C[i].model] = !a[C[i].model] ? 1 : a[C[i].model]+1;
      }
      str += helperCom(a, Amap) + helperCom(b, Bmap);
    return str;
  }
  function helperCom(countMap, typeMap){
    str = "";
      for(var i in countMap){
        count = countMap[i];
          while(count > 0 && !typeMap[i].has(count)) count--
        if(count > 0) str += countMap[i]+i;
      }
      return str;
  }
  function test(){
    return com(all)
    var str = "";
      for(var i in all) str += all[i].show()+"; ";
    return str;
  }
  document.getElementById("demo").innerHTML = test();

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

    return powerset.filter((a)=>a.length>=k);
  }
}
