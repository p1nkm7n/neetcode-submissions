class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();
        for (const num of nums){
            let currentCount = map.get(num) || 0;
            map.set(num, currentCount + 1);
        }

        let sortedMap = new Map([...map].sort((a, b) => b[1] - a[1]));
        return [...sortedMap.keys()].slice(0, k);
    }
}
