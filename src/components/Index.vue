<template>
  <div>
    <div class="title">首页</div>
    <h2>课程简介</h2>
    <h3>一、课程性质、目的和任务:</h3>
    <p>
      机器人仿真与编程是机械设计制造及其自动化专业各专业方向的一门主要专业技术课，是一门多学科的综合性技术，它涉及自动控制、计算机、传感器、人工智能、电子技术和机械工程等多学科的内容。其目的是使学生了解工业机器人的基本结构，了解和掌握工业机器人的基本知识，使学生对机器人及其控制系统有一个完整的理解。培养学生在机器人技术方面分析与解决问题的能力，培养学生在机器人技术方面具有一定的动手能力，为毕业后从事专业工作打下必要的机器人技术基础。
    </p>
    <hr />
    <h3>二、教学基本要求:</h3>
    <p>本课程以机器人为研究对象，以工业机器人为重点。学完本课程应达到以下基本要求：<br>
      1．了解机器人的由来与发展、组成与技术参数，掌握机器人分类与应用，对各类机器人有较系统地完整认识。<br>
      2．了解机器人运动学、动力学的基本概念，能进行简单机器人的位姿分析和运动分析。<br>
      3．了解机器人本体基本结构，包括机身及臂部结构、腕部及手部结构、传动及行走机构等。<br>
      4．了解机器人轨迹规划和关节插补的基本概念和特点。<br>
      5．了解机器人控制系统的构成、编程语言与编程特点。<br>
      6．了解工业机器人工作站及生产线的基本组成和特点。<br>
      7．对操纵型机器人、智能机器人有一般的了解。<br>
    </p>
    <hr />
    <div>
      <h2>三、工业机器人介绍：</h2><a title="点击跳转到工业机器人百度百科" href="https://baike.baidu.com/item/%E5%B7%A5%E4%B8%9A%E6%9C%BA%E5%99%A8%E4%BA%BA/1290396?fr=aladdin"><i class="iconfont icon-chaolianjie"></i></a>
    </div>
    <div class="introduce">
      <div class="left">
        <p>工业机器人是广泛用于工业领域的多关节机械手或多自由度的机器装置，具有一定的自动性，可依靠自身的动力能源和控制能力实现各种工业加工制造功能。工业机器人被广泛应用于电子、物流、化工等各个工业领域之中。</p>
        <p>一般来说，工业机器人由三大部分六个子系统组成。
          三大部分是机械部分、传感部分和控制部分。
          六个子系统可分为机械结构系统、驱动系统、感知系统、机器人-环境交互系统、人机交互系统和控制系统。</p>
        <p>相比于传统的工业设备，工业机器人有众多的优势，比如机器人具有易用性、智能化水平高、生产效率及安全性高、易于管理且经济效益显著等特点，使得它们可以在高危环境下进行作业。</p>
      </div>
      <div class="right">
        <div class="images" v-viewer="{movable: false}">
          <img src="../../public/img/sy1.jpg" alt="">
        </div>
        <button type="button" @click="show" style="visibility:hidden"></button>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
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

div {
  h2 {
    font-size: 0.18rem;
    font-weight: bolder;
    margin: 0.15rem 0 0.15rem 0.24rem;
    line-height: 0.28rem;
    display: inline-block;
  }
  a {
    text-decoration: none;
    color: #000;
    font-size: 10px;
  }
}
h3 {
  font-size: 0.16rem;
  font-weight: bolder;
  margin: 0.1rem 0.24rem;
}
p {
  font-size: 0.14rem;
  margin-bottom: 0.24rem;
  line-height: 0.24rem;
  align-content: center;
}
hr {
  width: 100%;
  margin: 0 auto 0.24rem;
}
.introduce {
  display: flex;
  .left {
    width: 75%;
    margin-right: 2.5%;
  }
  .right {
    width: 20%;
    img {
      width: 100%;
    }
  }
}
</style>