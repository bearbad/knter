<template>
  <section class="success content">
    <div class="home-title">
      <span>成功案例</span>
    </div>
    <div class="success-content">
      <span>我们愿与您一起共谋发展，携手并进，期待与近的深度合作！</span>
    </div>
    <div class="success-swiper">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide>
          <img src="../assets/img/1.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/img/2.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/img/1.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/img/2.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/img/1.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/img/2.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/img/1.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/img/2.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/img/1.jpg" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
  </section>
</template>
<script>
  export default {
    data() {
      return {
        swiperOption: {
          slidesPerView: 3,
          spaceBetween: 30,
          slidesPerGroup: 3,
          loop: true,
          loopFillGroupWithBlank: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    }
  }
</script>
<style lang="stylus" scoped="">
.success
  .success-content
    font-size: 20px;
    color: #8b9195;
    font-weight: bold;
    text-align: right;
.swiper
  height: 300px;
  width: 100%;
  .swiper-slide
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: bold;
    font-size: 24px;
    background-color: white;
    img
      width: 550px;
      height: 230px;
</style>
