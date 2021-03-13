<template>
  <div class="container" v-loading="loading">
    <el-form ref="form" :model="form" label-width="80px" :rules="rules">
      <el-form-item label="职位"  prop="name">
        <el-input type="textarea" v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">添加</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  
  </div>
</template>
<script>
import {levelAdd} from "@/api/level"
export default {
  data() {
    return {
      loading:false,
      form: {
        name:"",
        
      },
      rules: {
          name: [
            { required: true/* 必填 */, message: '请填写职位名称', trigger: 'blur' /* 失去焦点 */}
          ]
        }
    };
  },
  methods: {
    //提交
    onSubmit() {
      // console.log(this.$refs.name);
      // this.$refs.form.style.color="pink"
       this.$refs.form.validate((valid) => {/* 验证表单是否添值 */
          if (valid) {
             this.loading=true
            levelAdd({levelname:this.form.name}).then((res)=>{
              console.log(res)
              this.loading=false
              this.$router.push("/testone/test")
             
            })
            // alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
    },
  },
};
</script>
<style lang="scss" scoped>
      $color:red;
      .container{
        width: 500px ;
        margin: 200px auto;
      }
</style>