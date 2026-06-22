class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length){
            return false;
        }

        let map = new Map();

        for (const ch of s){
            let charCount = map.get(ch) || 0;
            map.set(ch, charCount + 1);
        }

        for (const ch of t){
            if (!map.has(ch)){
                return false;
            }
            
            let charCount = map.get(ch);
            map.set(ch, charCount - 1);
            if (charCount === 1){
                map.delete(ch);
            }
        }
        
        return map.size === 0;
    }
}
