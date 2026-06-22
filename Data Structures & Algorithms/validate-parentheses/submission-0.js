class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        let map = {
            ')':'(',
            ']':'[',
            '}':'{'
        };

        for (const ch of s){
            if (ch === '(' || ch === '[' || ch === '{'){
                stack.push(ch);
            }
            else {
                if (stack.length === 0){
                    return false;
                }
                let top = stack.pop();
                if (top !== map[ch]){
                    return false;
                }
            }
        }
        if (stack.length === 0){
            return true;
        }
        return false;
    }
}
