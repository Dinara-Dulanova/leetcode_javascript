var isSubsequence = function(s, t) {
    let j = 0;
    for (let i = 0; i < t.length; i++) {
        if (s[j] == t[i]) {
            if (j < s.length) {
                j++
            }  else return true
        }
    }

    if ( j == s.length) return true
    return false
};

console.log(isSubsequence("axc", "ahbgdc"))