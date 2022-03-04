/*
 * @Author: your name
 * @Date: 2021-01-04 11:19:29
 * @LastEditTime: 2021-01-04 11:23:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \yellow-member-admin\src\utils\util.js
 */

import Vue from 'vue'

const util = {
// 深度克隆
// 判断arr是否为一个数组，返回一个bool值
    deepClone(obj) {
        function isArray(arr) {
            return Object.prototype.toString.call(arr) === "[object Array]";
        }

        // 对常见的“非”值，直接返回原来值
        if ([null, undefined, NaN, false].includes(obj)) return obj;
        if (typeof obj !== "object" && typeof obj !== "function") {
            //原始类型直接返回
            return obj;
        }
        var o = isArray(obj) ? [] : {};
        for (let i in obj) {
            if (obj.hasOwnProperty(i)) {
                o[i] = typeof obj[i] === "object" ? deepClone(obj[i]) : obj[i];
            }
        }
        return o;
    },
    /**
     * 传入一个对象，对象的属性作为参数键，对象属性的值作为参数值，返回对应FormData
     * @param paramObj
     */
    formData(paramObj) {
        if (!paramObj) {
            paramObj = {};
        }
        let data = new FormData();
        Object.keys(paramObj).forEach((key) => data.append(key, paramObj[key]));
        return data;
    },
    //金钱数字转化
    abs(num) {
        num = num.toString().replace(/\$|\,/g, '');
        if (isNaN(num))
            num = "0";
        sign = (num == (num = Math.abs(num)));
        num = Math.floor(num * 100 + 0.50000000001);
        cents = num % 100;
        num = Math.floor(num / 100).toString();
        if (cents < 10)
            cents = "0" + cents;
        for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
            num = num.substring(0, num.length - (4 * i + 3)) + ',' +
                num.substring(num.length - (4 * i + 3));
        return (((sign) ? '' : '-') + num + '.' + cents);
    },
    //js显示早上好下午好晚上好
    getTimeState() {
        // 获取当前时间
        let timeNow = new Date();
        // 获取当前小时
        let hours = timeNow.getHours();
        // 设置默认文字
        let text = ``;
        // 判断当前时间段
        if (hours >= 0 && hours <= 10) {
            text = `早上好`;
        } else if (hours > 10 && hours <= 14) {
            text = `中午好`;
        } else if (hours > 14 && hours <= 18) {
            text = `下午好`;
        } else if (hours > 18 && hours <= 24) {
            text = `晚上好`;
        }
        // console.log(`hours >>>>>`, hours);
        // console.log(`text >>>>`, text);
        // 返回当前时间段对应的状态
        return text;
    },
    //判断string、object是否为空
    isEmpty(varvar) {
        if (varvar == undefined || varvar == null || !varvar) {
            return true;
        }
        if (typeof varvar == "string") {
            if (varvar.length == 0) {
                return true;
            } else {
                return false;
            }
        } else if (typeof varvar == "object") {
            for (var key in varvar) {
                return false;
            }
            return true;
        }
    },
    // 切换时间格式 2021-07-24 11:32:01 为7月24日 10:19
    needDate(time) {
        const date = new Date(Date.parse(time.replace(/-/g, "/")));

        var year = date.getFullYear() + "年";
        var month = date.getMonth() + 1 + "月";
        var day = date.getDate() + "日";
        var hh = date.getHours() + "小时";
        var mm = date.getMinutes() + "分钟";
        var ss = date.getSeconds() + "秒";
        return year + month + day + " " + hh + mm + ss;
    },
    formatSeconds(value) {
        var theTime = parseInt(value);// 需要转换的时间秒
        var theTime1 = 0;// 分
        var theTime2 = 0;// 小时
        var theTime3 = 0;// 天
        if (theTime > 60) {
            theTime1 = parseInt(theTime / 60);
            theTime = parseInt(theTime % 60);
            if (theTime1 > 60) {
                theTime2 = parseInt(theTime1 / 60);
                theTime1 = parseInt(theTime1 % 60);
                if (theTime2 > 24) {
                    //大于24小时
                    theTime3 = parseInt(theTime2 / 24);
                    theTime2 = parseInt(theTime2 % 24);
                }
            }
        }
        var result = '';
        if (theTime > 0) {
            result = "" + parseInt(theTime) + "秒";
        }
        if (theTime1 > 0) {
            result = "" + parseInt(theTime1) + "分" + result;
        }
        if (theTime2 > 0) {
            result = "" + parseInt(theTime2) + "小时" + result;
        }
        if (theTime3 > 0) {
            result = "" + parseInt(theTime3) + "天" + result;
        }
        return result;
    },
    // 标准时间转多少分钟之前
    //2021-04-16 15:53:07
    putDate(time, type) {
        if (!time) {
            return "--";
        }
        const date = Date.parse(time.replace(/-/g, "/"));
        // 时间字符串转时间戳
        var timestamp = new Date(date).getTime();

        var minute = 1000 * 60;
        var hour = minute * 60;
        var day = hour * 24;
        var month = day * 30;
        var year = day * 365;
        var now = new Date().getTime();
        var diffValue = now - timestamp;
        var result;
        if (diffValue < 0) {
            return;
        }
        var yearC = diffValue / year;
        var monthC = diffValue / month;
        var weekC = diffValue / (7 * day);
        var dayC = diffValue / day;
        var hourC = diffValue / hour;
        var minC = diffValue / minute;
        if (yearC >= 1) {
            result = "" + parseInt(yearC) + "年前";
        } else if (monthC >= 1) {
            result = "" + parseInt(monthC) + "月前";
        } else if (weekC >= 1) {
            result = "" + parseInt(weekC) + "周前";
        } else if (dayC >= 1) {
            result = "" + parseInt(dayC) + "天前";
        } else if (hourC >= 1) {
            result = "" + parseInt(hourC) + "小时前";
        } else if (minC >= 5) {
            result = "" + parseInt(minC) + "分钟前";
        } else {
            switch (type) {
                case "state":
                    result = "刚刚活跃";
                    break;
                default:
                    result = "刚刚";
            }
        }
        return result;
    },
    // 标准时间转时间挫 //2021-08-12 10:2 to 1627698586
    dateToTimestamp(time) {
        const date = new Date(Date.parse(time.replace(/-/g, "/")));
        return Date.parse(date);
    },
    //获取当前时间 格式：2013-01-01  //00:00:00
    curentTime() {
        var now = new Date();

        var year = now.getFullYear();
        var month = now.getMonth() + 1;
        var day = now.getDate();

        var hh = now.getHours();
        var mm = now.getMinutes();

        var clock = year + "-";

        if (month < 10) clock += "0";

        clock += month + "-";

        if (day < 10) clock += "0";

        clock += day + " ";

        /* if (hh < 10) clock += "0";

        clock += hh + ":";
        if (mm < 10) clock += "0";
        clock += mm; */
        return clock;
    },
    //时间戳转换方法    date:时间戳数字 转 2013-01-01 00:00:00
    formatDate(date, isNoSeconds) {
        var date = new Date(date);
        var YY = date.getFullYear() + "-";
        var MM = (date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1) + "-";
        var DD = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
        var hh = (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":";
        var mm = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        var ss = "";
        if (!isNoSeconds) ss = ":" + (date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds());
        else ss = "";
        return YY + MM + DD + " " + hh + mm + ss;
    },
    guid() {
        var d = new Date().getTime();
        var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
        });

        return uuid;
    },

    /**
     * 计算两个日期之间的天数
     * @param dateString1  开始日期 yyyy-MM-dd
     * @param dateString2  结束日期 yyyy-MM-dd
     * @param type   days 纯转换天数 hours小时
     * @returns {number} 如果日期相同 返回一天 开始日期大于结束日期，返回0
     */
    getDays(dateString1, dateString2, type) {
        const startDate = new Date(dateString1.replace(/-/g, "/").replace(/T/, " ")).getTime()
        const endDate = new Date(dateString2.replace(/-/g, "/").replace(/T/, " ")).getTime()

        if (startDate >= endDate) {
            return 0;
        }
        const days = endDate - startDate
        //计算出相差天数
        const day = Math.floor(days / (24 * 3600 * 1000))
        //计算出小时数
        const leave1 = days % (24 * 3600 * 1000) //计算天数后剩余的毫秒数
        const hours = Math.floor(leave1 / (3600 * 1000))
        //计算相差分钟数
        const leave2 = leave1 % (3600 * 1000) //计算小时数后剩余的毫秒数
        const minutes = Math.floor(leave2 / (60 * 1000))
        //计算相差秒数
        const leave3 = leave2 % (60 * 1000) //计算分钟数后剩余的毫秒数
        const seconds = Math.round(leave3 / 1000)
        // alert(" 相差 "+days+"天 "+hours+"小时 "+minutes+" 分钟"+seconds+" 秒")
        if (type === 'days') {
            return (days / (24 * 3600 * 1000)).toFixed(1)
        }
        if (type === 'hours') {
            return (days / (24 * 3600 * 1000) * 24).toFixed(1)
        }
        if (type === 'minutes') {
            return (days / (24 * 3600 * 1000) / 24 * 3600).toFixed(1)
        }

        //全部输出
        let str = ''
        if (day) {
            str += day + "天"
        }
        if (hours) {
            str += hours + "时"
        }
        if (minutes) {
            str += minutes + "分"
        }

        return str
    },

}
export default util
Vue.prototype.$util = util
