<template>
  <div>
    <div class="title">机器人观赏</div>
    <div class="images" v-viewer="{movable: false}">
      <div class="img">
        <img src="../../public/img/cgzs01.jpg">
      </div>
      <div class="img">
        <img src="../../public/img/cgzs02.jpg">
      </div>
      <div class="img">
        <img src="../../public/img/cgzs03.jpg">
      </div>
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
<style scoped lang="less">
.title {
  font-size: 0.2rem;
}
.images {
  div{
    display: flex;
    justify-content: center;
    margin: 20px ;
  }
 
}
</style>