<template>
  <div class="container">
    <header class="header">
     <div class="header_inner">
       <div class="header_cont">Student</div>
     </div>
    </header>

    <form class="loginForm" >
      <section class="input_container phone_number">
        <label class="lab1">手机号</label>
        <input class="input1" type="text" placeholder="请输入手机号" name="phone" maxlength="11" v-model="phoneNumber">
        <button class="button1" @click.prevent="getVerifyCode" :class="{right_phone_number:rightPhoneNumber}" v-show="!computedTime">获取验证码</button>
        <button class="button1" @click.prevent v-show="computedTime">已发送({{computedTime}}s)</button>
      </section>
      <section class="input_container">
        <label class="lab1">验证码</label>
        <input class="input2" type="text" placeholder="验证码" name="mobileCode" maxlength="6" v-model="mobileCode">
      </section>
    </form>

   <footer class="footer">
     <div class="footer_inner">
        <div class="footer_cont">
          <div class="login_container" @click="mobileLogin">登录</div>
        </div>
     </div>
   </footer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        photoNumber:null,//手机号码
        mobileCode:null,//短信验证码
        computedTime:0//倒数计时
      }
    },

  methods: {

//获取短信验证码
    async getVerifyCode(){
      if (this.rightPhoneNumber) {
        this.computedTime = 30;
        this.timer = setInterval(() => {
          this.computedTime --;
          if (this.computedTime == 0) {
            clearInterval(this.timer)
          }
        }, 1000)
        //判读用户是否存在
        let exsis = await checkExsis(this.phoneNumber, 'mobile');
        if (exsis.message) {
          this.showAlert = true;
          this.alertText = exsis.message;
          return
        }else if(!exsis.is_exists) {
          this.showAlert = true;
          this.alertText = '您输入的手机号尚未绑定';
          return
        }
        //发送短信验证码
        let res = await mobileCode(this.phoneNumber);
        if (res.message) {
          this.showAlert = true;
          this.alertText = res.message;
          return
        }
        this.validate_token = res.validate_token;
       }
     }
   },


  }
</script>

<style scoped>
  .container {
    max-width: 640px;
    height: 568px;
    margin: 0 auto;
    overflow-x: hidden;
  }
  /*header的属性值*/
  .header {
    height: 1.00rem;
  }
  .header_inner {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
    max-width: 640px;
    height: 1.00rem;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 0 0.24rem;
    border-bottom: 0.02rem solid #cccccc;
    background-color: #ffffff;
  }
  .header_cont {
    text-align: center;
    padding: 0 0.4rem;
    line-height: 0.98rem;
    font-size: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /*.loginForm{
    background-color: #fff;
    margin-top: .6rem;
  .input_container{
    display: flex;
    justify-content: space-between;
    padding: .6rem .8rem;
    border-bottom: 1px solid #f1f1f1;
  input{
  @include sc(.7rem, #666);
  }
  button{
  @include sc(.65rem, #fff);
    font-family: Helvetica Neue,Tahoma,Arial;
    padding: .28rem .4rem;
    border: 1px;
    border-radius: 0.15rem;
  }
  .right_phone_number{
    background-color: #4cd964;
  }
  }*/
  .loginForm{
    position:absolute;
    top:4.00rem;
  }
  .lab1 {
    font-size: 0.4rem;
    margin-left: 0.5rem;
  }
  .input1 {
    height:0.6rem;
    width: 2.80rem;
    border-radius: 5px;
  }
  .input2 {
    height: 0.6rem;
    width:1.40rem;
    border-radius: 5px;
  }
  .button1 {
    height: 0.6rem;
    border-radius: 5px;
    background-color: white;
  }



  /*footer的属性值*/
  .footer {
    position:fixed;
    height: 1.00rem;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 99;
  }
  .footer_inner {
    /*position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 99;*/
    max-width: 640px;
    height: 1.00rem;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 0 0.24rem;
    border-top: 0.02rem solid #cccccc;
    background-color: #ffffff;
  }
  .footer_cont {
    text-align: center;
    padding: 0 0.4rem;
    line-height: 0.98rem;
    font-size: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .btn {

  }


</style>
