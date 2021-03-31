<template>
  <div class="xz">
    <div class="center">课件下载</div>
    <div class="content">
      <div class="left">
        <a href="./1.ppt" title="点击下载" download="课件1.ppt">课件1下载<i class="iconfont icon-chaolianjie"></i></a><br>
        <a href="./2.ppt" title="点击下载" download="课件2.ppt">课件2下载<i class="iconfont icon-chaolianjie"></i></a><br>
        <a href="./3.ppt" title="点击下载" download="课件3.ppt">课件3下载<i class="iconfont icon-chaolianjie"></i></a><br>
        <a href="./4.ppt" title="点击下载" download="课件4.ppt">课件4下载<i class="iconfont icon-chaolianjie"></i></a><br>
        <a href="./5.ppt" title="点击下载" download="课件5.ppt">课件5下载<i class="iconfont icon-chaolianjie"></i></a><br>
      </div>
      <div class="right">
        <a href="./6.ppt" title="点击下载" download="课件6.ppt">课件6下载<i class="iconfont icon-chaolianjie"></i></a><br>
        <a href="./7.ppt" title="点击下载" download="课件7.ppt">课件7下载<i class="iconfont icon-chaolianjie"></i></a><br>
        <a href="./8.ppt" title="点击下载" download="课件8.ppt">课件8下载<i class="iconfont icon-chaolianjie"></i></a><br>
        <a href="./9.ppt" title="点击下载" download="课件9.ppt">课件9下载<i class="iconfont icon-chaolianjie"></i></a><br>
      </div>
    </div>
  </div>

</template>

<script>
export default {methods: {
    show() {
      const viewer = this.$el.querySelector(".images").$viewer;
      viewer.show();
    },
  },};
</script>
<style lang="less" >
.xz {
  display: flex;
  flex-direction: column;
  align-items: center;
  .center {
    text-align: center;
    font-size: 0.2rem;
    font-weight:bolder;
  }
  .content {
    display: flex;
    justify-content: space-around;
    width: 5rem;
    .left {
      width: 45%;
      text-align: center;
    }
    .right {
      text-align: center;
      width: 45%;
    }
  }
  a {
    text-decoration: none;
    color: #000;

    i {
      margin-left: 0.2rem;
    }
  }
}
</style>