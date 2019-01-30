/**
 * 判断是否是对象
 * @param {*} obj 判断对象
 * @return {boolean}
 */
function isObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
}

export default isObject;
