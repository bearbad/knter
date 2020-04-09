<template>
  <section class="header">
    <div class="header-logo">
      <img src="../assets/img/logo.jpeg"/>
    </div>
    <div class="header-nav">
      <ul>
        <li><a><span>走进中烁</span></a></li>
        <li><a><span>企业新闻</span></a></li>
        <li><a><span>产品资料</span></a></li>
        <li><a><span>应用行业</span></a></li>
        <li><a><span>精彩案例</span></a></li>
        <li><a><span>e服务</span></a></li>
        <li><a><span>联系我们</span></a></li>
      </ul>
    </div>
    <div class="header-language"></div>
    <div class="header-menu"></div>
  </section>
</template>
<style lang="stylus" scoped="">
.header
  height: 92px
  display: flex;
.header-logo
  img
    height: 92px;
.header-nav
  flex: 1;
  ul
    li
      display: inline-block;
      line-height: 92px;
      width: 84px;
      a
        span
          font-size: 14px;
          font-weight: bold;
          color: #4c4c4c;
.header-language
  width: 117px;
  background: orange;
.header-menu
  width: 70px;
  background: green;
</style>
