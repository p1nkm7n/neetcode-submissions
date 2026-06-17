class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    // twoSum(nums, target) {
    //     for (let i = 0; i < nums.length; i++) {
    //         for (let j = i + 1; j < nums.length; j++) {
    //             if (nums[i] + nums[j] == target) {
    //                 return [i, j];
    //             }
    //         }
    //     }
    //     return [];
    // }

    twoSum(nums, target) {
        let map = new Map();
        for (let i = 0; i < nums.length; i++) {
            let diff = target - nums[i];
            if (map.has(diff)){
                return [map.get(diff), i];
            }
            map.set(nums[i], i);
        }
        return [];
    }
}
