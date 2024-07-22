function longestCommonPrefix(strs: string[]): string {

    if (strs.length === 0 ) {
        return ''
    }

    if (strs.length === 1) {
        return strs[0]
    }

    let minLength = 999999;
    for (let i = 0; i < strs.length; i++) {
        if (minLength < strs[i].length) {
            minLength = strs[i].length;
        }
    }

    let i = 0;

    while(i < minLength - 1) {
        for (let j = 0; j < strs.length - 1; j++) {
            if (strs[j].substring(0, i + 1) !== strs[j + 1].substring(0, i + 1)) {
                return strs[0].substring(0, i)
            } 
        }
        i++;
    }

    return strs[0]
};
