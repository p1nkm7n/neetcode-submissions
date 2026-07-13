class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let cleanedString = s.toLowerCase().replace(/[^A-Za-z0-9]/g,"");
        let left = 0;
        let right = cleanedString.length - 1;

        while (left < right){
            if (cleanedString[left] != cleanedString[right]){
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}
