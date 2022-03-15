<script setup lang="ts">
  import { useStore } from '@/store';
  import { computed } from 'vue';

  defineProps<{ msg: string }>();

  const store = useStore();

  const count = computed(() => store.state.count);
</script>

<template>
  <img src="../assets/logo.png" alt="logo" />

  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    Lint:
    <a href="https://eslint.org/" target="_blank">ESlint</a>
    +
    <a href="https://prettier.io/" target="_blank">Prettier</a>
    +
    <a href="https://stylelint.io/" target="_blank">Stylelint</a>
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank"> Vite Docs </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" @click="store.commit('increment')">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
  a {
    color: #42b983;
  }

  label {
    margin: 0 0.5em;
    font-weight: bold;
  }

  code {
    border-radius: 4px;
    padding: 2px 4px;
    color: #304455;
    background-color: #eeeeee;
  }
</style>
