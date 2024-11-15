const containsDuplicate = (nums: number[]): boolean  => {
    const numsSet = new Set<number>(); 
    for(let i = 0; i < nums.length; i++) {
        const number = nums[i]; 
        if(numsSet.has(number)) {
            return true; 
        }

        numsSet.add(number); 
    }

    return false; 
};


console.log(containsDuplicate([1,2,3,4,5,6,15]));