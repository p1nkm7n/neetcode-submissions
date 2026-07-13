class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length){
            return false;
        }

        let map = new Map();

        for (const str of s){
            let charCount = map.get(str) || 0;
            map.set(str, charCount + 1);
        }

        for (const str of t){
            if (!map.has(str)){
                return false;
            }

            let charCount = map.get(str);
            if (charCount == 1){
                map.delete(str);
            }
            else {
                map.set(str, charCount - 1);
            }
        }

        return map.size == 0;
    }
}
