<template>
  <section>
    <Header>
    </Header>
    <Swiper>
    </Swiper>
    <TypeList>
    </TypeList>
  </section>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Swiper from "@/components/Swiper.vue";
import TypeList from "@/components/TypeList.vue";
export default {
  name: "Home",
  components: {
    Header,
    Swiper,
    TypeList
  }
};
</script>
