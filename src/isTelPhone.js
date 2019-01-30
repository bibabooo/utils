/**
 * [isTelPhone 判断手机格式是否正确]
 *
 * @param   {String}    str      [手机号]
 * @returns {Boolean}            [手机号格式正确返回true，错误返回false]
 */
function isTelPhone(str) {
    let reg = /^(1[3456789]\d{9})$/;
    return reg.test(str);
}

export default isTelPhone;
