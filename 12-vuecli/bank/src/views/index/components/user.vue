<template>
<div>
    <div class="user_content">
    <div class="start">明星代言人：{{ userNum }} 人</div>
    <div class="list" v-if="isclick" @click="getuser">
      <button class="list_btn">查看更多</button>
    </div>
    <div class="list" v-else @click="getuser">
      <button class="list_btn">关闭</button>
    </div>
  </div>
  <div v-if="!isclick">
    <div class="userlist" v-for="(item,index) in userList" :key="item.irid">
         <span>{{index+1}}</span>  <span>{{item.jrname}}</span>   <span>{{item.jrtel}}</span>
    </div>
  </div>
   
</div>
  
</template>
<script>
import { addressList } from "@/api/bank";
export default {
  data() {
    return {
      userList: [],
      isclick: true,
      userNum: 0,
    };
  },
  props: ["id"],
  mounted() {
    
    this.getList(this.id);
  },
  methods: {
    getList(id) {
      addressList({ searchid: id }).then((res) => {
        if (res.data.code == 101) {
          this.userNum = res.data.data.length;
          this.userList = res.data.data;
        }
    
      });
    },
    getuser() {
      if (this.userNum != 0) {
        this.isclick = !this.isclick;
      }
    },
  },
};
</script>
<style  scoped>
li{
    width:100px;
    font-size:10px
}
.user_content {
  width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #aaa;
}
.list_btn {
  font-size: 12px;
  border: 1px solid #568fe8;

  color: #568fe8;
  border-radius: 3px;
  width: 80px;
  padding: 2px;
}
.userlist{
    color: #aaa;
}
</style>