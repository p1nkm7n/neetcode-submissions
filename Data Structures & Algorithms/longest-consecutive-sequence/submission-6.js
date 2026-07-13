class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums);
        let maxSeqLength = 0;

        for (const num of nums){
            if (!set.has(num - 1)){
                let currentNum = num;
                let currentSeqLength = 1;
                while (set.has(currentNum + 1)){
                    currentNum++;
                    currentSeqLength++;
                }
                maxSeqLength = Math.max(maxSeqLength, currentSeqLength);
            }
        }
        return maxSeqLength;
    }
}
