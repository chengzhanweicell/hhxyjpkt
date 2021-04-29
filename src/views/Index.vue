<template>
  <div>
    <div class="app">
      <!-- <img src="../../public/img/sy1.jpg" alt=""> -->
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item >
          <img src="../../public/img/logo.png" alt="">
        </el-carousel-item>
        <el-carousel-item >
          <img src="../../public/img/xyfg01.jpg" alt="">
        </el-carousel-item>
        <el-carousel-item >
          <img src="../../public/img/xyfg02.jpg" alt="">
        </el-carousel-item>
        <el-carousel-item >
          <img src="../../public/img/xyfg03.jpg" alt="">
        </el-carousel-item>
      </el-carousel>
      <router-view class="content"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
    };
  },
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

  .el-carousel--card {
    width: 90%;
    margin: 0.28rem;
    img {
      height: 100%;
      width: 100%;
    }
  }
 

  .content {
    width: 90%;
  }
}
</style>