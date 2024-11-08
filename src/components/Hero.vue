<template>
    <v-container fluid class="hero-container" id="home">
      <!-- Hero Section with Parallax or Fade-in Effect -->
      <v-row no-gutters>
        <v-col cols="12" class="hero-content">
          <!-- Hero Headline -->
          <h1 class="hero-title">
            Transform Your Ideas<br> into Reality with<br> InnoHub
          </h1>
          <!-- Hero Subheadline -->
          <p class="hero-subtitle">
            Your Partner in Innovation and Growth
          </p> 
          <!-- Call-to-Action Button -->
          <v-btn
            class="custom-btn text-capitalize"
            @click="scrollToSolutions"
          >
          <v-icon class="mb-1">mdi-home</v-icon>
            Get Started
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  // Function to scroll to the Solutions Section
  const scrollToSolutions = () => {
    const solutionsSection = document.getElementById("solutions");
    if (solutionsSection) {
      solutionsSection.scrollIntoView({ behavior: "smooth" });
    }
  }; 
  </script>
  
  <style scoped lang="scss">
  @import './../styles/global.scss';

  .hero-container {
    position: relative;
    height: 100vh;
    background-image: url('./../assets/images/bg.webp');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $dark-text;
    overflow: hidden;
  }
  
  .hero-content {
    text-align: center;
    z-index: 1;
    animation: fadeIn 1.5s ease-out;
  }
  
  .hero-title {
    font-size: 3rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  }
  
  .hero-subtitle {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    font-weight: 400;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  }
 
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(100px);
    }
    100% {
      opacity: 1;
      transform: translateY(50);
    }
  }
  
  @media (max-width: 768px) {
    .hero-title {
      font-size: 2rem;
    }
  
    .hero-subtitle {
      font-size: 1rem;
    }
  }
  </style>
  