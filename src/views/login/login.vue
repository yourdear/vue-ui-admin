<template>
  <div class="login">
    <div class="login-box">
      <h2 class="login-title">登录修改后</h2>
      <el-form :model="formInline">
        <el-form-item>
          <el-input v-model="formInline.user"
                    placeholder="审批人" />
        </el-form-item>
        <el-form-item>
          <el-input v-model="formInline.password"
                    placeholder="审批人" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary"
                     @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
// import { getToken } from '../../api/login'
// import axios from 'axios'
export default {
  data() {
    return {
      labelPosition: 'right',
      formInline: {
        user: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.$router.push('/element/upload')
      // 取消请求
      // if (this.source) {
      //   this.source.cancel('Operation canceled by the user.')
      // }
      // const source = axios.CancelToken.source();
      // this.source = source;
      // const params = {
      //   account: '13345893@qq.com',
      //   type: 101,
      //   secret: 'zxw123456'
      // }
      // getToken(params, source.token).then(res => {
      //   console.log(res)
      // })
    }
  }

}
</script>
<style>
    .el-form{
        margin: 0 50px;
    }
    .el-button--primary{
        width: 100%;
    }
</style>
<style scoped lang="stylus">
   .login
        position relative
        width 100%
        height 100%
        background cadetblue
        .login-box
            position absolute
            left 50%
            top: 50%
            transform translate(10%,-30%)
            width 500px
            height 300px
            background #fff
            .login-title
                text-align center

</style>
