var isValid = function(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if ( char === '{' || char === '(' || char === '[') {
            stack.push(char)
        } else {
            if (char === '}' && stack.pop() === '{' ) continue;
            if (char === ')' && stack.pop() === '(' ) {
                continue
            }
            if (char === ']' && stack.pop() === '[' ) continue;
            return false
        }
    }
    return stack.length === 0
};

console.log(isValid("([])"))