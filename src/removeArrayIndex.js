/**
 * [removeArrayIndex 删除数组指定index的元素，返回被删除后的数组]
 *
 * @param   {Array}     arr         输入的数组
 * @param   {Number}    index       指定元素的index
 * @returns {Array}                 删除指定index的元素后的数组
 */
function removeArrayIndex(arr, index) {
    return arr.filter((item, i) => i !== index);
}

export default removeArrayIndex;
