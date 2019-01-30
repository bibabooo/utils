/**
 * numtoFixed 数据超过4位数时的处理
 *
 * numtoFixed(10000) // "1万"
 * numtoFixed(10000, 'w') // 1w
 *
 * @param    {Number|String}        data        数据
 * @param    {String}               unit        单位
 * @returns  {String}                           处理后的数据
 */
function numtoFixed(data, unit = '万') {
    let num = Number(data);
    if (!num) return num;
    num = Math.ceil(num); // 保证数据为整数
    return num.toString().length <= 4 ? num : (num / 10000).toFixed(1) + unit;
}

export default numtoFixed;
