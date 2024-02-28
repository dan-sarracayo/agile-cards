<script setup>
import { CardNumber, CardShirt, CardFilled, CardTraffic } from "./cards/";

const { config, mini } = defineProps(["config", "mini"]);
</script>

<template>
  <div class="card-outer" :class="{ mini }">
    <template v-if="config.type === 'number'">
      <CardNumber :config="config" :mini="mini" />
    </template>
    <template v-if="config.type === 'tshirt'">
      <CardShirt :config="config" :mini="mini" />
    </template>
    <template v-if="config.type === 'trafficlight'">
      <CardTraffic :config="config" :mini="mini" />
    </template>
    <template v-if="config.type === 'filled'">
      <CardFilled :config="config" :mini="mini" />
    </template>
  </div>
</template>

<style scoped>
div.card-outer {
  height: 100dvh;
}
div.card-outer.mini {
  width: 60%;
  height: 100%;
}
div.card-outer.mini {
  width: 150px;
  height: 210px;
}
</style>
