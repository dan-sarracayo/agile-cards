<script setup>
import { version } from "../../package.json";
import Card from "@/components/Card.vue";
import { Cards } from "../models/index";
const categories = Object.keys(Cards);
const getCards = (category) => Cards[category];
</script>

<template>
  <main>
    <!-- Loop categories. -->
    <div v-for="category in categories" :key="category" class="category">
      <h3>{{ category }}</h3>
      <div class="cards">
        <!-- Loop cards for each category. -->
        <router-link
          v-for="card in getCards(category)"
          :key="card.name"
          :to="'/' + card.name"
        >
          <div class="card-list-wrapper">
            <Card :config="card" :mini="true" />
          </div>
        </router-link>
      </div>
    </div>
  </main>
  <footer>
    <div>
      Built with ❤️ by
      <a href="https://github.com/dan-sarracayo">Dan</a>
    </div>
    <div>v{{ version }}</div>
  </footer>
</template>

<style>
div.category {
  padding: 20px;
}

div.category h3 {
  margin-left: 10px;
}

div.cards {
  width: 100%;
  display: flex;
  overflow-y: scroll;
  padding: 20px 10px;
}

.cards > a {
  text-decoration: none;
  color: initial;
}

.card-list-wrapper {
  margin-right: 20px;

  transition: transform 0.3s;
}

.card-list-wrapper:hover,
.card-list-wrapper:active,
.card-list-wrapper:focus {
  transform: scale(1.1) rotate(2deg);
}

footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

footer > div {
  padding: 10px;
}

footer a {
  text-decoration: underline;
}
</style>
