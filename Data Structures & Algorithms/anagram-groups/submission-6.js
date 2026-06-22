class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        let groupMap = new Map();

        for (const str of strs){

            let charPosArray = new Array(26).fill(0);

            for (const ch of str){
                let charPos = ch.charCodeAt(0) - 97;
                charPosArray[charPos]++;
            }
            let key = charPosArray.join("|");
            
            if (!groupMap.has(key)){
                groupMap.set(key, []);
            }

            groupMap.get(key).push(str);
        }

        return [...groupMap.values()];
    }
}
