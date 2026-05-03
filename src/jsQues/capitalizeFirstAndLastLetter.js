let name = "divyam bansal";


function capitalizeFirstAndLast(str){
    let word= str.split(" ");
     let capital=word.map((item)=>{
        //  console.log(item)
         let w1= item[0].toUpperCase();
         let w2= item.slice(1,item.length-1);
         let w3= item[item.length-1].toUpperCase();
         return w1+w2+w3;
     });
    
    // console.log(capital)
    
    
    return capital.join(" ");
}

console.log(capitalizeFirstAndLast(name));