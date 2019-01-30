/**
 * [getQueryString 查找url的参数中的某个字段是否存在，若存在则返回对应值]
 *
 * @param   {String}       url         [目标url]
 * @param   {String}       key         [需要查找的字段]
 * @returns {String}                   [查找字段的值，如不存在则返回 null]
 */
function getQueryString(url, key) {
    let reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)');
    const splitedArray = url.split('?');
    let queryString = splitedArray[1];
    if (!queryString) {
        return null;
    }
    let r = queryString.match(reg);
    if (r !== null) return decodeURI(r[2]);
    return null;
}

export default getQueryString;
