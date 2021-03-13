<template>
  <div class="container">
    <ul>
      <li v-for="item in  addressData" :key="item.addressid">
        <div class="bank_list" >
          <div class="left">
            <img src="../../assets/可爱二.jpg"  />
          </div>
          <div class="right">
            <span>{{item.addressname}}</span>
            <div class="bl_user">
                <User :id="item.addressid" />
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import User from "./components/user";
import {bankList} from '@/api/bank'
export default {
    data(){
        return {
            addressData:[]
        }
        
    },
    mounted(){
        
        bankList().then((res)=>{
            this.addressData=res.data.data
           
        })
    },
    components:{
        User
    }
}
</script>
<style scoped>
li{
    margin-top: 3px;
}
.container{
    margin:1rem 8px;
}
.bank_list{
    background-color: yellow;
    padding: 10px;
    font-size: 15px;
    border-radius: 5px;
    overflow: hidden;
}
.left{
   float: left;
    margin-right: 50px;
    
}
.left img {
    width: 1.5rem;
    height:1.5rem;
}
.right{
    float:left;
  
   
}
.bl_user{
   margin-top: 40px;
}
</style>

