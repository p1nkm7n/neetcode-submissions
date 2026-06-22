class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();
        for (let i = 0; i < nums.length; i++){
            let currentCount = map.get(nums[i]) || 0;
            map.set(nums[i], currentCount + 1);
        }

        const sortedMap = new Map(
            [...map].sort((a, b) => b[1] - a[1])
        );

        return [...sortedMap.keys()].slice(0, k);
    }
}
