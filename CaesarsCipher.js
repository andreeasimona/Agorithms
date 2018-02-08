
function rot13(str) {
    var res = '';
    str = str.toLowerCase();
    for (var index = 0; index < str.length; index++) {
        if (str.charCodeAt(index) < 96 || str.charCodeAt(index) > 122)
            res += str[index];
        else {
            if (str.charCodeAt(index) + 13 > 122) {
                res += String.fromCharCode(96 + str.charCodeAt(index) - 122 + 13);
            }
            else {
                res += String.fromCharCode(str.charCodeAt(index) + 13);
            }
        }
    }
    return res.toUpperCase();
}
