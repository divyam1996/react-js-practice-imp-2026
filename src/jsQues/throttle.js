function throttle(fn,delay){
    let lastcall=0;
    return function(...args){
        const now= Date.now();
        if(now-lastcall>=delay){
            lastcall=now;
            fn.apply(this,args)
        }
    }
}

const x= throttle(()=>{console.log("hello from there")},1000)
x();
x();
x();
x();
x();
x();