<template>
  <div>
    <TMHeader></TMHeader>
    <img src="../assets/jd.jpg" class="img">
  </div>
</template>

<style scoped>
  .img {
    width: 100%;
    height: 4rem;
  }
</style>

<script>
  import TMHeader from  '../components/TMHeader.vue'

  export default {

  components:{
    TMHeader
  }
  }
</script>
