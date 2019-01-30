/**
 * [numtwo 个位数字两位显示的处理]
 *
 * @param    {Number}    num        [数字]
 * @returns  {String}               [格式化后的数字]
 */
function numtwo(num) {
    let numStr = num.toString();
    return numStr.length === 1 ? (0 + numStr) : numStr;
}

export default numtwo;
