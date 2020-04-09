<template>
  <section>
    <Header>
    </Header>
    <Swiper>
    </Swiper>
  </section>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Swiper from "@/components/Swiper.vue";
export default {
  name: "Home",
  components: {
    Header,
    Swiper
  }
};
</script>
