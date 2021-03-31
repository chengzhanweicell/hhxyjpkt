<template>
  <div class="zs">
    <div class="title">成果展示</div>
    <div class="images" v-viewer="{movable: false}">
      <div class="tu">
        <img src="../../public/img/cgzs01.jpg">
        <img src="../../public/img/cgzs02.jpg">
        <img src="../../public/img/cgzs03.jpg">
      </div>
      <div class="tu">
        <img src="../../public/img/cgzs01.jpg">
        <img src="../../public/img/cgzs02.jpg">
        <img src="../../public/img/cgzs03.jpg">
      </div>
      <div class="tu">
        <img src="../../public/img/cgzs01.jpg">
        <img src="../../public/img/cgzs02.jpg">
        <img src="../../public/img/cgzs03.jpg">
      </div>
      <div class="tu">
        <img src="../../public/img/cgzs01.jpg">
        <img src="../../public/img/cgzs02.jpg">
        <img src="../../public/img/cgzs03.jpg">
      </div>
    </div>
    <button type="button" @click="show" style="visibility:hidden"></button>

  </div>
</template>

<script>

export default {
  name: "Cgzs",
 methods: {
    show() {
      const viewer = this.$el.querySelector(".images").$viewer;
      viewer.show();
    },
  },
};
</script>
<style scoped lang="less">
.zs {
  display: flex;
  flex-direction: column;
  .tu {
    display: flex;
    justify-content: space-between;
    img {
      margin: 0.1rem;
      width: 30%;
      height: auto;
    }
  }
  .title {
    font-size: 0.2rem;
  }
}
</style>