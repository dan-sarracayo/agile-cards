<script setup>
const { config, mini } = defineProps(["config", "mini"]);
</script>

<template>
  <div :class="{ mini }" :style="{ backgroundColor: config.fill }">
    <h1>{{ config.icon }}</h1>
    <h2>{{ config.name }}</h2>
  </div>
</template>

<style scoped>
div {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
}

div.mini {
  border-radius: 20px;
}

h1 {
  font-size: 9rem;
}

h2 {
  font-size: 9rem;
}

div.mini h1 {
  font-size: 3rem;
}
div.mini h2 {
  font-size: 3rem;
}
</style>
