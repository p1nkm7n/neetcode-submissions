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

        for (const ch of s){
            map.set(ch, (map.get(ch) || 0) + 1);
        }

        for (const ch of t){
            if (!map.has(ch)){
                return false;
            }

            let charCount = map.get(ch);
            if (charCount == 1){
                map.delete(ch);
            }
            else {
                map.set(ch, charCount - 1);
            }
        }

        return map.size == 0;
    }
}
