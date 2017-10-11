<template>
  <div class="container">
    <amstudioHeader></amstudioHeader>
    <p class="p1">我参加的课程</p>
    <div class="div1" v-for="n in 5">
      <p class="p11">{{ courseName }}</p>
      <p class="p22">{{ course }}</p>
      <p class="p33">{{ teacherName }}</p>
      <p class="p44">{{ week }}</p>
      <p class="p55">{{ time }}</p>
      <p class="p66">{{ data }}</p>
      <p class="p7 p71">我要上课</p>
      <p class="p7 p72">我要请假</p>
      <p class="p7 p73">记录练习</p>
      <p class="p88"></p>
      <p class="p99">共24节课程，还剩3节</p>
      <p class="p10"></p>
      <p class="pp1">{{ count }}<p class="pp11">次</p></p>
      <i class="iconfont tick">&#xe678;</i>
      <p class="pp2">练琴记录</p>
    </div>
    <studentFooter></studentFooter>
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
  *{
    color: #333333;
  }
  .container {
    position: relative;
  }
  .p1 {
    height: 1rem;
    width: 100%;
    line-height: 1rem;
    text-align: center;
    font-size: 0.3rem;
  }
  .div1 {
    height: 5rem;
    border: 0.02rem solid #cccccc;
    border-radius: 0.4rem;
    box-shadow: 0px 0px 7px #cccccc;
    margin-bottom: 0.2rem;
    position: relative;
  }
  .p11 {
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    font-size: 0.4rem;
  }
  .p22 {
    position: absolute;
    top: 1.4rem;
    left: 0.5rem;
  }
  .p33 {
    position: absolute;
    top: 1.4rem;
    left: 2.0rem;
  }
  .p44 {
    position: absolute;
    top: 1.9rem;
    left: 0.5rem;
  }
  .p55 {
    position: absolute;
    top: 2.4rem;
    left: 0.5rem;
  }
  .p66 {
    position: absolute;
    top: 2.9rem;
    left: 0.7rem;
    font-size:1px;
  }
  .p71 {
    position: absolute;
    top: 3.8rem;
    left: 0.5rem;
    background-color: green;
    color: white;
    height: 0.7rem;
    width: 2.0rem;
    line-height: 0.7rem;
    text-align: center;
    border-radius: 10px;
    font-size: 0.3rem;
  }
  .p72 {
    position: absolute;
    top: 3.8rem;
    left: 2.7rem;
    background-color: green;
    color: white;
    height: 0.7rem;
    width: 2.0rem;
    line-height: 0.7rem;
    text-align: center;
    border-radius: 10px;
    font-size: 0.3rem;
  }
  .p73 {
    position: absolute;
    top: 3.8rem;
    left: 4.9rem;
    background-color: green;
    color: white;
    height: 0.7rem;
    width: 2.0rem;
    line-height: 0.7rem;
    text-align: center;
    border-radius: 10px;
    font-size: 0.3rem;
  }
  .p99 {
    position: absolute;
    top: 1.0rem;
    left: 4.5rem;
  }
  .p10 {
    position: absolute;
    top: 0.4rem;
    left: 4.5rem;
    height: 0.4rem;
    width: 2.0rem;
    background-color: green;
    padding-right: 1rem #cccccc;
  }
  .pp1 {
    position: absolute;
    top: 1.8rem;
    left: 5.0rem;
    font-size: 0.5rem;
  }
  .pp11 {
    position: absolute;
    top: 2.05rem;
    left: 5.6rem;
  }
  .tick {
    position: absolute;
    top: 2.5rem;
    left: 5.0rem;
  }
  .pp2 {
    position: absolute;
    top: 2.8rem;
    left: 5.5rem;
  }
</style>

<script>
  import amstudioHeader from '../components/amstudioHeader.vue'
  import studentFooter from '../components/studentFooter.vue'

  export default {
    data() {
    return {
      courseName:'吉他入门',
      course:'吉他',
      teacherName:'齐老师',
      week:'下周三下午',
      time:'12:00-12:45',
      data:'2017年8月23号至2017年8月14号',
      count:'24'
    }
  },

    components:{
      amstudioHeader,
      studentFooter
    }
  }

</script>
