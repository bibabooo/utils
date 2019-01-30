/**
 * [parseQueryString 获取地址栏参数，并以对象的形式返回参数]
 *
 * @param   {String}    url     [输入url]
 * @returns {Object}            [参数对象]
 */
function parseQueryString(url) {
    let regUrl = /\?([\w\W]+)$/,
        arrUrl = regUrl.exec(url),
        result = {};
    if (arrUrl && arrUrl[1]) {
        let paramString = arrUrl[1],
            params = paramString.split('&');
        for (let i = 0; i < params.length; i++) {
            let param = params[i].split('=');
            if (param.length > 2) {
                param[1] += '=';
            }
            result[param[0]] = param[1];
        }
        return result;
    }
    return result;
}

export default parseQueryString;
