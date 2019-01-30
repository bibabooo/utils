import isArray from './isArray';
import isObject from './isObject';

/**
 * [isEmptyObject 判断对象是否为空]
 *
 * @param   {Object}        obj        [输入对象]
 * @returns {Boolean}                  [空数组、null、undefined、{}、0、'' 返回true，其他返回false]
 */
function isEmptyObject(obj) {
    // 空数组返回 true
    if (isArray(obj)) {
        return !obj.length;
    }
    if (isObject(obj)) {
        for (let t in obj) {
            return false;
        }
        return true;
    }
    return !obj;
}

export default isEmptyObject;
