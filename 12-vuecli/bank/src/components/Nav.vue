<template>
    <div class="nav-content">
        <div class="nav-header">
            {{title}}
        </div>
        <div class="nav-tab">
            <div class="nav-btn" @click="select('/')">
                <div v-if="isSelect" class="active">
                     <img src="../assets/indexs.png" >
                     <span>首页</span>   
                </div>
                <div v-else > 
                    <img src="../assets/index.png" >
                    <span>首页</span> 
                </div>
                
                          
            </div>
            <div class="nav-btn" @click="select('/user')">
                 <div v-if="isSelect" >
                      <img src="../assets/user.png" >
                      <span>职员</span>
                 </div>
                <div v-else class="active">
                     <img src="../assets/users.png" >
                     <span>职员</span>
                </div>
                  
            </div>
        </div>
    </div>
</template>
<style  scoped>
    .nav-header{
        z-index: 10;
        width: 100%;
        height: 1rem;
        background-color: pink;
        text-align: center;
        line-height: 1rem;
        font-size: 18px;
        position: fixed;
        top: 0;
    }
    .nav-tab{
        z-index: 10;
        position: fixed;
        width: 100%;
        height: 1rem;
        bottom: 0;
        font-size: 10px;
        display: flex;
        
       
        background-color: pink;
    }
    .nav-tab .nav-btn{
        display: flex;
        flex-direction: column;
        flex-grow:1 ;
         justify-content: center;
        align-items: center;
        color: #abb;
    }
    .nav-tab .nav-btn img{
         width: 15px;
         height: 15px;
    }
    .nav-tab .nav-btn .active{
        color: yellow;
    }
    .nav-tab .nav-btn div{
        display: flex;
        flex-direction: column;
    }
</style>
<script >
export default {
    data(){
        return {
           thistype:"/",
            isSelect:"good",
            title:"银行列表"
        }
    },
    props:['page'],
    mounted(){
       console.log(this.isSelect)
    },
    watch:{
        page(val){ 
             if(this.isSelect=="good"){
            val = val=='index'?"/":"user"
              this.thistype=val
               this.isSelect=!this.isSelect
               this.title=(val=='index'?"银行列表":"用户列表")
            }
             
        }
    },
    methods:{
        //按钮跳转
        select(type){
           
           if(type!=this.thistype){
               this.thistype=type
               this.isSelect=!this.isSelect
               this.title=(type=='/'?"银行列表":"用户列表")
                this.$router.push(type)
                
           }
    
           
            
          
        }
    },
}
</script>