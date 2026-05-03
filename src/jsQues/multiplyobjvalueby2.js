var objmul={
  a: 2,
  b: {
    c: 4
  }
}

function multply(obj){
    let result={};
    for(let key in obj){
        if(typeof obj[key] == "object" ){
          result[key]=multply(obj[key]);
        }
        else{
            result[key]=obj[key]*2;
        }
    }
    return result;
}
console.log(multply(objmul));