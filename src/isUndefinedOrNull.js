/**
 * [isUndefinedOrNull 判断是否为null 或undefined]
 *
 * @param    {*}            value   [输入数据]
 * @returns  {Boolean}              [输入值是 null 或 undefined 返回 true，否则返回 false]
 */
function isUndefinedOrNull(value) {
    return value === null || value === undefined;
}

export default isUndefinedOrNull;
