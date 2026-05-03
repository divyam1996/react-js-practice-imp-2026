const users = [
  { name: "Alice", role: "admin" },
  { name: "Bob", role: "user" },
  { name: "Charlie", role: "admin" }
];


function groupby(obj,key){
    return obj.reduce((acc,curr) =>{
        
        if(!acc[curr[key]]){
            acc[curr[key]]=[];
        }
         acc[curr[key]].push(curr);
         return acc;
    },{});
}

console.log(groupby(users,"role"));


/// leetcode 

// /**
//  * @param {Function} fn
//  * @return {Object}
//  */

// Array.prototype.groupBy = function(fn) {
//    return this.reduce((acc, curr) => {
//         const key = fn(curr); 
//         if (!acc[key]) {
//             acc[key] = []; 
//         }
//         acc[key].push(curr); 
//         return acc; 
//     }, {});
// };

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */