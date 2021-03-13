<template>
<div class="app-container" v-loading="loading">
 <h1 >列表</h1> 

    
</el-form>
    <el-table
    :data="tableData"
    border
   
     >
     <el-table-column
      type="index"
      width="50">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="province"
      label="职位"
      width="120">
    </el-table-column>
    <el-table-column
      prop="year"
      label="年龄"
      width="120">
    </el-table-column>
    <el-table-column
      prop="jrid"
      label="编号"
      width="120">
    </el-table-column>

    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
       
      </template>
    </el-table-column>
  </el-table>
</div>
   
</template>
<script>
import { levelList } from "@/api/level";
import { levelRemove } from "@/api/level";
export default {
  data() {
    return {
      loading:false,
      tableData: [],
    };
  },

  created() {
   this.show()
  },
  methods: {
    show() {
      
       levelList().then((res) => {
         let data=res.data.data
      for (let i = 0; i < data.length; i++) {
        this.tableData.push({
          name: "王小虎",
          jrid: data[i].jrid,
          province: data[i].levelname,
          year: 10,
        });
      }
    });
     
    },
    //删除
    handleClick(line) {
     console.log(line.jrid)
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.loading=true
          levelRemove({ levelid: line.jrid }).then((res) => {
            console.log(res)
             this.loading=false
            this.show()
            this.$message({
            type: "success",
            message: "删除成功!",
           
           });
          });
         
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
      console.log(line);
    },
  },
};
</script>