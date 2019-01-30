import numtwo from './numtwo';

/**
 * @typedef {Object} CountDownResult
 * @property {string} day 天
 * @property {string} hour 时
 * @property {string} minute 分
 * @property {string} second 秒
 * @property {string} millisecond 毫秒
 */
/**
 * 倒计时函数
 * @param {number} ms 毫秒值
 * @param {Function} updateCallback 更新回调函数
 * @param {Function} endCallback 结束回调函数
 * @return {number}
 */
function countDown(ms, updateCallback, endCallback) {
    const speed = 100;
    const format = (milliseconds) => {
        let day,
            hour,
            minute,
            second;
        if (milliseconds >= 0) {
            day = numtwo(Math.floor(milliseconds / 1000 / 60 / 60 / 24));
            hour = numtwo(Math.floor((milliseconds / 1000 / 60 / 60) % 24));
            minute = numtwo(Math.floor((milliseconds / 1000 / 60) % 60));
            second = numtwo(Math.floor((milliseconds / 1000) % 60));
            return {
                day,
                hour,
                minute,
                second,
                millisecond: milliseconds % 1000
            };
        } else {
            return {
                day: '00',
                hour: '00',
                minute: '00',
                second: '00',
                millisecond: '00'
            };
        }
    };
    let interval;
    updateCallback && updateCallback(format(ms));
    interval = setInterval(() => {
        let nextTime = ms - speed,
            end = false;
        if (nextTime <= 0) {
            nextTime = 0;
            clearInterval(interval);
            end = true;
        }
        ms = nextTime;
        if (updateCallback instanceof Function) {
            updateCallback(format(nextTime));
        }
        if (end && endCallback instanceof Function) {
            endCallback();
        }
    }, speed);
    return interval;
}

export default countDown;
