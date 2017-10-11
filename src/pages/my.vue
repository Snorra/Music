<template>
  <div class="container">
    <div class="div1">
      <img src="../assets/zj.jpg" class="img">
      <p class="p1">{{ studentName }}</p>
      <p class="p2">已在AMSTUDIO {{ day }} 天</p>
      <i class="iconfont i1">&#xe609;</i>
      <i class="iconfont i2">&#xe6cf;</i>
      <i class="iconfont i3">&#xe600;</i>
    </div>
    <div class="div2">
      <div class="div21">
        <p class="p3">{{ courseCount }}</p>
        <p class="p33">我的课程</p>
      </div>
      <div class="div22">
        <p class="p4">{{ musicCount }}</p>
        <p class="p44">音乐会</p>
      </div>
    </div>
    <div class="div3">
      <i class="iconfont i31">&#xe61c;</i>
      <p class="p5">开卡续费</p>
      <i class="iconfont i32">&#xe602;</i>
      <p class="p6">随堂笔记</p>
      <i class="iconfont i33">&#xe650;</i>
      <p class="p7">我的照片</p>
      <i class="iconfont i34">&#xe667;</i>
      <p class="p8">二维码</p>
    </div>
    <div class="div4">
      <li class='li1' v-for="item in items">
        <i class="iconfont i4" v-html="item.code">{{ item.code }}</i>
        <p class="p9">{{ item.text }}</p>
      </li>
    </div>
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
  .iconfont {
    font-family:"iconfont" !important;
    font-size:0.5rem;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }
  .container {
    position: relative;
  }
  .img {
    position:absolute;
    right:35%;
    top:1.0rem;
    height:2.0rem;
    width:2.0rem;
    border:0.02rem solid #007aff;
    border-radius: 50%;
  }
  .p1 {
    position:absolute;
    top: 3.0rem;
    left: 3.3rem;
    font-size: 0.4rem;
    color: #333333;
  }
  .p2 {
    position: absolute;
    top:3.6rem;
    left:2.3rem;
    font-size: 0.3rem;
    color: #333333;
  }
  .i1 {
    position:absolute;
    top:4.2rem;
    left:1.0rem;
    font-size: 0.6rem;
    color: #333333;
  }
  .i2 {
    position:absolute;
    top:4.1rem;
    left:3.0rem;
    font-size: 0.7rem;
    color: #333333;
  }
  .i3 {
    position:absolute;
    top:3.9rem;
    left: 5.0rem;
    font-size: 1.0rem;
    color: #333333;
  }
  .div2 {
    height: 1.8rem;
    width: 100%;
    border:0.02rem solid #cccccc;
    position: absolute;
    top: 5.5rem;
  }
  .div21 {
    height: 1.8rem;
    width: 50%;
    border-right:0.02rem solid #cccccc;
    position: absolute;
    top: 0rem;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    text-align: center;
    font-size: 1rem;
    color: #333333;
    line-height: 1.0rem;
  }
  .div22 {
    height: 1.8rem;
    width: 50%;
    /*border:0.02rem solid #cccccc;*/
    position: absolute;
    top: 0rem;
    left: 50%;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    text-align: center;
    font-size: 1rem;
    color:#333333;
    line-height: 1.0rem;
  }
  .p33 {
    font-size: 0.3rem;
    color: #000000;
    position: absolute;
    top: 0.8rem;
    left:33%;
  }
  .p44 {
    font-size: 0.3rem;
    color:#000000;
    position: absolute;
    top: 0.8rem;
    left: 37%;
  }
  .p5 {
    color: #000000;
    position: absolute;
    top: 1.3rem;
    left: 0.3rem;
    font-size: 0.3rem;
  }
  .p6 {
    color: #000000;
    position: absolute;
    top: 1.3rem;
    left: 2.3rem;
    font-size: 0.3rem;
  }
  .p7 {
    color: #000000;
    position: absolute;
    top: 1.3rem;
    left: 4.3rem;
    font-size: 0.3rem;
  }
  .p8 {
    color: #000000;
    position: absolute;
    top: 1.3rem;
    left: 6.3rem;
    font-size: 0.3rem;
  }
  .div3 {
    height: 2.0rem;
    width: 100%;
    border:0.02rem solid #cccccc;
    position: absolute;
    top: 7.3rem;
  }
  .div4 {
    position: absolute;
    top: 9.3rem;
    width: 100%;
    color: #333333;
  }
  .li1 {
    height: 1.0rem;
    width: 100%;
    border: 0.02rem solid #cccccc;
    border-radius: 5%;
  }
  .i31 {
    font-size: 0.6rem;
    color: #333333;
    position: absolute;
    top: 0.3rem;
    left: 0.5rem;
  }
  .i32 {
    font-size: 0.6rem;
    color: #333333;
    position: absolute;
    top: 0.3rem;
    left: 2.5rem;
  }
  .i33 {
    font-size: 0.6rem;
    color: #333333;
    position: absolute;
    top: 0.3rem;
    left: 4.5rem;
  }
  .i34 {
    font-size: 0.6rem;
    color: #333333;
    position: absolute;
    top: 0.3rem;
    left: 6.5rem;
  }
  .i4 {
    font-size: 0.6rem;
    padding: 0.5rem;
  }
  .p9 {
    display: inline-block;
    font-size: 0.2rem;
    line-height: 1.0rem;
  }

</style>

<script>
  export default {
    data() {
      return {
        day:'782',
        studentName:'张宇泽',
        courseCount:'2',
        musicCount:'4',
        code:'&#xe6ce;',
        items:[
          {code:'&#xe6ce;',text:'邀请好友加入得一个月会员费，无上限'},
          {code:'&#xe601;',text:'我的订单'},
          {code:'&#xe614;',text:'优惠券'},
          {code:'&#xe61b;',text:'我想导航'},
          {code:'&#xe6ce;',text:'觉对商城'}
        ]
      }
    }
  }
</script>
