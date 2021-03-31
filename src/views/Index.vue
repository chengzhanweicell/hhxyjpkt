<template>
  <div>
    <div class="app">
      <img src="../../public/img/sy1.jpg" alt="">
      <router-view class="content"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
};
</script>
 <script>
(function (w) {
  let docEle = w.document.documentElement;
  let timer = null;
  // docEle.clientWidth  一屏的宽度

  function refresh() {
    let width = docEle.getBoundingClientRect().width; // 一屏的宽度
    if (width > 750) {
      width = 750;
    }
    let fs = width / 7.5;
    document.querySelector("html").style.fontSize = fs + "px";
  }
  refresh();

  w.addEventListener("resize", () => {
    // console.log("resize");  防抖
    timer && clearTimeout(timer);
    timer = setTimeout(refresh, 400);
  });
  w.addEventListener("pageshow", () => {
    // console.log("resize");  防抖
    timer && clearTimeout(timer);
    timer = setTimeout(refresh, 400);
  });
})(window);
</script>
<style scoped lang="less" >
body {
  background-color: #fbcffb;
  font-size: 0.2rem;
}
* {
  margin: 0;
  padding: 0;
}
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    height: 3rem;
    width:90%;
    margin: 0.28rem 0 0.28rem;
  }
  .content{
    width: 90%;
  }
}
</style>