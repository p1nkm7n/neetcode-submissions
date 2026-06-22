class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) {
            return false;
        }

        let charMap = new Map();

        for (const ch of s) {
            let charCount = charMap.get(ch) || 0;
            charMap.set(ch, charCount + 1);
        }

        for (const ch of t) {
            if (!charMap.has(ch)){
                return false;
            }
            let charCount = charMap.get(ch);
            charMap.set(ch, charCount - 1);
            if (charCount == 1){
                charMap.delete(ch);
            }
        }

        return charMap.size == 0;
    }
}
