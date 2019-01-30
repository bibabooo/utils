/**
 * [getSuffixName 检测字符窜是图片格式 .jpg .bmp .png .gif]
 *
 * @param    {String}    str        [输入字符串]
 * @returns  {Boolean}              [后缀存在返回true，否则返回false]
 */
function getSuffixName(str) {
    let suffixName = str.substr(str.lastIndexOf('.')).toLowerCase(),
        suffixNameArr = ['.jpg', '.bmp', '.png', '.gif'];
    return suffixNameArr.indexOf(suffixName) > -1;
}

export default getSuffixName;
