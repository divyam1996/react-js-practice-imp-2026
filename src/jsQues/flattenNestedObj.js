var newObj={
  a: 2,
  b: {
    c: 4
  }
}

function flatten(obj, prefix = "") {
    let result = {};
    for (let key in obj) {
        let newkey = prefix?prefix + "#" +key:key;
        if (typeof obj[key] == "object" && obj[key] !== null) {
            // flatten(obj[key],newkey);
            Object.assign(result,flatten(obj[key],newkey))
        }else{
            result[newkey]=obj[key];
        }
    }
    return result;
}
console.log(flatten(newObj));

// with default parameter in object
function flattenobj(obj , parentkey="", result={}){
    for(let key in obj){
        let newkey = parentkey ? `${parentkey}#${key}`: key;
        
        if(typeof(obj[key])== 'object' && obj[key] !== null && !Array.isArray(obj[key])){
            flattenobj(obj[key],newkey,result);
        }else {
            result[newkey]= obj[key];
        }
    }
    return result;
}
var obj={
  a: 2,
  b: {
    c: 4
  }
}
console.log(flattenobj(obj))