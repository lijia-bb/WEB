$.fn.extend({
    vip2:function(){
        var obtn=$(" <button id='btn'>登录</button>"
        +"<div class='login'>"
           + "<div class='mosk'></div>"
           + "<div class='log'>"
                +"<div class='loghead'>"
                   +" <span>登录</span>"
                    +"<span id='close'>X</span>"
               +" </div>"
               +" <div class='content'>"
                   +"登录"
                +"</div>"
           +" </div>"
        +"</div>") 
        $(this).html(obtn)
        $("#btn").click(function(){
            $(".login").show()
        })
        $("#close").click(function(){
            $(".login").hide()
        })
    }
})