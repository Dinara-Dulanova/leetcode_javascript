var containsNearbyDuplicate = function(nums, k) {
    let hash = {};
    for (let i = 0; i < nums.length; i++ ) {
        let char = nums[i]
        if (hash[char] === undefined) {
            hash[char] = i
        } else {
            if (Math.abs(i - hash[char]) <= k) {
                return true
            }
            hash[char] = i
        }
    }

    return false
};

console.log(containsNearbyDuplicate(nums = [1,2,3,1,2,3], k = 2))