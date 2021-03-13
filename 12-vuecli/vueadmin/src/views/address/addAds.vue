<template>
   <div class="container" v-loading="loading">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="地址" prop="name">
    <el-input type="textarea" v-model="ruleForm.name"></el-input>
  </el-form-item>
   <el-form-item label="纬度" prop="longitude">
    <el-input type="textarea" v-model="ruleForm.longitude"></el-input>
  </el-form-item>
   <el-form-item label="经度" prop="latitude">
    <el-input type="textarea" v-model="ruleForm.latitude"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
  </el-form-item>
</el-form>
   </div>
</template>
<script>
import {addAds} from '@/api/level'
export default {
    data(){
        return {
            loading:false,
            ruleForm:{
            name:"",
            longitude:'',
            latitude:'',
            },
           
             rules: {
                name: [
                    { required: true, message: '请填写地址', trigger: 'blur' }
                ],
                longitude: [
                    { required: true, message: '请填写纬度', trigger: 'blur' }
                ],
                latitude: [
                    { required: true, message: '请填写经度', trigger: 'blur' }
                ]
        }
        }
    },
    methods:{
         submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
              addAds({address:this.ruleForm.name,longitude:this.ruleForm.longitude,latitude:this.ruleForm.latitude}).then((res)=>{
                  this.loading=true,
                  console.log(res)
                  this.$router.push("/address/adsList")
                  this.loading=false
              })
            
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    }
}
</script>
<style lang="scss" scoped>
    .container{
        width: 300px;
        margin: 0 auto;
    }
</style>