class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let arr = [];
        for (let i = 0; i < nums.length; i++){
            let product = 1;
            for (let j = 0; j < nums.length; j++){
                if (i !== j){
                    product *= nums[j];
                }
            }
            arr.push(product);
        }
        return arr;
    }
}
