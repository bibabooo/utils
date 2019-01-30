import isTelPhone from './isTelPhone';

/**
 * [encryMobile 将手机号中间四位加密]
 *
 * @param   {String}    str     [手机号]
 * @returns {String}            [加密后的手机号]
 */
function encryMobile(str) {
    // 非手机号照原字符串输出
    if (!isTelPhone(str)) {
        return str;
    }
    return str.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
}

export default encryMobile;
