<script setup lang="ts">
  // This starter template is using Vue 3 <script setup> SFCs
  // Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
  <div class="nav">
    <router-link to="/">主页</router-link> |
    <router-link to="/about">关于页</router-link>
  </div>
  <router-view></router-view>
</template>

<style lang="scss">
  #app {
    margin-top: 60px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .nav {
    margin: 20px 0;
    font-size: 20px;
    a {
      text-decoration: none;
      color: inherit;
    }
  }
  .router-link-active {
    color: green !important;
  }
</style>
