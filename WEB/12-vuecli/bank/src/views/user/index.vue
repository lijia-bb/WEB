<template>
    <div class="container">
        <ul>
            <li v-for="item in MessageData" :key="item.jrid">
                <div class="user_list">
                    <div class="left">
                    <img v-if="check(item.tcoin)=='good'" :src="item.tcoin" >
                    <img v-else-if="check(item.tcoin)=='soso'" :src="'http://47.92.82.13:4000'+item.tcoin" >
                    <img v-else src="../../assets/可爱二.jpg" >
                </div>
                <div class="right">
                    <div class="title"><span class="name">{{item.jrname}}</span> <span class="level">{{item.levelname}}</span> </div>
                    <div class="address">{{item.addressname}}</div>
                    <User :tel="item.jrtel" :weixin="item.weixin" :name="item.jrname"/>
                </div>
                </div>
                
            </li>
        </ul>
    </div>
</template>
<script>
import User from './components/user'
import {messageList} from '@/api/bank'
export default {
    data(){
        return {
            MessageData:[]
        }
    },
    mounted(){
        this.$emit("newPage","user")
    },
    created(){
        messageList().then((res)=>{
            console.log(res)
            this.MessageData=res.data.data
        })
    },
    components:{
        User
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
<style scoped>
    .container{
         margin:1rem 8px;
    }
    li{
        margin-top: 5px;
        width: 100%;
        height: 2rem;
        background-color: yellow;
        border-radius: 5px;
        overflow: hidden;
    }
    .user_list{
    background-color: yellow;
    padding: 15px;
    font-size: 15px;
    border-radius: 10px;
    overflow: hidden;
    }
    .left{
        float: left;
        margin-right: 50px;
    }
    .left img{
        width: 1.5rem;
        height: 1.5rem;
    }
    .right .name{
        font-size: 25px;
    }
    .right .level{
        margin-left: 5px;
        font-size: 20px;
    }
    .right .address{
        margin: 0.1rem 0;
        color: #aaa;
        font-size: 20px;
        height: 30px;
    }
</style>>

