<template>
  <section class="home">
    <Header></Header>
    <Swiper></Swiper>
    <TypeList></TypeList>
    <About></About>
    <Success></Success>
    <MedioCenter></MedioCenter>
    <Footer></Footer>
  </section>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Swiper from "@/components/Swiper.vue";
import TypeList from "@/components/TypeList.vue";
import About from "@/components/About.vue";
import Success from "@/components/Success.vue";
import MedioCenter from "@/components/MedioCenter.vue";
import Footer from "@/components/Footer";
export default {
  name: "Home",
  components: {
    Header,
    Swiper,
    TypeList,
    About,
    Success,
    MedioCenter,
    Footer
  }
};
</script>
<style lang="stylus" scoped>
</style>
