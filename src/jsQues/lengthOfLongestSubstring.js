// abcabcbb" Output: 3

function checklongestsubstr(str){
    let map= new Map();
    let left=0;
    let maxlen=0;
    for (let i =0;i<str.length;i++){
        if(map.has(str[i])){
            left=Math.max(map.get(str[i])+1,left);
        }
        map.set(str[i],i);
        maxlen=Math.max(maxlen,i-left+1);
    }
    return maxlen;
}

console.log(checklongestsubstr("abcabcbb"));
