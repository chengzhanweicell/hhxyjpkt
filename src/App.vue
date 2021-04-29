<template>
  <div class="app">
    <link rel="stylesheet" href="//at.alicdn.com/t/font_2455125_2dv7lozvgv7.css">
    <div class="title">
      <div class="tou">
        <h1>机器人仿真与编程</h1>
        <h2>Industrial Robot</h2>
        <span>黄淮学院精品课程</span>
      </div>
    </div>
    <div class="daohanglan">
      <span class="sy">
        <router-link to="/index">首页 </router-link>
      </span>
      <span class="jxsp">
        <router-link to="/jxsp">教学视频 </router-link>
      </span>
      <span class="ssjj">
        <router-link to="/jsjj">教师简介 </router-link>
      </span>
      <span class="cgzs">
        <router-link to="/cgzs">成果展示 </router-link>
      </span>
      <span class="jqrgs">
        <router-link to="/jqrgs">机器人观赏 </router-link>
      </span>
      <span class="kjxz">
        <router-link to="/kjxz">课件下载 </router-link>
      </span>
      <span class="jpkcsbb">
        <router-link to="/jpkcsbb">精品课程申报表</router-link>
      </span>
    </div>
    <router-view></router-view>
    <div class="footer">
      <img src="../public/img/foot1.jpg" alt="">
      <h3>欢迎来到黄淮学院精品课程</h3>
      <img src="../public/img/foot.jpg" alt="">

    </div>
  </div>

</template>

<script>
export default {
  name: "App",
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
// 使用less需要下载less-loader
<style  scoped lang="less" >
* {
  margin: 0;
  padding: 0;
}

.app {
  width: 80%;
  margin: 0.5rem auto 0;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  .title {
    margin: 0 auto;
    .tou {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0.5rem auto 0;
      align-items: center;
      h1 {
        font-size: 0.3rem;
      }
      h2 {
        margin: 0.1rem auto;
      }
      span {
        margin-left: 0.6rem;
        font-size: 0.18rem;
      }
    }
  }
  .daohanglan {
    margin: 0.5rem auto 0;
    width: 90%;
    padding: 0.2rem 0;
    border-top: 1px solid hsl(0, 3%, 67%);
    border-bottom: 1px solid hsl(0, 3%, 67%);
    text-align: center;
    display: flex;
    span {
      justify-content: space-around;
      align-items: center;
      flex: 1;
      a {
        text-decoration: none;
        color: #222121c5;
        font-size: 0.18rem;
      }
      .router-link-active {
        text-decoration: none;
        font-weight: bolder;
      }
    }
  }
  .footer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 100px;
    align-items: center;
    
    img {
      width: 20%;
      height: 100%;
    }
  }
}
</style>

