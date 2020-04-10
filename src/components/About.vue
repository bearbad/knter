<template>
  <section class="about">
    <div>
      <div class="about-title home-title">
        <span>关于中烁</span>
      </div>
      <div class="about-content">
        <div>
          <img src="../assets/img/1.jpg"/>
        </div>
        <div>
          <span>2020.3.32</span>
          <span>江苏中烁热能科技有限公司成立，公司地址中国江苏省南京市溧水区</span>
          <span>江苏中烁热能科技有限公司成立，公司地址中国江苏省南京市溧水区江苏中烁热能科技有限公司成立，公司地址中国江苏省南京市溧水区江苏中烁热能科技有限公司成立，公司地址中国江苏省南京市溧水区</span>
        </div>
      </div>
    </div>
    <div>
    </div>
  </section>
</template>
<style lang="stylus" scoped="">
.about
  display: flex;
  height: 286px;
.about
  > div:first-child
      flex: 2;
      // background: green;
      .about-title
        height: 50px;
        line-height: 50px;
        font-size: 24px;
        color: #4c4c4c;
        // background: red;
      .about-content
        display: flex;
        > div:first-child
           width: 200px;
        img
          width: 200px;
          height: 200px;
        > div:last-child
           flex: 1;
           padding-left: 20px;
           span:nth-child(1)
             display: block;
             color: #f6a30c;
             font-size: 24px;
             height: 35px;
           span:nth-child(2)
             display: block;
             color: #4c4c4c;
             font-size: 22px;
             min-height: 35px;
           span:nth-child(3)
             display: block;
             color: #8b9195;
             font-size: 14px;
  > div:last-child
      flex: 1;
      background: orange;
</style>
