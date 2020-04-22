<template>
  <section class="detail content">
    <div>
      <div class="detail-title">江苏中烁</div>
      <div>江苏中烁热能科技有限公司，成立于2020年3月，公司位 于江苏省南京市溧水区，一家专业从事工业燃烧(加热) 系统设备及配件的工程技术公司</div>
    </div>
    <div>
    </div>
  </section>
</template>
<script>
export default {}
</script>
<style lang="stylus" scoped="">
.detail
  display: flex;
  margin-bottom: 20px;
  height: 500px;
  > div:first-child
    flex: 1;
    > div:first-child
      margin-bottom: 20px;
    > div:last-child
      line-height: 22px;
    // background: green;
  > div:last-child
    width: 920px;
    background: url('../../assets/img/qyjs1.jpg') center no-repeat;
    background-size:cover;
</style>
