<template>
  <div class="container">
    <div class="div1"></div>
    <div class="div2" >
      <div class="div3" :style="{ width:courseProcess}"></div>
    </div>
    <div class="div4"> {{ courseLevel }}</div>
    <div class="div5">获知</div>
    <span class="span1">{{ studiedCount }}/{{courseCount}}</span>
    <span class="span2">{{ courseName }}</span>
    <span class="span3">{{ courseEngName }}</span>
    <span class="span4">{{ teacher }}</span>
    <span class="span5">&#165;&nbsp;{{ coursePrice }}&nbsp;/&nbsp;学期&nbsp;Term起</span>
    <span class="span6">中&nbsp;|&nbsp;En&nbsp;|&nbsp;Kr</span>
  </div>
</template>

<style scoped>
  .container{
    width:100%;
    height: 4.0rem;
    position: relative;
    margin-bottom: 0.1rem;
    border: 0.01rem solid #969896;
  }
  .div1 {
    width:100%;
    height: 3.99rem;
    background-image: url("../assets/piano.jpg");
    background-size:100% 100%;
    filter:blur(2px) brightness(60%);
  }
  .div2 {
    position: absolute;
    width: 1.8rem;
    height: 0.4rem;
    background-color: #ffffff;
    top: 0.5rem;
    left: 0.5rem;
    border-radius: 0.05rem;
  }
  .div3 {
    width:50%;
    height: 0.4rem;
    background-color: #55a532;
    border-radius: 0.05rem;
  }
  .div4 {
    width: 1.1rem;
    height: 0.7rem;
    text-align: center;
    line-height: 0.3rem;
    font-size: 0.25rem;
    position: absolute;
    top: 2rem;
    right: 0.75rem;
    color: white;
  }
  .div5 {
    width: 2.0rem;
    height: 0.6rem;
    text-align: center;
    line-height: 0.6rem;
    font-size: 0.25rem;
    position: absolute;
    top: 3.0rem;
    right: 0.4rem;
    color: white;
    background-color: #666666;
    border: 0.01rem solid #ffffff;
    border-radius: 0.1rem;
  }
  .span1 {
    position:absolute;
    top: 0.5rem;
    left: 2.5rem;
    color: white;
    font-size: 0.3rem;
  }
  .span2 {
    position:absolute;
    top: 1.5rem;
    left: 0.5rem;
    color: white;
    font-size: 0.5rem;
  }
  .span3 {
    position:absolute;
    top: 2.2rem;
    left: 0.5rem;
    color: white;
    font-size: 0.2rem;
    font-weight: bold;
  }
  .span4 {
    position:absolute;
    top: 3.0rem;
    left: 0.5rem;
    color: white;
    font-size: 0.3rem;
  }
  .span5 {
    position:absolute;
    top: 2.2rem;
    left: 2.0rem;
    color: white;
    font-size: 0.25rem;
  }
  .span6 {
    position:absolute;
    top: 3.0rem;
    left: 2.2rem;
    color: white;
    font-size: 0.3rem;
  }
</style>

<script>
  export default {
    props:['studiedCount','courseCount','courseName','courseEngName',
    'teacher','coursePrice','courseLevel'],

    computed:{
      courseProcess () {
         return parseFloat(this.studiedCount/this.courseCount) * 1.8 + 'rem';
      }
    }

  }
</script>
