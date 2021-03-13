
function ajaxGet(url, fun) {
    //第一步创建 XMLHttpRequest 对象
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    // 第二部向服务器发送请求
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    // 接受回调数据
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var obj = JSON.parse(xmlhttp.responseText)
            // console.log(obj.userName);
            fun(obj)
        }
    }
}

function ajaxPost(url, data, fun) {

    var xmlhttp;

    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }
    else/* IE5，IE6 */ {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
    }


    xmlhttp.open("POST"/* 一般情况获取数据 */, url/* 请求本地文件 */, true/* 异步 */)/* push提交请求 */
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
    xmlhttp.send("levelname:" + data.levelname)/* 将请求发送个服务器 */
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var obj = JSON.parse(xmlhttp.responseText)
            // console.log(obj.userName);
            fun(obj)
        }
    }
}