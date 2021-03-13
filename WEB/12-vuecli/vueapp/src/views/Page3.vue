<template>
  <div class="pagethird">
    <h1>页面三</h1>
            <h1>用户名:{{$route.params.username}}</h1>
            <h1>公共变量2{{$store.state.count2}}</h1>
             <h1>公共变量3{{$store.state.count3}}</h1>
             <h1>getter:{{$store.getters.sum}}</h1>
            <button @click="$store.commit('reduce',3)">同步：公共变量递减</button>
             <button @click="$store.commit('mul',{a:1,b:2})">同步步：公共变量多参数</button>
             <button @click="$store.dispatch('action',4)">异步：公共变量参数</button>
  
  </div>
</template>

<script>

export default {
  
  created() {
  
    console.log(this.$store.state.count2,this.$store.state.count3);

 
},
}
</script>