/**
 * [isObjectValueEqual 判断对象是否相等]
 *
 * @param   {Object}    a    [A对象]
 * @param   {Object}    b    [B对象]
 * @returns {Boolean}        [a,b对象相等返回true，不等返回false]
 */
function isObjectValueEqual(a, b) {
    if ((typeof a === 'number' && typeof b === 'number') ||
        (typeof a === 'string' && typeof b === 'string')) {
        return a === b;
    }
    let aProps = Object.getOwnPropertyNames(a),
        bProps = Object.getOwnPropertyNames(b);

    if (aProps.length !== bProps.length) {
        return false;
    }

    for (let i = 0; i < aProps.length; i++) {
        let propName = aProps[i];
        if (Object.prototype.toString(a[propName]) === '[object Object]' || Object.prototype.toString(b[propName]) === '[object Object]') {
            if (!isObjectValueEqual(a[propName], b[propName])) return false;
        } else if (a[propName] !== b[propName]) {
            return false;
        }
    }
    return true;
}

export default isObjectValueEqual;
