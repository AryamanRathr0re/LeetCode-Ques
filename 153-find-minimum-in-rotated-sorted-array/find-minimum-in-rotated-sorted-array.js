/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let n= nums.length
    let start=0
    let end=n-1
    while(start<end){
        let mid=Math.floor(start+(end-start)/2)
        if(nums[mid]>nums[end]){
            start=mid+1
        }
        else{
            end=mid
        }
    }
    return nums[start   ]
};