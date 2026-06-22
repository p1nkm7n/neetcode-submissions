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

        let charPosMap = new Map();
        for (const ch of s){
            let charCount = charPosMap.get(ch)|| 0;
            charPosMap.set(ch, charCount + 1);
        }

        for (const ch of t){
            if (charPosMap.has(ch)){
                let charCount = charPosMap.get(ch);
                charPosMap.set(ch, charCount - 1);
                if (charCount === 1){
                    charPosMap.delete(ch);
                }
            }
            else{
                return false;
            }
        }

        return charPosMap.size === 0;
    }
}
