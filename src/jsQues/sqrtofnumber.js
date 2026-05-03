/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let low=0;
    let high=x;
    let ans=0
    while(low<=high){
        let mid = Math.floor((low+high)/2);
        if(mid*mid<=x){
            ans=mid;
            low=mid+1;
        }
        else{
            high=mid-1;
        }
    }
    return ans;
};