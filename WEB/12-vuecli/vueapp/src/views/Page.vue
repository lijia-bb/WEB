<template>
    <div class="Page">
        <h1>Page 页面 {{num}}</h1>
        <h1>用户名：{{$route.params.username}}</h1><!-- 刷新就没了 -->
        <button @click="addHandle">add</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            num:1
        }
    },
    created(){
        console.log(this.$route.params.username,"out");
    },
    activeted(){
        console.log("com")
    },
    deactiveted(){
        console.log("leave")
    },
    methods:{
        addHandle(){
            this.num++
        }
    }
}
</script>