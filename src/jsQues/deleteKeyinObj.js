const obj = {
  a: 1,
  b: {
    a: 2,
    c: {
      a: 3
    }
  }
};

function deletekeyinNestedObj(obj,rmkey){
    for(let key in obj){
        if(typeof obj[key] == "object" &&  obj[key] != "null"){
          deletekeyinNestedObj(obj[key],rmkey);
        }
        else{
           if(key== rmkey){
            delete obj[key];
           }
        }
    }
    return obj;
}
console.log(deletekeyinNestedObj(obj,'a'))