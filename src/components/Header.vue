<template>
  <section class="header">
    <div class="header-logo" @click="toHome">
      <img src="../assets/img/logo.jpeg" />
    </div>
    <div class="header-nav" @mouseleave="houtHandle()">
      <ul class="first-ul">
        <li @mouseenter="hoverHandle(1)">
          <a>
            <span>走进中烁</span>
          </a>
        </li>
        <li @mouseenter="hoverHandle(2)">
          <a>
            <span>企业新闻</span>
          </a>
        </li>
        <li @mouseenter="hoverHandle(3)">
          <a>
            <span>产品资料</span>
          </a>
        </li>
        <li @mouseenter="hoverHandle(4)">
          <a>
            <span>应用行业</span>
          </a>
        </li>
        <li @mouseenter="hoverHandle(5)">
          <a>
            <span>精彩案例</span>
          </a>
        </li>
        <li @mouseenter="hoverHandle(6)">
          <a>
            <span>e服务</span>
          </a>
        </li>
        <li @mouseenter="hoverHandle(7)">
          <a>
            <span>联系我们</span>
          </a>
        </li>
      </ul>
      <div class="secondLevel" v-if="type === 1" @mouseover="hoverHandle(1)">
        <div class="list">
          <ul>
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
      <div class="secondLevel" v-if="type === 2">
        <div class="list">
          <ul>
            <li>
              <a>企业动态</a>
            </li>
            <li>
              <a>媒体报道</a>
            </li>
            <li>
              <a>嘉宝战役</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="secondLevel" v-if="type === 3">
        <div class="list">
          <ul>
            <li>
              <a>企业介绍</a>
            </li>
            <li>
              <a>发展历程</a>
            </li>
            <li>
              <a>企业荣誉</a>
            </li>
            <li>
              <a>企业文化</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="secondLevel" v-if="type === 4">
        <div class="list">
          <ul>
            <li>
              <a>企业介绍</a>
            </li>
            <li>
              <a>发展历程</a>
            </li>
            <li>
              <a>企业荣誉</a>
            </li>
            <li>
              <a>企业文化</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="secondLevel" v-if="type === 5">
        <div class="list">
          <ul>
            <li>
              <a>企业介绍</a>
            </li>
            <li>
              <a>发展历程</a>
            </li>
            <li>
              <a>企业荣誉</a>
            </li>
            <li>
              <a>企业文化</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="secondLevel" v-if="type === 6">
        <div class="list">
          <ul>
            <li>
              <a>企业介绍</a>
            </li>
            <li>
              <a>发展历程</a>
            </li>
            <li>
              <a>企业荣誉</a>
            </li>
            <li>
              <a>企业文化</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="secondLevel" v-if="type === 7">
        <div class="list">
          <ul>
            <li>
              <a>企业介绍</a>
            </li>
            <li>
              <a>发展历程</a>
            </li>
            <li>
              <a>企业荣誉</a>
            </li>
            <li>
              <a>企业文化</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="header-language"></div>
    <div class="header-menu"></div>
  </section>
</template>
<script>
export default {
  data () {
    return {
      type: 0
    }
  },

  computed: {
  },

  methods: {
    toHome () {
      this.$router.push('/');
    },
    hoverHandle (type) {
      this.type = type
      const array = this.$el.querySelectorAll('.first-ul li')
      array.forEach(item => {
        item.className = ''
      })
      array[type - 1].className = "bg"
    },

    houtHandle () {
      this.type = 0
      const array = this.$el.querySelectorAll('.first-ul li')
      array.forEach(item => {
        item.className = ''
      })
    }
  },

  destroyed () {
  }
}
</script>
<style lang="stylus" scoped="">
.header
  height: 92px
  display: flex;
.header-logo
  img
    height: 92px;
.header-nav
  flex: 1;
  .first-ul
    li
      display: inline-block;
      line-height: 92px;
      width: 84px;
      text-align: center;
      cursor: pointer;
      a
        span
          font-size: 14px;
          font-weight: bold;
          color: #4c4c4c;
  .bg
    background: #0a624b;
    a
      span
        color: #efaa00!important;
.header-language
  width: 117px;
  // background: orange;
.header-menu
  width: 70px;
  // background: green;
.secondLevel
  position: relative;
  top: -1px;
  left: 0;
  height: 60px;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  width: calc(100vh - 207.8);
  ul
    li
      display: inline-block;
      text-align: center;
      height: 66px;
      line-height: 66px;
      font-size: 14px;
      float: left;
      width: 92px;
      a
        color: white;
        cursor: pointer;
        text-decoration: none;
        &:hover
          color: #efaa00;
</style>
