<template>
  <div>
   
    <el-table v-loading="loading" :data="tableData" style="width: 100%">
      <el-table-column prop="num" label="序号" width="180"> </el-table-column>
      <el-table-column prop="date" label="ID" width="180"> </el-table-column>
      <el-table-column prop="name" label="电影名" width="180"></el-table-column>
     
      <el-table-column prop="address" label="演员"> </el-table-column>
      <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
       
      </template>
    </el-table-column>
    </el-table>
    <el-pagination
  :page-size="5"
  
  layout="prev, pager, next"
  :total="tableTotal" @current-change="changePage">
</el-pagination>
    
    
  </div>
</template>

<script>
// import axios from "axios";
import{getList} from '@/api/tv'
export default {
  data() {
    return {
      loading: false,
    
     tableTotal:0,
      tableData: [],
    };
  },
  methods: {
      handleClick(title){
       
        //   this.$router.push({
        //       path:"/tvdetail",
        //       query:{
        //           id:title.date
        //       }
        //   })
        this.$router.push("./tvdetail/"+title.date)
      },
    changePage(num){
           console.log(num)
        this.getData((num-1)*5);

      },
    getData(start) {
      this.loading = true,
      console.log(start)
        // axios
        //   .get(
        //     "https://bird.ioliu.cn/v2?url=https://m.douban.com/rexxar/api/v2/subject_collection/tv_domestic/items?start="+start+"&count=5"
        //   )
        getList(start)
          .then((res) => {
            this.tableTotal=res.data.total
            let logo = res.data.subject_collection_items;
            //   for(let i=0;i<logo.length;i++){
            //       this.tableData.push({num:i+1,date:logo[i].id,name:logo[i].title,address:logo[i].info})
            //   }
           

            //格式化
            
            let newArr = logo.map((logo) => {
              return {
                date: logo.id,
                name: logo.title,
                address: logo.info + logo.episods_info,
              };
            });
            this.tableData = newArr;
           
            this.loading = false;
          });
    },
  },
  created() {
    /* 数据请求可以放在 created 和 mounted（对页面有依赖） */
    this.getData(0);
  },
};
</script>