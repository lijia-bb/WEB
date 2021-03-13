<template>
    <div>
        <!-- <h1>{{msg}}</h1> -->
        <h1 class="myh1">测试内容{{num}}</h1>
        <button @click="addHandle">add</button>
        <h1>公共变量{{$store.state.count}}</h1>
    </div>
</template>

<script>
export default {
    data(){
        return {
            num:123
        }
    },
    // props:['msg'],
    methods:{
        addHandle(){
            ++this.num
        }
    }
}
</script>
<style scoped>
      h1{
          color:red;
      }
</style>
