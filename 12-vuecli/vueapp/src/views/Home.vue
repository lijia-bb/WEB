<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <button @click="click1">but1</button>
    <button  @click="click2">but2</button>
    
    <component :is='num'> </component>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Test from '@/components/Test.vue'

export default {
  name: 'Home',
  data(){
    return {
      num:HelloWorld
      }
  },
  methods:{
    click1(){
      this.num=HelloWorld
    },
      click2(){
        this.num=Test
      }
  },
  components: {
    HelloWorld,
    Test
  }
}
</script>
