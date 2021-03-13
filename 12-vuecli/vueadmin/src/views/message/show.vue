<template>
  <div class="app-container">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
    
      <el-form-item label="搜索信息 地址">
        <el-select v-model="formInline.addressid" placeholder="请选择">
          <el-option v-for="item in addressList" :key="item.jraddressid" :label="item.addressname" :value="item.jraddressesid" ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
        <el-button type="primary" @click="reset">重置</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="index" width="50"> </el-table-column>
      <el-table-column prop="jrname" label="姓名"> </el-table-column>
      <el-table-column prop="addressname" label="地址"> </el-table-column>
      <el-table-column prop="levelname" label="职位"> </el-table-column>
      <el-table-column prop="jrtel" label="电话"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="200">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="dleclick(scope.row)"
            type="text"
            size="small"
            icon="el-icon-delete"
            >删除</el-button
          >
          <el-button
            @click.native.prevent="check(scope.row)"
            type="text"
            size="small"
            icon="el-icon-edit"
            >修改</el-button
          >
          
          <!-- <el-button type="text" size="small">编辑</el-button> -->
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { showMessage,delMessage,searchAddress } from "@/api/level";
export default {
  data() {
    return {
     formInline: {
          addressid: '',
          jrid: ''
        },
      tableData: [],
      messageList:[],
      addressList:[],
    };
  },
  methods: {
    //展示
    show() {
      showMessage().then((res) => {
        console.log(res);
        this.tableData = res.data.data;
        this.addressList=res.data.data;
      });
    },
    //搜索
    onSubmit(){
      searchAddress({searchid:this.formInline.addressid}).then((res)=>{
        console.log(res)
        var value=res.data.data
        value.map((key)=>{
           this.addressList.map((key2)=>{
           if((key2.jraddressesid==this.formInline.addressid)&&(key.jrid==key2.jrid)){
           key.addressname=key2.addressname
           key.levelname=key2.levelname
           }
        })
        })
        this.tableData=value

      })
    },
    //重置
    reset(){
      this.tableData=this.addressList
      this.formInline.addressid=""
    },
    //删除
    dleclick(row) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          delMessage({ id: row.jrid }).then((res) => {
            this.$message({
              type: "success",
              message: "删除成功!",
            });
            console.log(res);
            this.show();
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
      //修改
  check(res){
    console.log(res)
    this.$router.push({
      path:"/message/submit",
      query:{
        id:res.jrid
      }
    })
  },
  },

  created() {
    this.show();
  },
};
</script>