<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
  #tab-bar {
    background-color: #f6f6f6;
    display: flex;
    height: 49px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    -webkit-box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.1);
    box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.1);
  }
</style>