<template>
  <div class="container">
    <!-- 由于html不区分大小写，所以js中驼峰命名方式在html中要改成用短横线连接的形式 -->
    <studentHeader></studentHeader>
    <div>
      <Carousel :listImg="listImg"></Carousel>
    </div>

    <div class="div1">
      <ul>
        <li><router-link class='rl' to="subjectClassification">课程</router-link></li>
        <!--<li><router-link class='rl' to="subjectClassification">学科</router-link></li>-->
        <li><router-link class='rl' to="#">活动</router-link></li>
        <li><router-link class='rl' to="academicPage">学术</router-link></li>
      </ul>
    </div>

    <div class="div2">
      <courseList :studiedCount="tudo.studiedCount1"
                  :courseCount="tudo.courseCount1"
                  :courseName='tudo.courseName1'
                  :courseEngName="tudo.courseEngName1"
                  :teacher="tudo.teacher1"
                  :coursePrice="tudo.coursePrice1"
                  :courseLevel="tudo.courseLevel1"
                  class='cl' v-for="tudo in tudos"></courseList>
    </div>
    <studentFooter></studentFooter>

  </div>
</template>
<script>

</script>

<style scoped>
  .title {
    /*height:1.0rem;
    border: 0.02rem solid #cccccc;*/
  }
  .tabs {
    /*margin-left: 0.5rem;*/
    height: 5.0rem;
  }
  /*.div1 {
    height: 1.2rem;
  }*/
  .container {
    margin-bottom: 1rem;
  }
  .div1 {
    height: 1rem;
  }
  .div1 li {
    float: left;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    border: solid 0.02rem #cccccc;
    font-size: 0.3rem;
    width: 33.3333%;
  }
  .rl {
    color: #000000;
  }
</style>

<script>
  import studentHeader from '../components/studentHeader'
  import Carousel from '../components/Carousel'
  import studentFooter from '../components/studentFooter.vue'
  import { TabContainer, TabContainerItem } from 'mint-ui';
  import a from '../assets/xtq.jpg'
  import b from '../assets/piano.jpg'
  import c from '../assets/xtq.jpg'
  import d from '../assets/piano.jpg'
  import e from '../assets/xtq.jpg'
  import courseList from '../components/courseList.vue'

  export default {
    data() {
    return {
      items: [
        {message:"小提琴"},
        {message:"钢琴"},
        {message:"吉他"}
      ],
      tudos:[
        {
          studiedCount1:'5',
          courseCount1:'10',
          courseName1:'钢琴',
          courseEngName1:'Piano',
          teacher1:'韩老师',
          coursePrice1:'3900',
          courseLevel1:'入门.进阶中阶.高阶'
        },
        {
          studiedCount1:'8',
          courseCount1:'9',
          courseName1:'竖琴',
          courseEngName1:'Harp',
          teacher1:'权老师',
          coursePrice1:'2800',
          courseLevel1:'入门.进阶中阶.高阶'
        },
        {
          studiedCount1:'5',
          courseCount1:'25',
          courseName1:'爵士鼓团体课',
          courseEngName1:'Drum',
          teacher1:'任老师',
          coursePrice1:'1200',
          courseLevel1:'入门.进阶'
        }
      ],

      listImg: [{
        url: a
      }, {
        url: b
      }, {
        url: c
      }, {
        url: d
      }, {
        url: e
      }]
    }
  },
  components: {
    studentHeader,
      Carousel,
      studentFooter,
      TabContainer,
      TabContainerItem,
      courseList
  }
  };
</script>
