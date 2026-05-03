const input = {
  user: {
    name: "Alice",
    address: {
      city: "Hyderabad",
      zip: {
        code: "500001",
        ext: "01"
      }
    },
    tags: ["admin", "user"]
  },
  active: true
};


// Output:

// {
//   "user.name": "Alice",
//   "user.address.city": "Hyderabad",
//   "user.address.zip.code": "500001",
//   "user.address.zip.ext": "01",
//   "user.tags.0": "admin",
//   "user.tags.1": "user",
//   "active": true
// }

function flattenobj(obj,prefix= ""){
    let result= {};
    for(let key in obj){
        let newkey = prefix?prefix+"."+key:key;
        if(typeof obj[key] === "object" && obj[key]!== null){
            Object.assign(result,flattenobj(obj[key],newkey));
        }else{
            result[newkey]= obj[key];
        }
    }


return result;

}


console.log(flattenobj(input));


let str = "The system first validates the REQUEST then logs the RESPONSE."


// console.log(str.split(' '));

let a = str.split(' ');
// console.log(a);
let a1=''
for (let word of a){
//    console.log("w",word)
    if(word == 'REQUEST'){
        // console.log("w1",word)
        word ='RESPONSE'
        // console.log("w2",word)
    }
    else if(word == 'RESPONSE.'){
         console.log("w3",word)
          word='REQUEST';
        //    console.log("w4",word)
    }
     a1+=word+ " "
}

// console.log(a1)


// function swapWords(str) {
//   return str.replace(/\bREQUEST\b|\bRESPONSE\b/g, (word) => {
//     return word === "REQUEST" ? "RESPONSE" : "REQUEST";
//   });
// }

function swapWords(str) {
  return str
    .replaceAll("REQUEST", "__TEMP__")
    .replaceAll("RESPONSE", "REQUEST")
    .replaceAll("__TEMP__", "RESPONSE");
}

// Example
const input1 = "The system first validates the REQUEST then logs the RESPONSE. If the REQUEST is malformed, the RESPONSE will contain an error code.";

const output = swapWords(input1);
console.log(output);





