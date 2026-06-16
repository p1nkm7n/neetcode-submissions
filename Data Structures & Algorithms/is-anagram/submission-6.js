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

        let charCountMap = new Map();

        for (const ch of s){
            let charCount = charCountMap.get(ch) || 0;
            charCountMap.set(ch, charCount + 1);
        }

        for (const ch of t){
            if (!charCountMap.has(ch)){
                return false;
            }

            let charCount = charCountMap.get(ch);
            charCountMap.set(ch, charCount - 1);
            if (charCount == 1){
                charCountMap.delete(ch);
            }
        }

        return charCountMap.size == 0;
    }
}
