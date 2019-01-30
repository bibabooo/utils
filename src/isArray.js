/**
 * 判断是否为数组
 *
 * @param {*} obj 输入的对象
 * @returns {boolean} obj是数组返回true，否则返回false
 */
function isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
}

export default isArray;
