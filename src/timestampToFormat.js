import numtwo from './numtwo';

/**
 * [timestampToFormat 时间戳格式化成各种类型]
 *
 * @param       {String|Number}        timestamp    [时间]
 * @param       {String}        format       [格式]
 * @returns     {String}                            [格式化后的时间]
 */
function timestampToFormat(timestamp, format) {
    let date = new Date(timestamp),
        year = date.getFullYear(),
        month = date.getMonth() + 1,
        day = date.getDate(),
        hour = date.getHours(),
        minute = date.getMinutes(),
        second = date.getSeconds(),
        numtwoMonth = numtwo(month),
        numtowDay = numtwo(day),
        numtwoHour = numtwo(hour),
        numtwoMinute = numtwo(minute),
        numtwoSecond = numtwo(second);
    if (typeof format === 'string') {
        let newDateString = format;
        newDateString = newDateString.replace(/yyyy/g, year);
        newDateString = newDateString.replace(/MM/g, numtwoMonth);
        newDateString = newDateString.replace(/dd/g, numtowDay);
        newDateString = newDateString.replace(/M/g, month);
        newDateString = newDateString.replace(/d/g, day);
        newDateString = newDateString.replace(/hh/g, numtwoHour);
        newDateString = newDateString.replace(/h/g, hour);
        newDateString = newDateString.replace(/mm/g, numtwoMinute);
        newDateString = newDateString.replace(/m/g, minute);
        newDateString = newDateString.replace(/ss/g, numtwoSecond);
        newDateString = newDateString.replace(/s/g, second);
        return newDateString;
    } else {
        return year + '-' + numtwoMonth + '-' + numtowDay + ' ' + numtwoHour + ':' + numtwoMinute + ':' + numtwoSecond;
    }
}

export default timestampToFormat;
