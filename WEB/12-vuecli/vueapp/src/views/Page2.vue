<template>
    <div class="pagetwo">
        这是页面二
        <h1>用户名：{{$route.query.username}}</h1>
        <button @click="$store.commit('add',2)">公共变量的自增</button>
        <h1>公共变量{{$store.state.count}}</h1>
    </div>
</template>
<script>
export default {
    created(){
        // console.log(this.$route.query.username,this.$route);
        console.log(this.$store.state.count);
    },
    methods:{
        // addHandle(){/* 在特殊情况下不能同步 */
        //     // ++this.$store.state.count
        //     this.$store.commit('add',2)/* 调用公共方法 参数第二起*/
        // }
    }
}
</script>