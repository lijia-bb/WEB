<template>
  <div id="app">
    <div id="nav">
      <Nav :page='npage'></Nav>
    </div>
    <router-view  @newPage="changePage"/>
  </div>
</template>
<script >
import Nav from '@/components/Nav.vue'
export default({
  components:{
    Nav
  },
  data(){
    return{
      npage:'index'
    }
  },
  methods:{
    changePage(page){
      console.log(page)
      this.npage=page
    }
  }
})
</script>
<style>
  *{
    margin:0;
    padding:0;
  }
  li{
    list-style:none;
  }
  body{
    background-color: #f5f6f7;
  }
</style>
