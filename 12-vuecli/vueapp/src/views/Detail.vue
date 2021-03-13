<template>
   <div>
       detail
       <h1>电影名字：{{movie}}</h1>
   </div>
</template>
<script>
// import axios from 'axios'
// import requst from "@/utils/request";
import {getDetail} from '@/api/tv' 
export default {
    data(){
        return {
            movie:""
        }
    },
    methods:{
        // getData(id){
        //     axios.get('https://bird.ioliu.cn/v2?url=https://m.douban.com/rexxar/api/v2/tv/'+id+'').then((res)=>{
        //         this.movie=res.data.title
        //     })
        // },
        getData(id){
            getDetail(id).then((res)=>{
                console.log(res.data.title);
                this.movie=res.data.title
            })
        }
        
    
    },
    created(){
        // this.getData(this.$route.query.id)
        // console.log(this.$route.params.id);
        this.getData(this.$route.params.id)
    //    requst({
    //        url:'https://bird.ioliu.cn/v2?url=https://m.douban.com/rexxar/api/v2/tv/'+this.$route.params.id+'',
    //        methods:'get'
    //    }).then((res)=>{
    //        console.log(res);
    //    })
    // getDetail(this.$route.params.id).then((res)=>{
    //     console.log(res);
    // })
    }
}
</script>