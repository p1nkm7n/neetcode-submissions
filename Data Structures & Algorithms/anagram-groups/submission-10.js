class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();

        for (const str of strs){
            let count = new Array(26).fill(0);
            for (const ch of str){
                let charPos = ch.charCodeAt(0) - 97;
                count[charPos]++;
            }
            let mapKey = count.join("|");

            if (!map.has(mapKey)){
                map.set(mapKey, []);
            }

            map.get(mapKey).push(str);
        }

        return [...map.values()];
    }
}
