class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let regexifiedString = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
        let left = 0;
        let right = regexifiedString.length - 1;

        while (left < right){
            if (regexifiedString[left] != regexifiedString[right]){
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}
