<script setup>
// Refs.
import { useRouter, useRoute } from "vue-router";
import Card from "@/components/Card.vue";
import { Cards } from "@/models/";

const router = useRouter();
const route = useRoute();
const { cardid } = route.params;

// Flatten cards into array.
const cardsByName = Object.entries(Cards).reduce((prev, [_cat, cards]) => {
  cards.forEach((c) => (prev[c.name] = c));
  return prev;
}, {});

// Card we're viewing.
const viewingCard = cardsByName[cardid];
</script>

<template>
  <main>
    <a @click="() => router.go(-1)">
      <Card :config="viewingCard" />
    </a>
  </main>
</template>

<style>
a {
  text-decoration: none;
  color: initial;
}
</style>
