$.fn.extend({
    vip:function(){
        var obtn=$("<button>按钮 </button>")
        var th=this
        $(this).append(obtn)
        obtn.click(function(){
            af=$("<div class='tan'> <div class='head'>登录<div class='X'>X</div></div> <div class='buttn'></div>  </div>")
            obtn.after(af)
         
            af.find(".X").click(function(){
            
              $(this).closest(".tan").remove()
               })
        })
       
        // .click(function(){
        //     console.log(1);
        // })

    }
})