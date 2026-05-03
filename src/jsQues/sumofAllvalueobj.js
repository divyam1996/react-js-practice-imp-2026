const obj = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3
    }
  }
};

function sumofobj(obj){
    let sum=0;
     for(let key in obj){
        if(typeof obj[key] == "object" ){
          sum+=sumofobj(obj[key])
        }
        else{
            sum+=obj[key];
        }
    }
    return sum;
}
console.log(sumofobj(obj));