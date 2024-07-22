function isValid(s: string): boolean {

    if (s.length % 2 !== 0) {
        return false
    }

    const stack = [];
    const parenttheses = s.split('');
    for (let i = 0; i < parenttheses.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stack.push(s[i])
        } else {
            if (!((s[i] === ')' && stack.pop() === '(') || (s[i] === ']' && stack.pop() === '[') || (s[i] === '}' && stack.pop() === '{'))) {
                return false
            }
        }
    }

    if (stack.length === 0) {
        return true
    }
    return false
};
