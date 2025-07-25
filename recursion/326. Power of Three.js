var isPowerOfThree = function(n) {
    if (n === 0 || n === 2) return false
    if (n === 1 ) return true
    if (n >=3 && n % 3 === 0) return isPowerOfThree(n/3)
    return false
};

console.log(isPowerOfThree(-1))