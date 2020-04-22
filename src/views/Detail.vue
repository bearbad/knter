<template>
  <section>
    <Header></Header>
    <div>
      <div class="content-all">
        <div class="content-img">
          <div class="content-list">
            <ul class="content-ul">
              <li>
                <router-link :to="{name:'Detail',params:{type: 'qyjs'}}">企业介绍</router-link>
              </li>
              <li>
                <router-link :to="{name:'Detail',params:{type: 'fzlc'}}">发展历程</router-link>
              </li>
              <li>
                <router-link :to="{name:'Detail',params:{type: 'qyry'}}">企业荣誉</router-link>
              </li>
              <li>
                <router-link :to="{name:'Detail',params:{type: 'qywh'}}">企业文化</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div v-if="qyjs">
        <Qyjs></Qyjs>
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
import Qyjs from "./detail/qyjs.vue";
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
    Footer,
    Qyjs
  }
};
</script>
<style lang="stylus" scoped="">
.content-all
  height: 280px;
  background: url(../assets/img/qyjs.jpg) center no-repeat;
.content-img
  margin: 0 100px;
.content-list
  position: relative;
  left: 0;
  top: 215px;
  background: #f8f8f8;
  height: 65px;
  width: 100%;
.content-ul
  li
    display: inline-block;
    text-align: center;
    height: 66px;
    line-height: 66px;
    font-size: 14px;
    font-weight: bold;
    float: left;
    width: 132px;
    a
      color: black;
      cursor: pointer;
      text-decoration: none;
      &:hover
        color: #efaa00;
</style>
