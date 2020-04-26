<template>
  <section class="swiper-section">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide>
        <img src="../assets/img/swiper/1.jpeg" />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/img/swiper/2.jpeg" />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/img/swiper/3.jpeg" />
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
    // window.addEventListener('resize', this.getHeight);
    // this.getHeight()
  },

  methods: {
    // getHeight () {
    //   let w = 1920 - window.scrollWidth
    //   if (w > 0) {
    //     w = (1920 - window.scrollWidth) / 1920
    //   } else if (w < 0) {
    //     w = (window.scrollWidth - 1920) / window.scrollWidth + 1
    //   } else {
    //     w = 1
    //   }
    //   document.querySelectorAll('img').forEach(item => {
    //     item.currentTarget.style = "height:" + window.innerHeight * w + "px;width:" + window.scrollWidth + "px";
    //   })
    // }
  },

  destroyed(){
    // window.removeEventListener('resize', this.getHeight)
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
  width: 100%;
  height: 66%;
</style>
