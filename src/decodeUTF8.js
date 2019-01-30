/**
 * [decodeUTF8 utf8解码]
 *
 * @param   {String}    str     [utf8加密得到字符串]
 * @returns {String}            [解密后的字符串]
 */
function decodeUTF8(str) {
    return str.replace(/(\\u)(\w{4}|\w{2})/gi, ($0, $1, $2) => String.fromCharCode(parseInt($2, 16)));
}

export default decodeUTF8;
