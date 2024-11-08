<template id="solutions">
  <v-container class="py-5 main" id="solutions">
    <!-- Solutions Section Title -->
    <v-row class="text-center mb-5">
      <v-col cols="12">
        <h2 class="headline font-weight-bold">Our Solutions</h2>
        <p class="subheading">Innovative solutions for modern businesses</p>
      </v-col>
    </v-row>

    <!-- Cards showcasing services -->
    <v-row dense class="pa-0" justify="center">
      <!-- Cards Loop -->
      <v-col
        v-for="(service, i) in services"
        :key="i"
        cols="12"
        sm="6"
        md="4"
        lg="3"
        class="d-flex justify-center align-center pa-0 mb-4"
        align="end"
      >
        <v-card
          class="text-center pa-3 ma-3 custom-card card-animation"
          max-width="300"
          min-height="200px"
          elevation="0"
        >
          <img
            :src="service.icon"
            height="70px"
            width="70px"
            alt="service"
            class="mx-auto d-block"
          />
          <span class="font-weight-bold">{{ service.title }}</span>
          <p>{{ service.description }}</p>
          <template v-slot:actions>
            <v-btn
              text="Read More"
              class="mx-auto custom-btn text-capitalize"
            ></v-btn>
          </template>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from "vue";

const services = ref([
  {
    title: "Custom Development",
    description:
      "Tailored solutions to meet your business needs with the latest technologies.",
    icon: "https://cdn-icons-png.flaticon.com/512/25/25229.png", 
  },
  {
    title: "AI & Machine Learning",
    description:
      "Harness the power of AI for smarter decision-making and predictive analytics.",
    icon: "https://cdn-icons-png.flaticon.com/512/3640/3640721.png", 
  },
  {
    title: "Cloud Integration",
    description:
      "Seamlessly integrate your systems with the cloud for scalability and flexibility.",
    icon: "https://cdn-icons-png.flaticon.com/512/1822/1822638.png", 
  },
  {
    title: "IoT Solutions",
    description:
      "Connecting devices and systems for better data insights and automation.",
    icon: "https://cdn-icons-png.flaticon.com/512/3149/3149178.png", 
  },
]);

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

onMounted(() => {
  // Observe each card for visibility
  const cards = document.querySelectorAll(".card-animation");
  cards.forEach((card) => {
    observer.observe(card);
  });
});
</script>

<style scoped lang="scss">
@import "./../styles/global.scss";

.main {
  animation: fadeIn 1.5s ease-out;
}

.custom-card {
  border: 1px solid $primary-color;
  cursor: pointer;
  transform: translateY(50px);
  transition: all 0.5s ease-in-out;
}

.custom-card:hover {
  background-color: $primary-color;
  transition: 0.4s;
}

/* Fade-in class */
.fade-in {
  opacity: 1;
  transform: translateY(50);
}

/* Keyframes for fade-in animation */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Responsive adjustments */
@media (max-width: 600px) {
  .custom-card {
    min-height: 250px;
  }

  .custom-card img {
    height: 50px;
    width: 50px;
  }

  .custom-card span {
    font-size: 1.1rem;
  }

  .custom-card p {
    font-size: 0.9rem;
  }
}
</style>
