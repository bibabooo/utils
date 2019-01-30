/**
 * [secondsFormat 秒格式化成 h:mm:ss]
 *
 * @param       {String|Number}     seconds         时间（单位：秒）
 * @param       {Number}            type            转化类型(0: 分的符号为 ', 秒的符号为 '')
 * @returns     {String}                            格式化后的字符串
 */
function secondsFormat(seconds, type) { // 时间秒格式化成 h:mm:ss
    let min = Math.floor(seconds / 60),
        second = seconds % 60,
        hour, newMin, time;
    if (min >= 60) {
        hour = Math.floor(min / 60);
        newMin = min % 60;
    }
    if (second < 10) {
        second = '0' + second;
    }
    if (min < 10) {
        min = '0' + min;
    }
    if (newMin < 10) {
        newMin = '0' + newMin;
    }
    if (type === 0) {
        time = hour ? (hour + ':' + newMin + '\'' + second + '\'\'') : (min + '\'' + second + '\'\'');
    } else {
        time = hour ? (hour + ':' + newMin + ':' + second) : (min + ':' + second);
    }
    return time;
}

export default secondsFormat;
