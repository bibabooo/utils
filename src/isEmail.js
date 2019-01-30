/**
 * [isEmail 判断邮箱格式是否正确]
 *
 * @param   {String}    str      [邮箱]
 * @returns {Boolean}            [邮箱格式正确返回true，错误返回false]
 */
function isEmail(str) {
    let reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
    return reg.test(str);
}

export default isEmail;
