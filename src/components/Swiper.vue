<template>
  <section>
    <swiper :options="swiperOption" ref="mySwiper">
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
    </swiper>
  </section>
</template>
<script>
export default {
  name: "component-swiper",

  data () {
    return {
      swiperOption: {
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        }
      }
    }
  },

  mounted() {
    this.swiper.slideTo(3, 1000, false)
  },

  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  }
}
</script>
<style lang="stylus" scoped="">
img
  height: 519px;
  width: 100%;
</style>
