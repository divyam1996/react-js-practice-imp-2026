const objects = [
  { name: 'A', area: 50 },
  { name: 'B', area: 30 },
  { name: 'A', area: 60 },
  { name: 'D', area: 40 }
];

const seen = new Set();

const obj=objects.filter((item,index)=>{
    let key= `${item.name}-${item.area}`;
    if(!seen.has(key)){
        seen.add(key);
        return true;
    }
    return false;
})



console.log(obj);
