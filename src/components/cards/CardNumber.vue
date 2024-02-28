<script setup>
const { config, mini } = defineProps(["config", "mini"]);
</script>

<template>
  <div
    class="card-outer"
    :class="{ mini }"
    :style="{ backgroundColor: config.border }"
  >
    <div class="card-inner" :style="{ backgroundColor: config.fill }">
      <h2>{{ config.icon }}</h2>
    </div>
  </div>
</template>

<style scoped>
div.card-outer {
  height: 100%;
  padding: 50px;
}

div.card-outer.mini {
  border-radius: 20px;
  padding: 20px;
}

div.card-inner {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
}

h2 {
  text-align: center;
  font-size: 12rem;
}

div.card-outer.mini h2 {
  font-size: 4rem;
}
</style>
