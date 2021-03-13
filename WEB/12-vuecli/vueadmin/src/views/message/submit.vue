<template>
  <div class="container">
    <el-form ref="form" :model="form" label-width="150px" v-loading="loading">
      <el-form-item label="姓名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="地址ID">
        <el-select v-model="form.addressid" placeholder="请选择地址ID">
          <el-option v-for="item in addressdata" :label="item.addressname" :value="item.addressid" :key="item.addressid"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="职位ID">
        <el-select v-model="form.levelid" placeholder="请选择职位ID">
         <el-option v-for="item in leveldata" :label="item.levelname" :value="item.jrid" :key="item.jrid"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="电话">
        <el-input v-model="form.jrtel"></el-input>
      </el-form-item>
      <el-form-item label="头像上传">
        <el-upload
          class="upload-demo"
          name="sfile"
          action="http://47.92.82.13:4000/getMessageA"
          :on-success="fileSuccess"
          multiple
          :limit="1"
          :file-list="fileList"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">
            只能上传jpg/png文件，且不超过500kb
          </div>
        </el-upload>
      </el-form-item>
      <el-form-item label="微信二维码上传"> 
           <el-upload
          class="upload-demo"
          name="sweixin"
          action="http://47.92.82.13:4000/getMessageB"
          :on-success="weixinSuccess"
          multiple
          :limit="1"
          :file-list="fileList"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">
            只能上传jpg/png文件，且不超过500kb
          </div>
        </el-upload>
      </el-form-item>
      <el-form-item>
          <el-button v-if="isUpdata" type="primary" @click="updataMessage('form')">立即修改</el-button>
        <el-button v-else type="primary" @click="onSubmit('form')">立即创建</el-button>
       
        <el-button @click="resetForm('form')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<style lang="scss" scoped>
.container {
  width: 800px;
  margin: 200px auto;
}
</style>
<script>
import { addMessage } from "@/api/level";
import { levelList } from "@/api/level";
import { adsList } from "@/api/level";
import { searchMessage ,resetMessage} from "@/api/level"
export default {
  data() {
    return {
      isUpdata:false,
      loading:false,
      fileList: [],
      leveldata: [],
      addressdata: [],
      form: {
        name: "",
        jrtel: "",
        addressid: "",
        levelid: "",
        tcoin:"",
        weixin:""
      },
    };
  },
  created() {
    this.show();
    if(this.$route.query.id){
      this.onUpdata(this.$route.query.id)
      
    }
  },
  methods: {
    //获取信息
    onUpdata(id){
      this.isUpdata=true
      console.log(id)
      
      searchMessage({id}).then((res)=>{
        console.log(res)
        let updata=res.data.data[0]
        this.form.name=updata.jrname,
        this.form.levelid=updata.jrlevel
        this.form.jrtel=updata.jrtel
        this.form.tcoin=updata.tcoin
        this.form.weixin=updata.weixin
        this.form.addressid=updata.jraddressesid
      })

    },
    //修改信息
   updataMessage(formName){
          this.$refs[formName].validate((valid) => {
        if (valid) {
          resetMessage({
            id:this.$route.query.id,
            uname: this.form.name,
            addressid:this.form.addressid,
            levelid: this.form.levelid,
            tel:this.form.jrtel,
            tcoin:this.tcoin,
            weixin:this.weixin
          }).then((res) => {
            console.log(res)
            this.$router.push("/message/show");
          });
          console.log("submit")
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
      //提交
    onSubmit(formName) {
        
      this.$refs[formName].validate((valid) => {
        if (valid) {
          addMessage({
            uname: this.form.name,
            addressid:this.form.addressid,
            levelid: this.form.levelid,
            tel:this.form.jrtel,
            tcoin:this.tcoin,
            weixin:this.weixin
          }).then((res) => {
            console.log(res)
            console.log("submit!!");
            this.$router.push("/message/show");
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    //重置
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

    //id展示
    show() {
     this.loading=true
     let promiseLevel=new Promise((resolve,reject)=>{
           levelList().then((res) => {
           console.log(res)
           this.leveldata=res.data.data
           resolve(res.data.data)
      });
     })
      let promiseAddress=new Promise((resolve,reject)=>{
          adsList().then((res) => {
      
        this.addressdata=res.data.data
        resolve(res.data.data)
      });
      })
    Promise.all([promiseLevel,promiseAddress]).then((res)=>{
        this.loading=false
      
    })
      
    },
    //头像上传
    fileSuccess(response){
       
        this.tcoin=response.headerurl
    },
    //二维码上传
    weixinSuccess(response){
       
        this.weixin=response.weixinurl
    }
  },
};
</script>