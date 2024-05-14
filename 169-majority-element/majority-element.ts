function majorityElement(nums: number[]): number {
    const nums2 = nums.sort()

    let counter = 1;
    let result = 0;
    for (let i = 1; i < nums2.length; i++) {
        if (nums2[i] === nums2[i-1]) {
            ++counter;
        } else {
            if (counter >= nums2.length / 2) {
                result = nums[i - 1]
            }
            counter = 1;
        }
    }  
    if (counter > nums2.length / 2) {
        return nums2[nums2.length - 1]
    }
    return result;
};

console.log(majorityElement([1,1,1,2,2,2,2]))