var findMaxAverage = function(nums, k) {
    let max = 0;
    for (let  i = 0; i <  k; i++) {
        max += nums[i];
        sum = max;
    }
    for (let  i = 1; i <= nums.length - k; i++) {
        console.log(i)
        sum = sum - nums[i-1] + nums[i+k-1];
        max = Math.max(max, sum)
    }

    return max/k
};

console.log(findMaxAverage([5], 1))