<template>
  <v-container class="main-insight">
    <Header />
    <v-row v-if="loading" justify="center">
      <v-col cols="12" class="text-center">
        <v-progress-circular
          indeterminate
          color="primary"
          size="64"
        ></v-progress-circular>
        <p class="mt-4">Loading insight...</p>
      </v-col>
    </v-row>

    <v-row v-else-if="error" justify="center">
      <v-col cols="12" class="text-center">
        <v-alert type="error" :value="true">
          There was an error fetching the insight. Please try again later.
        </v-alert>
      </v-col>
    </v-row>

    <v-row v-else>
      <v-col cols="12" class="d-flex">
        <img
          src="./../assets/images/custom-software.jpg"
          alt="insight"
          height="400vh"
          width="400vh"
          class="round-img mt-10"
        />
        <v-card class="pa-4 my-auto px-auto" elevation="0">
          <v-card-title>{{ insight.title }}</v-card-title>
          <span>{{ insight.body }}</span>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import Header from "@/components/Header.vue";

const route = useRoute();
const insight = ref(null);
const loading = ref(true);
const error = ref(null);

// Fetch insight data by ID from the API
const fetchInsight = async () => {
  const id = route.params.id; // Get the ID from the route parameters
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    if (!response.ok) throw new Error("Failed to fetch insight");
    insight.value = await response.json();
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};

onMounted(fetchInsight);
</script>

<style scoped lang="scss">
@import "./../styles/global.scss";

.round-img {
  border-radius: 50%;
}
</style>
