let persons=[
    {name:"Divyam",age:"30"},
    {name:"Akash",age:"21"},
    {name:"Aniket",age:"29"}
]

var minage=persons.reduce((acc,curr)=>{
    if(curr.age<acc.age){
        acc=curr
    }
return acc;
})

console.log(minage)