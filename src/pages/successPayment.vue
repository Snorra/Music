<template>
  <div class="div1">
    <studentHeader></studentHeader>
    <i class="iconfont tick">&#xe65e;</i>
    <p class="font1">支付成功 ！</p>
    <p class="info">您可在“我的预约”中找到预约信息</p>
    <router-link to="/courseList1" class="myFirstpage">返回首页</router-link>
  </div>
</template>

<style scoped>
  @font-face {
    font-family: 'iconfont';
    src: url('../assets/font/iconfont.eot');
    src: url('../assets/font/iconfont.eot?#iefix') format('embedded-opentype'),
    url('../assets/font/iconfont.woff') format('woff'),
    url('../assets/font/iconfont.ttf') format('truetype'),
    url('../assets/font/iconfont.svg#iconfont') format('svg');
  }
  .iconfont{
    font-family:"iconfont" !important;
    font-size:0.5rem;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }
  .div1 {
    position: relative;
  }
  .tick {
    position: absolute;
    top: 5rem;
    left: 2rem;
  }
  .font1 {
    position:absolute;
    font-size: 0.5rem;
    top: 5rem;
    left:3rem;
  }
  .info {
    position:absolute;
    font-size:0.3rem;
    color: #cccccc;
    top: 6rem;
    left:1.5rem;
  }
  .myFirstpage {
    position:absolute;
    height: 0.66rem;
    width:1.66rem;
    border-radius: 10px;
    line-height: 0.66rem;
    text-align: center;
    margin: 0.5rem;
    top: 8rem;
    left: 35%;
    border: 0.02rem solid #cccccc;
    color: #333333;
    background-color: #cccccc;
  }

</style>

<script>
  import studentHeader from '../components/studentHeader.vue'

  export default {
    components: {
      studentHeader
    }
  }

</script>
