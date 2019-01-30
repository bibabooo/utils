/**
 * [encodeUTF8 utf8编码]
 *
 * @param   {String}    str     [字符串]
 * @returns {String}            [utf8加密后的字符串]
 */
function encodeUTF8(str) {
    let temp = '', rs = '';
    for (let i = 0, len = str.length; i < len; i++) {
        temp = str.charCodeAt(i).toString(16);
        rs += '\\u' + new Array(5 - temp.length).join('0') + temp;
    }
    return rs;
}

export default encodeUTF8;
