<template>
  <section>
    <Header></Header>
    <div style="height: 700px;">
      <div v-if="qyjs">
        企业介绍
      </div>
      <div v-if="fzlc">
        发展历程
      </div>
      <div v-if="qyry">
        企业荣誉
      </div>
      <div v-if="qywh">
        企业文化
      </div>
    </div>
    <Footer></Footer>
  </section>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer";
export default {
  name: "Home",
  data () {
    return {
      type: ''
    }
  },

  mounted () {
    this.type = this.$route.params.type
    console.log(this.type)
  },

  computed: {
    qyjs () {
      return this.type === "qyjs"
    },

    fzlc () {
      return this.type === "fzlc"
    },

    qyry () {
      return this.type === "qyry"
    },

    qywh () {
      return this.type === "qywh"
    }

  },

  watch: {
    '$route' (val) {
      this.type = val.params.type
    }
  },
  components: {
    Header,
    Footer
  }
};
</script>
