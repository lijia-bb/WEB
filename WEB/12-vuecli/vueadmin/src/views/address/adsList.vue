<template>
    <div class="app-container" v-loading="loading">
         <el-table
    :data="tableData"
    style="width: 100%"
    >
  
    <el-table-column
      prop="addressname"
      label="地址"
      width="300">
    </el-table-column>
    <el-table-column
      prop="longitude"
      label="经度"
      width="120">
    </el-table-column>
     <el-table-column
      prop="latitude"
      label="纬度"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="120">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData)"
          type="text"
          size="small">
          移除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
    </div>
</template>

<script>
import { adsList} from '@/api/level'
import { delAds} from '@/api/level'
export default {

    data(){
        return {
            loading:false,
            tableData:[]
        }
    },
    methods:{
        showAddress(){
            adsList().then((res)=>{
            this.tableData=res.data.data
        })
        },
        //删除地址
        deleteRow(index,data){
            console.log(index,data);
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            delAds({addressid:data[index].addressid}).then((res)=>{
               this.loading=true
                this.$message({
                type: 'success',
                message: '删除成功!'
                });
                this.showAddress()
                this.loading=false
            })
         
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
        }
    },
    created(){
        this.showAddress()
    }
}
</script>
<style lang="scss" scoped>
    .app-container{
        height: 800px;
    }
</style>