<template>
  <div>
    <div class="title">教师简介</div>
    <div class="liu">
      <div class="text">
        <h2>刘新玉</h2>
        <p>工学博士，副教授，主要从事智能脑机与人机交互方面的研究和教学。</p>
        <p>曾主讲《工业机器人编程》、《电力电子技术》、《电路分析与电工技术》等课程。</p>
        <p>
          毕业于郑州大学，主编河南省“十四五”规划教材1部，发表学术论文40余篇，其中SCI/EI检索期刊论文20篇，申请国家发明专利5项，计算机软件著作权1项；主持国家自然科学基金青年基金1项，河南省科技攻关计划项目1项，河南省高等学校重点科研项目1项。先后获得河南省挑战杯优秀指导教师、河南省互联网+大赛优秀指导教师、黄淮学院科研工作先进个人、黄淮学院优秀共产党员等荣誉称号。郑州大学、中原工学院硕士生导师，黄淮学院学术委员会科学研究专门委员会委员、伦理审查委员会委员，河南省智能人机交互设备工程研究中心负责人、河南省脑科学与脑机接口技术重点实验室客座专家、驻马店市脑机智能与机器人重点实验室主任。
        </p>
      </div>
      <div class="ry">
        <h2>荣誉证书</h2>
        <div class="images" v-viewer="{movable: false}">
          <img src="../../public/img/jsjj1.jpg" alt="">
          <img src="../../public/img/jsjj2.jpg" alt="">
        </div>
        <button type="button" @click="show" style="visibility:hidden"></button>

      </div>
    </div>
    <div class="bolang">
      <i>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</i>
    </div>
    <div>
      <h2>谢行</h2>
      <p>工学博士，讲师，主要从事机器人运动控制技术方面的研究。</p>
      <p>曾主讲《工业机器人技术基础》、《现代传感与检测技术》等课程。</p>
      <p>毕业于哈尔滨工程大学，机器人操作与运维工程师，驻马店市机器人装备与技术应用重点实验室负责人，河南省智能人机交互设备工程研究中心技术骨干，OMAE2019国际会议审稿人，担任国际期刊Ocean Engineering, Joural of Ships and Offshore
        Structures审稿人，主要从事结构物运动建模理论分析，流体与结构相互作用，水下机器人运动特性与动力分析相关研究。在国内外核心期刊发表论文14篇，其中SCI/EI检索期刊论文11篇。先后参与国家自然科学基金项目2项，工信部高技术科研项目2项，主持在研河南省科技攻关计划1项，参与河南省教育厅新工科建设项目1项。</p>
    </div>

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
  font-size: 20px;
}
.liu {
  display: flex;
  justify-content: space-between;
  .text {
    width: 60%;
  }
  .ry {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 37%;
    border: .05rem double skyblue;
    h2 {
      color: rgb(245, 86, 86);
    }
    .images {
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 80%;
        height: 1.5rem;
        margin: 0.1rem 0;
      }
    }
  }
}
.bolang {
  width: 100%;
  overflow: hidden;
}
h2 {
  font-size: 18px;
  font-weight: bolder;
  margin: 24px;
  line-height: 28px;
}
p {
  font-size: 14px;
  margin-bottom: 24px;
  line-height: 24px;
  align-content: center;
  li {
    font-size: 14px;
    margin-bottom: 24px;
    line-height: 24px;
    align-content: center;
  }
}
</style>