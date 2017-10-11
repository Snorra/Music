<template>
  <div class="container">
    <TMHeader></TMHeader>
    <div class="div1">
      <img class="img1" src="../assets/xtq.jpg">
    </div>

    <div class="div2">
      <span class="span1">{{ courseName }}</span>
      <span class="span2">{{ engcourseName }}</span>
      <span class="span3">课程介绍</span>
      <p class="p1">{{ courseIntro }}</p>
      <hr class="hr">
      <span class="span4">遇见教师:</span>
      <span class="span5">点击教师头像查看教师资料</span>
      <ul>
        <router-link to="/subjectClassification">
          <li class="li" v-for="n in 6">
            <img class="img2" src="../assets/zj.jpg">
            <span class="span6">{{ teacherName }}</span>
          </li>
        </router-link>
      </ul>
    </div>
    <!--<div class="div2">
      <p class="p1">{{ courseName }}</p>
      <p class="p2">{{ engcourseName }}</p>
      <span class="span1">课程介绍</span>
      <p class="p3">{{ courseIntro }}</p>
      <hr class="hr1">
      <span class="span2">遇见教师：</span>
      <span class="span3">点击教师头像查看教师资料</span>
    </div>
    <div class="div3" v-for="n in 6">
      <img class="img2" src="../assets/zj.jpg">
      <span class="span4">{{ teacherName }}</span>
    </div>-->
    <studentFooter></studentFooter>
  </div>
</template>

<style scoped>
  .container {
    margin-bottom: 1rem;
    height: auto;
  }
  .div1 {
    height: 4.5rem;
    width: 100%;
    margin-top: 0.5rem;
  }
  .img1 {
    height: 4.5rem;
    width: 100%;
    border-radius: 5px;
    box-shadow: 0px 0px 5px #000;
  }
  .div2 {
    height: 10rem;
    width: 90%;
    position: relative;
    margin-left: 5%;
    margin-right: 5%;
    margin-bottom: 2rem;
  }
  .span1 {
    position: absolute;
    top: 0.35rem;
    left: 0rem;
    font-size: 0.3rem;
    color: #000000;
  }
  .span2 {
    position: absolute;
    top: 0.35rem;
    left: 0.8rem;
    font-size: 0.3rem;
    color: #000000;
  }
  .span3 {
    position: absolute;
    top: 1.5rem;
    font-size: 0.3rem;
    color: #000000;
  }
  .span4 {
    position: absolute;
    top: 5.0rem;
    font-size: 0.3rem;
    color: #000000;
  }
  .span5 {
    position: absolute;
    top: 5.3rem;
    right: 0rem;
    font-size: 0.3rem;
    color: #000000;
  }
  .span6 {
    width: 100%;
    position: absolute;
    bottom: -0.2rem;
    text-align: center;
    font-size: 0.3rem;
    color: #000000;
  }
  .p1 {
    position: absolute;
    top: 2rem;
    font-size: 0.2rem;
    color: #404040;
    float: left;
    margin-bottom: 0.5rem;
  }
  .hr {
    width: 100%;
    position: absolute;
    top: 4rem;
    background-color: #000000;
  }
  ul {
    position:absolute;
    top: 5.5rem;
  }
  .li {
    width: 2rem;
    height: 2rem;
    position: relative;
    margin-top: 0.5rem;
    float: left;
  }
  .img2 {
    position:absolute;
    left:0.3rem;
    top:0.1rem;
    height:1.5rem;
    width:1.5rem;
    border:0.02rem solid #007aff;
    border-radius: 50%;
  }

  /*.div2 {
    position: relative;
    margin-left: 0.5rem;
    margin-right:0.5rem;
    width: 100%;
    height: 4.5rem;
  }
  .p1 {
    position: absolute;
    font-size: 0.3rem;
    color: #000;
    top:0.3rem;
  }
  .p2 {
    position: absolute;
    font-size: 0.3rem;
    color: #000;
    top:0.3rem;
    left: 0.8rem;
  }
  .span1 {
    position: absolute;
    font-size: 0.3rem;
    color: #000;
    top:1.6rem;
  }
  .p3 {
    position: absolute;
    top:2.1rem;
  }
  .hr1 {
    position: absolute;
    margin-top:3.8rem;
    width: 100%;
  }
  .span2 {
    position: absolute;
    font-size: 0.3rem;
    color: #000;
    top:4.0rem;
  }
  .span3 {
    position: absolute;
    font-size: 0.0001rem;
    top:4.2rem;
    right: 0rem;
  }
  .div3 {
    position: relative;
    height: 2.1rem;
    width: 33%;
    margin-bottom: 1rem;
    display: block;
  }
  .img2 {
    position:absolute;
    left:0.1rem;
    top:0.1rem;
    height:1.5rem;
    width:1.5rem;
    border:0.02rem solid #007aff;
    border-radius: 50%;
  }
  .span4 {
    position: absolute;
    left: 0.3rem;
    top: 1.7rem;
    font-size: 0.3rem;
    color: #000;
  }*/
</style>

<script>
  import TMHeader from  '../components/TMHeader.vue'
  import studentFooter from '../components/studentFooter.vue'

  export default {
    data() {
    return {
      courseName:'钢琴',
      engcourseName:'Piano',
      courseIntro:'钢琴启蒙课程到精通， ' +
      '课程教材可以自己选择选择范围为巴斯蒂安，小汤姆森，' +
      '或者Fred出版社，以及Suzuki Piano都可以。 ' +
      '我们以觉对音悦的钢琴教学系统来进行每个课程中间曲目或许稍有改变。',
      teacherName:'钟辉杰'
    }
  },

    components:{
      TMHeader,
      studentFooter
    }
  }
</script>
