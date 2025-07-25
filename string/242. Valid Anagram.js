var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    let sHash = {}
    for (let i = 0; i< s.length; i++) {
        let char = s[i]
        sHash[char] = sHash[char]  ?  sHash[char] + 1 : 1
    }

    for (let i = 0; i< t.length; i++) {
        let char = t[i]
        sHash[char] = sHash[char]  ?  sHash[char] - 1 : 0
    }

    for (let i = 0; i< s.length; i++) {
        let char = s[i]
        if (sHash[char]) {
            return false
        }
    }

    return true
    // console.log(sHash)
};

console.log(isAnagram("rat", "cat"))
