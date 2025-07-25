// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
//
// You must implement a solution with a linear runtime complexity and use only constant extra space.
//используем XOR, так как для одинаковых чисел он в результате даст 0
// то есть 1 XOR 1 XOR 4 = 4
var singleNumber = function(nums) {
    let rez = 0;
    for (let i = 0; i < nums.length; i++) {
        rez = rez ^ nums[i]
    }
    return rez
};



