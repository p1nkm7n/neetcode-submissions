class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedStr = "";
        for (const str of strs){
            encodedStr += str.length + "$" + str;
        }
        return encodedStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [];
        let i = 0;
        while (i < str.length){
            let j = i;
            while (str[j] !== "$"){
                j++;
            }
            let length = Number(str.slice(i, j));
            let start = j + 1;
            let end = start + length;
            res.push(str.slice(start, end));
            i = end;
        }
        return res;
    }
}
