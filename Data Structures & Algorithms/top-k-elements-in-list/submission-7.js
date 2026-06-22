class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        let countMap = new Map();
        
        for (const num of nums){
            let currentCount = countMap.get(num) || 0;
            countMap.set(num, currentCount + 1);
        }

        let sortedMap = new Map([...countMap].sort((a, b) => b[1] - a[1]));
        return [...sortedMap.keys()].slice(0, k);
    }
}
