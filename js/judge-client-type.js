// 判断当前设备是否为竖屏


function isPortrait() {
    // 优先使用 Screen Orientation API
    if (screen.orientation) {
        // 如果屏幕方向为0度或180度，则为竖屏
        return screen.orientation.angle === 0 || screen.orientation.angle === 180;
    }
    // 降级到媒体查询
    if (window.matchMedia) {
        // 如果媒体查询结果为竖屏，则为竖屏
        return window.matchMedia('(orientation: portrait)').matches;
    }
    // 最后降级到尺寸比较
    // 如果窗口高度大于窗口宽度，则为竖屏
    return window.innerHeight > window.innerWidth;
}

function getScreenOrientation() {
    let screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    let screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    return screenWidth > screenHeight ? false : true;
}

if (!isPortrait() || getScreenOrientation()) {
    // 竖屏设备
    console.log('竖屏设备，跳转到移动端页面');
    location.href = '/HTML/mobile.html';
}
