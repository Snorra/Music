<template>
  <li class="li">
    <router-link to="/myCourseDetail">
      <div class="div1">
        <img src="../assets/zj.jpg" class="img">
        <p class="p1">{{ courseName }}</p>
        <p class="p2">{{ level }}级</p>
        <p class="p3">{{ week }}</p>
        <p class="p4">10:00</p>
        <p class="p5">￥{{ coursePrice }}</p>
        <p class="p6">课程进行天数 {{ days }}</p>
        <p class="p7">{{ teacherName }}老师</p>
      </div>
    </router-link>
  </li>
</template>

<style scoped>
  .li {
    position:relative;
    height: 5rem;
    border: 0.04rem solid #cccccc;
    border-top:solid #cccccc;
    border-bottom:0.1rem solid #cccccc;
  }
  .div1 {
    height: 5rem;
  }
  .img {
    position:absolute;
    right:0.5rem;
    top:0.9rem;
    height:2.0rem;
    width:2.0rem;
    border:0.02rem solid #007aff;
    border-radius: 50%;
  }
  .p1 {
    font-size: 0.4rem;
    position: absolute;
    top:0.5rem;
    left: 0.5rem;
    color: #2c3e50;
  }
  .p2 {
    height: 0.5rem;
    font-size: 0.2rem;
    position: absolute;
    top:1.2rem;
    left: 0.6rem;
    color: #cccccc;
  }
  .p3 {
    font-size: 0.2rem;
    position: absolute;
    top:2.0rem;
    left: 0.6rem;
    color: #2c3e50;
    display: inline-block;
  }
  .p4 {
    font-size: 0.2rem;
    position: absolute;
    top:2.0rem;
    left: 1.5rem;
    color: #2c3e50;
    display: inline-block;
  }
  .p5 {
    font-size: 0.2rem;
    position: absolute;
    top:3.0rem;
    left: 0.6rem;
    color: #2c3e50;
    display: inline-block;
  }
  .p6 {
    font-size: 0.2rem;
    position: absolute;
    top:4.0rem;
    left: 0.6rem;
    color: #cccccc;
    display: inline-block;
  }
  .p7 {
    font-size: 0.2rem;
    position: absolute;
    top:3.0rem;
    right: 1.0rem;
    color: #000000;
    display: inline-block;
  }
</style>

<script>
  export default {
    props:[
      'courseName',
      'level',
      'week',
      'coursePrice',
      'days',
      'teacherName'
    ]
  }
</script>
