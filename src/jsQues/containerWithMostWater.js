/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let ans=0;
        let li=0,ri=height.length-1;
        while(li<ri)
        {
            ans=Math.max(ans,Math.min(height[li],height[ri])*(ri-li));
            if(height[li]<height[ri])
            {
                li++;
            }
            else
            {
                ri--;
            }
        }
        return ans;
};