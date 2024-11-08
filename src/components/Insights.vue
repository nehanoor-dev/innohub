<!--
@Description -- Insights.vue
This component is responsible for desplaying Latest Insights byt fetching data from dummy API.
-->
<template>
  <v-container class="py-5 my-10" id="insights">
    <!-- Insights Section Title -->
    <v-row class="text-center mb-5">
      <v-col cols="12">
        <h2 class="headline font-weight-bold">Latest Insights</h2>
        <p class="subheading">Stay updated with the latest trends and news</p>
      </v-col>
    </v-row>

    <!-- Loading Indicator Section -->
    <v-row v-if="loading" justify="center">
      <v-col cols="12" class="text-center">
        <!-- Loading Spinner while data is being fetched -->
        <v-progress-circular
          indeterminate
          color="primary"
          size="64"
        ></v-progress-circular>
        <p class="mt-4">Loading insights...</p>
      </v-col>
    </v-row>

    <!-- Error Message Section -->
    <v-row v-else-if="error" justify="center">
      <v-col cols="12" class="text-center">
        <v-alert type="error" :value="true">
          There was an error fetching the articles. Please try again later.
        </v-alert>
      </v-col>
    </v-row>

    <!-- Insights Section Content (Only displayed once data is fetched) -->
    <v-row v-else dense>
      <!-- Dynamic Articles List -->
      <v-col
        v-for="article in displayedArticles"
        :key="article.id"
        cols="12"
        class="d-flex justify-center align-center"
      >
        <v-card class="pa-4 ma-4" elevation="0">
          <v-card-title>{{ article.title }}</v-card-title>
          <v-card-subtitle>{{ article.body.slice(0, 100) }}...</v-card-subtitle>
          <v-card-actions>
            <v-btn
              class="plain-btn text-capitalize"
              :to="{ name: 'Insight', component:'Insight', params: { id: article.id } }"
              text
            >
              Read More
            </v-btn>
          </v-card-actions>
          <v-divider></v-divider>
        </v-card>
      </v-col>
    </v-row>

    <!-- Load More Button -->
    <v-row justify="center">
      <v-col cols="12" class="text-center">
        <v-btn
          @click="loadMore"
          :loading="loadingMore"
          v-if="hasMore"
          class="mt-4 custom-btn"
        >
          Load More
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { components } from "vuetify/dist/vuetify-labs.js";

const articles = ref([]);
const displayedArticles = ref([]);
const loading = ref(true);
const loadingMore = ref(false);
const error = ref(null);
const hasMore = ref(false);
const startIndex = ref(0);
const limit = 3;

// Fetch the latest articles from the API
const fetchArticles = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok){
      loading.value = true;
      throw new Error("Failed to fetch articles");
    }
    const data = await response.json();
    articles.value = data;
    loadMore(); 
    hasMore.value = true;
  } catch (err) {
    loading.value = true;
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};

// Load more articles
const loadMore = () => {
  loadingMore.value = true;
  console.log("loading ", loadingMore.value)

  setTimeout(() => {
    const newArticles = articles.value.slice(
      startIndex.value,
      startIndex.value + limit
    );
    displayedArticles.value.push(...newArticles);
    startIndex.value += limit;

    // If we've fetched all articles, hide the "Load More" button
    if (displayedArticles.value.length >= articles.value.length) {
      hasMore.value = false;
    }

    // After the new articles are added, stop the loading indicator
    loadingMore.value = false;
  }, 1000); // Simulating a delay (e.g., API request)
};

// Fetch articles on component mount
onMounted(fetchArticles);

// Watch loadingMore to debug
watch([loadingMore, loading, hasMore], (newVal) => {
  console.log("Loading state changed: ", newVal);
});

</script>

<style scoped lang="scss">
@import "./../styles/global.scss";

.subheading {
  color: #888;
}

.v-alert {
  width: 100%;
  max-width: 600px;
}
</style>
