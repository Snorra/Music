<template>
  <div class="container">
    <studentHeader></studentHeader>
    <div class="div1">
      <p class="p1">订单确认信息</p>
      <p class="p2">课程名称  <p class="p22">{{ courseName }}</p></p>
      <hr>
      <p class="p3">教师姓名  <p class="p33">{{ teacherName }}</p></p>
      <hr>
      <p class="p4">课程时间  <p class="p44">{{ courseTime }}</p></p>
      <hr>
      <p class="p5">试课价格  <p class="p55">￥{{ tryCoursePrice }}</p></p>
      <hr>
    </div>
    <footer class="sf">
      <div class="sf_div1">
        <router-link to="/successPayment" class="sf_div1_rl">提交订单</router-link>
      </div>
    </footer>
  </div>

</template>

<style scoped>
  .div1 {
    height: 5rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
  .p1 {
    height:2rem;
    line-height: 2rem;
    font-size: 0.4rem;
  }
  .p2 {
    height:2rem;
    line-height: 2rem;
    font-size: 0.3rem;
    display: inline-block;
    margin-right: 1rem;
  }
  .p22 {
    height:2rem;
    line-height: 2rem;
    font-size: 0.3rem;
    color: #cccccc;
    display: inline-block;
  }
  .p3 {
    height:2rem;
    line-height: 2rem;
    font-size: 0.3rem;
    display: inline-block;
    margin-right: 1rem;
  }
  .p33 {
    height:2rem;
    line-height: 2rem;
    font-size: 0.3rem;
    color: #cccccc;
    display: inline-block;
  }
  .p4 {
    height:2rem;
    line-height: 2rem;
    font-size: 0.3rem;
    display: inline-block;
    margin-right: 1rem;
  }
  .p44 {
    height:2rem;
    line-height: 2rem;
    font-size: 0.3rem;
    color: #cccccc;
    display: inline-block;
  }
  .p5 {
      height:2rem;
      line-height: 2rem;
      font-size: 0.3rem;
      display: inline-block;
      margin-right: 1rem;
    }
  .p55 {
    height:2rem;
    line-height: 2rem;
    font-size: 0.3rem;
    color: #cccccc;
    display: inline-block;
  }
  .sf {
    width: 100%;
    height: 1.00rem;
    position: fixed;
    bottom: 0rem;
  }
  .sf_div1 {
    height:1.00rem;
  }
  .sf_div1_rl {
    width:100%;
    height: 1rem;
    position: fixed;
    line-height: 1.0rem;
    text-align: center;
    left: 0rem;
    display: block;
    color: black;
    font-size: 0.4rem;
    border: 0.1px solid #cccccc;
  }

</style>

<script>
  import studentFooter from '../components/studentFooter'
  import studentHeader from '../components/studentHeader'

  export default {
    data() {
    return {
        courseName:'小提琴',
        teacherName:'董文',
        courseTime:'周一',
        tryCoursePrice:'100'
    }
  },

    components:{
      studentFooter,
      studentHeader
    }
  }

</script>
