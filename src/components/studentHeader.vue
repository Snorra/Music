<!-- DetailHeader.vue -->
<template>
  <header class="header">
    <div class="header_inner flexWrap">
      <div
        id="header_btn_nav"
        class="header_btn header_btn_back"
        @click="goBack"
        >&lt;返回</div>
      <div class="header_cont flex">student</div>
      <div class="header_btn header_btn_cart"></div>
      <p class="p1">…</p>
    </div>
  </header>
</template>

<style scoped>
  .flexWrap {
    display: -webkit-flex;
    display: flex;
  }
  .flex {
    flex: 1;
  }
  .header {
    height: 1rem;
    position: relative;
  }
  .p1 {
    position: absolute;
    top: 0.2rem;
    right:0.3rem;
    font-size: 0.5rem;
  }
  .header_inner {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
    max-width: 640px;
    height: 1rem;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 0 0.24rem;
    border-bottom: 0.02rem solid #80ccd6;
    background-color: #F5F5F5;
  }
  .header_btn {
    width: 2.0rem;
    height: 100%;
    background-repeat: no-repeat;
  }
  .header_btn_back {
    line-height: 1rem;
    font-size: 0.4rem;
  }
  .header_cont {
    text-align: center;
    padding: 0 0.4rem;
    line-height: 1rem;
    font-size: 0.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .header_btn:active {
    opacity: 0.7;
  }
</style>
<script>
  export default {
    methods: {
      goBack: function(){
    window.history.back();
  }
  }
  }
</script>
