function removeElement(nums: Array<number | string>, val: number): number {
    let counter = 0
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] === val) {
            nums[i] = '_'
            counter++
        } else {
            for (let j = i; j >= 0; j--) {
                if (nums[j] === val) {
                    counter++
                }
                if (nums[j] === val || nums[j] === '_') {
                    nums[j] = nums[i]
                    nums[i] = '_'
                } 
            }
        } 
    }  
    return nums.length - counter
};