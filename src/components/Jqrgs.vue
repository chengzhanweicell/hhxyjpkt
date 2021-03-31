<template>
  <div>
    <div class="title">机器人观赏</div>
    <div class="images" v-viewer="{movable: false}">
      <img src="../../public/img/cgzs01.jpg">
      <img src="../../public/img/cgzs02.jpg">
      <img src="../../public/img/cgzs03.jpg">
    </div>
    <button type="button" @click="show" style="visibility:hidden"></button>

  </div>
</template>

<script>
export default {
  methods: {
    show() {
      const viewer = this.$el.querySelector(".images").$viewer;
      viewer.show();
    },
  },
};
</script>
<style lang="less">
.title {
  font-size: 0.2rem;
}
img {
  padding: 0.1rem;
}
</style>