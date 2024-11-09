<!--
@Description -- Footer.vue
This component is responsible for displaying social links , contact number and address of company at footer.
-->

<template>
  <v-footer class="py-6 custom-footer">
    <v-container>
      <!-- Social Media Icons -->
      <v-row justify="center" class="mb-4">
        <v-btn
          v-for="icon in socialIcons"
          :key="icon.name"
          :href="icon.link"
          icon
          target="_blank"
          :color="icon.color"
          class="mx-2"
        >
          <v-icon>{{ icon.icon }}</v-icon>
        </v-btn>
      </v-row>

      <!-- Contact Info -->
      <v-row justify="center" align="center" class="text-center">
        <v-col cols="12" md="4">
          <v-icon left>mdi-map-marker</v-icon>
          <span>1234 Innovation Way, San Francisco, CA</span>
        </v-col>
        <v-col cols="12" md="4">
          <v-icon left>mdi-phone</v-icon>
          <span>(123) 456-7890</span>
        </v-col>
        <v-col cols="12" md="4">
          <v-icon left>mdi-email</v-icon>
          <span>contact@innohub.com</span>
        </v-col>
      </v-row>

      <!-- Footer Bottom -->
      <v-divider class="my-4"></v-divider>
      <v-row justify="center" class="text-center">
        <v-col>
          <small>&copy; 2024 InnoHub. All rights reserved.</small>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup>
import { ref } from "vue";
const socialIcons = ref([
  { name: "LinkedIn", icon: "mdi-linkedin", link: "https://linkedin.com" },
  { name: "Twitter", icon: "mdi-twitter", link: "https://twitter.com" },
  { name: "Facebook", icon: "mdi-facebook", link: "https://facebook.com" },
]);
</script>

<style scoped lang="scss">
@import "./../styles/global.scss";

.custom-footer {
  background-color: $secondary-color;
}
</style>
