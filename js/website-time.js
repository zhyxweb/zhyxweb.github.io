// 用于页面底部的时间计算

var now = new Date();
// 创建一个函数，用于计算网站运行时间
function createtime() {
    // 创建一个Date对象，表示建站时间
    var grt = new Date("07/21/2024 11:45:14");//此处修改你的建站时间或者网站上线时间
    // 获取当前时间
    now.setTime(now.getTime() + 250);
    // 计算网站运行天数
    days = (now - grt) / 1000 / 60 / 60 / 24;
    dnum = Math.floor(days);
    // 计算网站运行小时数
    hours = (now - grt) / 1000 / 60 / 60 - (24 * dnum);
    hnum = Math.floor(hours);
    // 如果小时数小于10，则在前面补0
    if (String(hnum).length == 1) {
        hnum = "0" + hnum;
    }
    // 计算网站运行分钟数
    minutes = (now - grt) / 1000 / 60 - (24 * 60 * dnum) - (60 * hnum);
    mnum = Math.floor(minutes);
    // 如果分钟数小于10，则在前面补0
    if (String(mnum).length == 1) {
        mnum = "0" + mnum;
    }
    // 计算网站运行秒数
    seconds = (now - grt) / 1000 - (24 * 60 * 60 * dnum) - (60 * 60 * hnum) - (60 * mnum);
    snum = Math.round(seconds);
    // 如果秒数小于10，则在前面补0
    if (String(snum).length == 1) {
        snum = "0" + snum;
    }
    // 将计算结果显示在页面上
    document.getElementById("timeDate").innerHTML = "🚀 已建站&nbsp" + dnum + "&nbspdays";  //此次自定义显示内容
    document.getElementById("times").innerHTML = hnum + "&nbsphr&nbsp" + mnum + "&nbspmin&nbsp" + snum + "&nbspsec";
}  //此次自定义显示内容
setInterval("createtime()", 250);