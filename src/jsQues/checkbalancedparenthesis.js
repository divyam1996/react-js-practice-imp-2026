let str =  "({[]})";


function checkbalance(str){
    let stack =[];
    
    let map = {
        '[':']',
        '{':'}',
        '(':')'
    };
    
    for (let s of str){
        if(s == '(' || s == '{' || s== '[' ){
            stack.push(s);
        }else{
            let top = stack.pop();
            // console.log(top,s)
            if(s !== map[top]){
                return false;
                
            }
        }
    }
    
    return stack.length == 0 ;
}


console.log(checkbalance(str));
            
            
            
            
            
            




