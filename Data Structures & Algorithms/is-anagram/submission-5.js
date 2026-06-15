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

        let countMap = new Map();

        for (const ch of s){
            let charCount = countMap.get(ch) || 0;
            countMap.set(ch, charCount + 1);
        }

        for (const ch of t){
            if (!countMap.has(ch)){
                return false;
            }

            let charCount = countMap.get(ch);
            countMap.set(ch, charCount - 1);
            if (charCount == 1){
                countMap.delete(ch);
            }
        }

        return countMap.size == 0;
    }
}
