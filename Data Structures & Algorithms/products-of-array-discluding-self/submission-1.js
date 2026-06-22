class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let length = nums.length;
        let result = new Array(length).fill(1);

        let prefix = 1;
        for (let i = 0; i < length; i++){
            result[i] = prefix;
            prefix *= nums[i];
        }

        let suffix = 1;
        for (let i = length - 1; i >= 0; i--){
            result[i] *= suffix;
            suffix *= nums[i];
        }
        return result;
    }
}
