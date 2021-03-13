<template>
<div>
    <div class="comtainer">
    <div class="tel">电话：{{tel}}</div>
    <div class="list" v-if="isclick" @click="isclick=!isclick"><button class="btn">查看微信</button></div>
    <div class="list" v-else @click="isclick=!isclick"><button class="btn">正在查看</button></div>
  </div>
  <div class="weixin" v-if="!isclick"> 
      <div class="name">{{name}}的VV</div>
      <div class="page" v-if="check(weixin)=='good'">
          <img :src="weixin" >
      </div> 
       <div class="page" v-else-if="check(weixin)=='soso'">
          <img :src="'http://47.92.82.13:4000'+weixin" >
      </div> 
      <div class="page" v-else>
          <img src="../../../assets/可爱二.jpg" >
      </div> 
      <div class="title" @click="isclick=!isclick">
          <button class="btn">关闭</button>
      </div>
    </div>
</div>
  
</template>
<script>
export default {
    data(){
        return{
            isclick:true
        }
    },
    props:["tel","weixin","name"],
    create(){
        console.log(this.tel,this.weixin)
    },
    methods:{
        check(url){
            if(url){
                if(url.includes('http')){
                    return 'good'
                }
                else{
                    return 'soso'
                }
            }
            else{
                return false
            }
        }
    }
    
}
</script>
<style  scoped>
.comtainer {
  width: 250px;
  display: flex;
  font-size: 15px;
  justify-content: space-between;
  align-items: center;
  color: #aaa;
}
.btn{
    font-size: 15px;
    border: 1px solid #568fe8;
    color: #568fe8;
    border-radius: 3px;
    width: 80px;
    padding: 2px;
}
img{
    width: 200px;
    height: 200px;
}
.weixin{
    width: 100%;
    height: 100%;
    padding: 30%;
    
    position: fixed;
    background-color: rgba(211, 250, 35, 0.5);
    top: 0;
    left: 0;
}
.name{
    font-size:30px;
    color:palevioletred;
    width: 200px;
    text-align: center;
}
.title{
    width: 200px;
    text-align: center;
}
.title .btn{
    border-radius: 5px;
}
</style>
