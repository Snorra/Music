<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="str in listImg" :style="{ backgroundSize:'100% 100%', backgroundImage: 'url(' + str.url + ')'}"></div>
    </div>
    <div class="swiper-pagination swiper-pagination-white"></div>
  </div>
</template>

<script>
  import Swiper from 'swiper';
  import '../assets/swiper.min.css';
  export default {
    props: ['listImg'],
    mounted() {
    console.log('mounted', this)
    var swiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      loop: true,
      speed: 600,
      autoplay: 4000,
      onTouchEnd: function() {
        swiper.startAutoplay()
       }
     });
   }
  }
</script>

<style scoped>
  .swiper-container {
    width: 100%;
    height: 5rem;
  .swiper-wrapper {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
  img {
    width: 100%;
    height: 100%;
  }
  }
  .swiper-pagination-bullet {
    width:0.833rem;
    height: 0.833rem;
    display: inline-block;
    background: #7c5e53;
   }
  }
</style>
