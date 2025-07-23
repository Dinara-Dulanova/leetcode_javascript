// сначала вариант с новой строкой то есть будет по памяти O(n)
// var isPalindrome = function(s) {
//     let cleanS = [];
//     let lowerS = s.trim().toLowerCase()
//
//     for (char of lowerS) {
//         if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9') ) {
//             cleanS.push(char)
//         }
//     }
//     // console.log(cleanS)
//     for (let i = 0; i < cleanS.length/2; i++) {
//         if (cleanS[i] != cleanS[cleanS.length-i-1]) {
//             // console.log(i)
//             // console.log(cleanS[i])
//             // console.log(cleanS[cleanS.length-i-1])
//             return false
//         }
//     }
//
//     return true
// };

//вариант с replace и регуляркой
var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, "")
        for (let i = 0; i < s.length/2; i++) {
        if (s[i] != s[s.length-i-1]) {
            return false
        }
    }
        return true
}

console.log(isPalindrome("1a2"))
