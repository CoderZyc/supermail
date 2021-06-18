<template>
  <div class="tab-bar-item" @click="btnClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="itemTitleStyle"><slot name="item-title"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      // 跳转链接
      link: String,
      itemTitleActiveColor: {
        type: String,
        default: '#ff0000'
      }
    },
    computed: {
      isActive() {
        if (this.link === undefined) return false

        return this.$route.path.indexOf(this.link) !== -1
      },
      itemTitleStyle() {
        return  this.isActive ? {color: this.itemTitleActiveColor} : {}
      }
    },
    data() {
      return {

      }
    },
    methods: {
      btnClick() {
        if (this.link === undefined || this.$route.path === this.link) return

        this.$router.replace(this.link)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    font-size: 14px;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 3px;
  }
</style>