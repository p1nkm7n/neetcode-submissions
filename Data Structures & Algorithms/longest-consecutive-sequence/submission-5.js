class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums);
        let maxSeq = 0;

        for (const num of set){
            if (!set.has(num - 1)){
                let currentNum = num;
                let currentMaxSeq = 1;
                while (set.has(currentNum + 1)){
                    currentNum++;
                    currentMaxSeq++;
                }
                maxSeq = Math.max(maxSeq, currentMaxSeq);
            }
        }
        return maxSeq;
    }
}
