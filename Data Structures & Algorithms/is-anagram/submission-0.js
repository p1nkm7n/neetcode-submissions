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
            let currentCount = map.get(ch);
            map.set(ch, currentCount - 1);
            if (currentCount === 1){
                map.delete(ch);
            }
        }

        if (map.size === 0){
            return true;
        }
        return false;
    }
}
