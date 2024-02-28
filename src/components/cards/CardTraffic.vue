<script setup>
const { config, mini } = defineProps(["config", "mini"]);
</script>

<template>
  <div :class="{ mini }" :style="{ backgroundColor: config.fill }">
    <span class="circle" :style="{ backgroundColor: config.icon }"></span>
  </div>
</template>

<style scoped>
div {
  height: 100%;
  border-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

div.mini {
  border-radius: 20px;
}

span.circle {
  border-radius: 1000px;
  width: 25vh;
  height: 25vh;
}

div.mini > span.circle {
  width: 80px;
  height: 80px;
}
</style>
