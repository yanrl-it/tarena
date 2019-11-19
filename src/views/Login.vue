<template>
  <div class="login-content">
    <header-content></header-content>
    <div class="login-box">
      <div class="box-content">
        <div class="box-title">
          <h2 class="title-z">图鸭集群管理服务器系统</h2>
          <h3 class="title-y">Tucodec Cluster Administration Server System</h3>
        </div>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="55px">
          <el-form-item label="账号" prop="uname">
            <el-input type="text" v-model="ruleForm.uname" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="upwd">
            <el-input type="password" v-model="ruleForm.upwd" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item class="box-bt">
            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
            <!-- <div class="box-bt">
            <div>
              <button type="primary" @click="submitForm('ruleForm')">登录</button>
            </div>
            <div>
              <button @click="resetForm('ruleForm')">重置</button>
            </div>
            </div> -->
          </el-form-item>
        </el-form>
      </div>
    </div>
    <footer-content></footer-content> 
  </div>
</template>

<script>
import HeaderContent from './../components/Header.vue'
import FooterContent from './../components/Footer.vue'

export default {
  components: {
    HeaderContent,
    FooterContent
  },
  data() {
    var reg = /^[a-z0-9_]{3,12}$/i;
    var validateUname = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入账号'));
      } else if (!reg.test(value)) {
        callback(new Error('用户名格式不正确'));
      } else {
        callback();
      }
    }
    var validateUpwd = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else  if (!reg.test(value)) {
        callback(new Error('密码格式不正确'));
      } else {
        callback();
      }
    }
    return {
      ruleForm: {
        uname: '',
        upwd: '',
      },
      rules: {
        uname: [
          { validator: validateUname}
        ],
        upwd: [
          { validator: validateUpwd}
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.ruleForm.uname);
          var uname = this.ruleForm.uname, upwd = this.ruleForm.upwd;
          this.axios
            .get('/user/login', {
              params: {
                uname: uname,
                upwd: upwd
              }
            })
            .then(res => {
              console.log(res.data)
              if (res.data.code == '1') {
                this.$store.dispatch("userLogin", true)
                //Vuex在用户刷新的时候userLogin会回到默认值false，所以我们需要用到HTML5储存
                //我们设置一个名为Flag，值为isLogin的字段，作用是如果Flag有值且为isLogin的时候，证明用户已经登录了。
                localStorage.setItem("Flag", "isLogin")
                //iViewUi的友好提示
                this.$message({
                  showClose: true,
                  message: '登录成功',
                  type: 'success'
                })
                //登录成功后跳转到指定页面
                this.$router.push("/Home")
              } else {
                this.$message({
                  showClose: true,
                  message: '用户名或密码不正确',
                  type: 'error'
                })
              }
            })
            .catch(err => {
              console.log(err)
            })
          } else {
            console.log('error submit!!');
            return false;
          }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style scoped>
.login-box {
  width: 635px;
  background-color: #1e3246;
  display: flex;
  position: fixed;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.login-box .box-content {
  margin: 50px auto;
  width: 330px;
}
.box-content .box-title {
  color: #fff;
  padding-bottom: 50px;
  text-align: center;
}
.box-title .title-z {
  font-size: 26px;
  padding-bottom: 10px;
}
.box-title .title-y {
  font-size: 14px;
}

.box-bt {
  text-align: center;
}
.box-bt .el-button{
  width: 100px;
}
.box-bt .el-button+.el-button {
  margin-left: 75px;
}

</style>
