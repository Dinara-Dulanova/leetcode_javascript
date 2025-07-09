var firstUniqChar = function(s) {
    let hash = {}
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        hash[char] = hash[char] + 1 || 1;
    }
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (hash[char] === 1) {
            console.log(char)
            return s.indexOf(char)
        }
    }

    return -1
}


//незачем хранить индексы вообще, первый в хеше с кол-вом 1 и будет первым уникальным
// var firstUniqChar = function(s) {
//     let hash = {}
//     for (let i = 0; i < s.length; i++) {
//         let char = s[i];
//         if (hash[char] === undefined) {
//             hash[char] = {count : 1, index: i}
//         }
//         else {
//             hash[char].count ++;
//             hash[char].index = i
//         }
//     }
//
//     let minInd = Infinity;
//     for (let key in hash) {
//         if (hash[key].count ===1 && hash[key].index < minInd ) {
//             minInd = hash[key].index
//         }
//     }
//     if (minInd !== Infinity) return minInd
//     else return -1
//
// };

console.log(firstUniqChar("leetcode"))
