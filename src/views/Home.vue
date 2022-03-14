<template>
  <div>
    <h1 @click="store.commit('increment')">{{ count }}</h1>
    <h1 @click="store.dispatch('increment')">{{ doubleCount }}</h1>
  </div>
</template>

<script lang="ts" setup>
  import { computed } from 'vue';
  import { useStore } from '@/store';

  const store = useStore();
  const count = computed(() => store.state.count);
  const doubleCount = computed(() => store.getters.double);
</script>
