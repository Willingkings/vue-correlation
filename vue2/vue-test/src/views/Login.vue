<template>
  <div class="login">
    <div class="login-box">
      <el-form
        :model="loginForm"
        :rules="loginFormRules"
        ref="loginForm"
        label-width="80px"
        label-position="left"
        class="login-form"
      >
        <el-form-item prop="username" :label="$t('login.username')">
          <el-input v-model="loginForm.username" prefix-icon="el-icon-user-solid"></el-input>
        </el-form-item>
        <el-form-item prop="password" :label="$t('login.password')">
          <el-input type="password" v-model="loginForm.password" prefix-icon="el-icon-lock"></el-input>
        </el-form-item>
        <el-form-item class="login-btns">
          <!-- <el-button type="primary" @click="onSubmit('loginForm')">{{$t("login.login")}}</el-button> -->
          <router-link to="/dashboard"><el-button type="primary" >{{$t("login.login")}}</el-button></router-link>
          <el-button @click="onReset">{{ $t("login.reset") }}</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
      loginFormRules: {
        username: [
          { required: true, message: "请输入登录名称", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        // 验证密码是否合法
        password: [
          { required: true, message: "请输入登录密码", trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "长度在 6 到 15 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    onReset() {
      this.$refs.loginForm.resetFields();
    },
    onSubmit() {
      // this.$router.push('/dashboard')
      // this.$refs[formName].validate(async (valid) => {
      //   if (!valid) return;
      //   const result = await this.httpRequests.post(
      //     "/api/private/v1/login",
      //     this.loginForm
      //   );
      //   if (result && result.data) {
      //     window.sessionStorage.setItem("tokenStr", result.data.token);
      //   }
      // });
    },
  },
};
</script>

<style lang="less" scoped>
.login {
  height: 100vh;
  background-color: #2b4b6b;
  &-box {
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    top: calc(50% - 150px);
    left: calc(50% - 225px);
  }
  &-form {
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
  }
  &-btns {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
