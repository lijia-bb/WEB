<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <!-- <router-link to="/page">Page</router-link> -->
      <router-link v-bind:to="{name:'Page',params:{username:'小明'}}">页面一</router-link>|
      <router-link v-bind:to="{name:'PageTwo',query:{username:'小明'}}">页面二</router-link>|
     
      <router-link to="/pagethird/小红">页面三</router-link>|
      <router-link to="/pagefour">页面四</router-link>|
      <router-link to="/pagefive">页面五</router-link>|
      <router-link to="/pagesix">页面六</router-link>|
      <router-link to="/echarts">echarts</router-link>|
      <router-link to="/baidu">百度地图</router-link>|
      <!-- <router-link v-bind:to="{name:'Pagefive'}">页面五</router-link>| -->
      <router-link to="/redirect/小兰">重定向</router-link>|
      <!-- <router-link to="/detail">别名</router-link> -->
      <button @click="linkHandle">跳转</button>
    </div>
    <div class="box">
      <transition name="fade">
        <!-- <keep-alive>页面信息缓存 -->
           <router-view/>
        <!-- </keep-alive> -->
      <!-- 页面切换 显示页面 -->
      </transition>
    </div>
    
  </div>

</template>
<script>
export default {//router 全局的  route局部的
  methods:{
    linkHandle(){
      // this.$router.push("/about")
      // this.$router.push({
      //   name:"Page",
      //   params:{
      //     username:"小明"
      //   }
      // })
      // this.$router.push({
      //   path:"/pagetwo",
      //   query:{
      //     username:"小明"
      //   }
      // })
      // this.$router.go(-1)/* 向前向后 步数有数值决定 可以返回上一级路径相当于添加一条历史管理*/
        this.$router.replace({/* 替换不会返回到上一级记录 */
        path:"/pagetwo",
        query:{
          username:"小明"
        }
      })
    }
  }
}
</script>
<style>
.box{
  position: relative;
}
.fade-enter{/* 准备进入 */
  transform: translateX(-100%);
}
.fade-enter-active{/* 进入过程 */
  position: absolute;
  transition: all 1s ease;
  width: 100%;
  top: 0;
}
.fade-enter-to{/* 进入结束 */
  transform: translateX(0);
}
.fade-leave{
  transform: translate(0);
}
.fade-leave-active{
  position: absolute;
transition: all 1s ease;
top: 0;
width: 100%;
}
.fade-leave-to{
  transform: translate(100%);

}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
