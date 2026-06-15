class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums);
        let longest = 0;

        for (const num of nums){
            if (!set.has(num - 1)){
                let currentNum = num;
                let currentLength = 1;
                while (set.has(currentNum + 1)){
                    currentNum++;
                    currentLength++;
                }
                longest = Math.max(longest, currentLength);
            }
        }

        return longest;
    }
}
