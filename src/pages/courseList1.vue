<template>
  <div class="container">
    <!-- 由于html不区分大小写，所以js中驼峰命名方式在html中要改成用短横线连接的形式 -->
    <studentHeader></studentHeader>
    <Carousel></Carousel>
    <div class="content">
      <ul class="cont_ul">
        <list
          v-for="item in items"
          :price="item.price"
          :title="item.title">
        </list>
      </ul>
    </div>
  </div>
</template>
<script>
  import studentHeader from '../components/studentHeader'
  import Carousel from '../components/Carousel'
  export default {
    components:{
      studentHeader,
      Carousel
    }
  }
</script>
