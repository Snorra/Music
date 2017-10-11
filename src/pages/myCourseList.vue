<template>
  <div class="container">
    <studentHeader></studentHeader>
    <courseList
      v-for="item in items"
      :courseName="item.courseName"
      :level="item.level"
      :week="item.week"
      :coursePrice="item.coursePrice"
      :days="item.days"
      :teacherName="item.teacherName"></courseList>
    <studentFooter></studentFooter>
  </div>

</template>

<script>
  import studentHeader from '../components/studentHeader'
  import studentFooter from '../components/studentFooter.vue'
  import courseList from '../components/list.vue'

  export default {
    data() {
      return {
        items:[
          {courseName:'小提琴',
          level:'A',
          week:'星期一',
          coursePrice:'3200',
          days:'3',
          teacherName:'董文'
          },
          {courseName:'钢琴',
            level:'A',
            week:'星期二',
            coursePrice:'3200',
            days:'3',
            teacherName:'韩风'
          },
          {courseName:'吉他',
            level:'A',
            week:'星期一',
            coursePrice:'3200',
            days:'3',
            teacherName:'董文'
          }
        ]
      }
  },

    components:{
      studentHeader,
      studentFooter,
      courseList
    }
  }

</script>

<style scoped>

</style>
