var missingNumber = function(nums) {
    let sumTotal = 0;
    for (let  i = 0; i<= nums.length; i++) {
        sumTotal += i
    }

    // console.log(sumTotal)
    let sumArray = 0;
    for (let  i = 0; i< nums.length; i++) {
        sumArray += nums[i]
    }
    // console.log(sumArray)
    return sumTotal - sumArray
};
console.log(missingNumber([9,6,4,2,3,5,7,0,1]))
// missingNumber([3,0,1])