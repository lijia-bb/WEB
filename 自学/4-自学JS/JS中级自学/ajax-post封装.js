function ajaxGet(url,fun){
    var xmlhttp
    if(window.XMLHttpRequest)
    {
        xmlhttp=new XMLHttpRequest()
    }
    else
    {
        xmlhttp=new ActiveXObject("Microsoft.XMLHttp")
    }

    xmlhttp.open("GET",url,true)
    xmlhttp.send()

    xmlhttp.onreadystatechange=function(){
        if(xmlhttp.readyState==4&&xmlhttp.status==200)
        {
            var obj = JSON.parse(xmlhttp.responseText)
            fun(obj)
        }
       
    }
}
function ajaxPost(url,data,fun){
    var xmlhttp
    if(window.XMLHttpRequest)
    {
        xmlhttp=new XMLHttpRequest()
    }
    else
    {
        xmlhttp=new ActiveXObject("Microsoft.XMLHttp")
    }

    xmlhttp.open("POST",url,true)
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded")
    xmlhttp.send("levelname="+data.levelname)

    xmlhttp.onreadystatechange=function(){
        if(xmlhttp.readyState==4&&xmlhttp.status==200)
        {
            var obj = JSON.parse(xmlhttp.responseText)
            fun(obj)
        }
       
    }
}