class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */

    // twoSum(nums, target) {
    //     for (let i = 0; i < nums.length; i++) {
    //         for (let j = i + 1; j < nums.length; j++){
    //             if (nums[i] + nums[j] == target){
    //                 return [i, j];
    //             }
    //         }
    //     }
    // }

    twoSum(nums, target) {
        let diffMap = new Map();
        for (let i = 0; i < nums.length; i++){
            let complement = target - nums[i];
            if (diffMap.has(complement)){
                return [diffMap.get(complement), i];
            }
            diffMap.set(nums[i], i);
        }
        return [];
    }
}
