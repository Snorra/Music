<template>
  <footer class="sf">
    <div class="sf_div1">
      <router-link to="/myCourseList" class="sf_div1_rl">约课</router-link>
      <router-link to="/myCourseList" class="sf_div1_r2">我的课程</router-link>
    </div>
  </footer>
</template>

<style scoped>
  .sf {
    width: 100%;
    height: 1.00rem;
    position: fixed;
    bottom: 0rem;
  }
  .sf_div1 {
    height:1.00rem;
    position: fixed;
  }
  .sf_div1_rl {
    width:50%;
    height: 1rem;
    position: fixed;
    line-height: 1.0rem;
    text-align: center;
    left: 0rem;
    display: block;
    color: black;
    background-color: #ffffff;
    font-size: 0.4rem;
    border: 0.1px solid #cccccc;
  }
  .sf_div1_r2 {
    width:50%;
    height: 1rem;
    position:fixed;
    line-height: 1.0rem;
    text-align: center;
    right: 0.00em;
    display: block;
    color: black;
    background-color: #ffffff;
    font-size: 0.4rem;
    border: 0.1px solid #cccccc;
  }

</style>
