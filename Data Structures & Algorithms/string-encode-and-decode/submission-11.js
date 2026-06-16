class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedString = "";
        for (const str of strs){
            encodedString += str.length + "$" + str;
        }
        return encodedString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = [];
        let i = 0;

        while (i < str.length){
            let j = i;
            while (str[j] != "$"){
                j++;
            }
                let length = Number(str.slice(i, j));
                let start = j + 1;
                let end = start + length;
                result.push(str.slice(start, end));
                i = end;
            
        }
        return result;
    }
}
