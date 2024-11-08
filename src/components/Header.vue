<template>
  <v-app class="navbar">
    <v-app-bar app elevation="0" class="custom-navbar">
      <img
        src="./../assets/images/logo.avif"
        height="50px"
        width="50px"
        class="ml-10"
        alt="innoHub-logo"
      />
      <v-app-bar-title class="font-weight-bold">InnoHub Solutions</v-app-bar-title>

      <v-spacer></v-spacer>  

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          text
          :ripple="false"
          link to="/"
          class="cursor-pointer text-capitalize custom-links"
          >Home</v-btn
        >
        <v-btn
          text
          @click="scrollToSection('solutions')"
          :ripple="false"
          class="cursor-pointer text-capitalize custom-links"
          >Solutions</v-btn
        >
        <v-btn
          text
          @click="scrollToSection('insights')"
          :ripple="false"
          class="cursor-pointer text-capitalize custom-links"
          >Insights</v-btn
        >
        <v-btn
          text
          @click="scrollToSection('contact')"
          :ripple="false"
          class="cursor-pointer text-capitalize custom-links"
          >Contact</v-btn
        >
        <v-btn variant="flat" :ripple="false" class="custom-btn text-capitalize mr-5"
          >Join Us</v-btn
        >
      </v-toolbar-items>

      <v-app-bar-nav-icon
        @click="openDrawer"
        class="hidden-md-and-up"
      ></v-app-bar-nav-icon>
    </v-app-bar>
    <div v-show="showDrawer == true">
      <v-navigation-drawer
        v-model="drawer"
        temporary
        :mini-variant="!isSmallScreen"
        :location="isMobile ? 'none' : 'left'"
        class="custom-drawer"
      >
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6">Solutions</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense class="align-text center">
          <v-list-item link to="/">
            <v-list-item-title class="cursor-pointer text-capitalize text-center"
              >Home</v-list-item-title
            >
          </v-list-item>
          <v-list-item @click="scrollToSection('solutions')">
            <v-list-item-title class="cursor-pointer text-capitalize text-center"
              >Solutions</v-list-item-title
            >
          </v-list-item>
          <v-list-item @click="scrollToSection('insights')"          >
            <v-list-item-title class="cursor-pointer text-capitalize text-center"
              >Insights</v-list-item-title
            >
          </v-list-item>
          <v-list-item @click="scrollToSection('contact')">
            <v-list-item-title class="cursor-pointer text-capitalize text-center"
              >Contact</v-list-item-title
            >
          </v-list-item>
          <v-list-item>
            <v-btn class="plain-btn margin d-flex justify-content-center text-capitalize">Join Us</v-btn>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </div>
  </v-app>
</template>

<script setup>
import { ref } from "vue";
import { useDisplay } from "vuetify"; // Import useDisplay from Vuetify

const drawer = ref(false);
const showDrawer = ref(false);

// Use Vuetify's useDisplay to get breakpoint info
const { smAndDown, mobile } = useDisplay();

const isSmallScreen = smAndDown;
const isMobile = mobile;

const openDrawer = () => {
  drawer.value = !drawer.value;
  showDrawer.value = true;
};

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
    drawer.value = false;
  }
};
</script>

<style scoped lang="scss">
@import "./../styles/global.scss";

.navbar {
  height: 50px !important;
}

.custom-links:hover {
border-bottom: 2px solid $secondary-color;
}

  @media (max-width: 768px) {
  .custom-drawer {
    position: fixed !important;
    top: 0 !important;
    bottom: 0 !important;
    width: 100% !important;
    overflow-y: hidden;
  }
}
.margin {
  margin: auto !important;
}
</style>
