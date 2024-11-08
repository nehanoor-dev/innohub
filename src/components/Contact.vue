<template>
  <div id="contact">
    <v-container fluid class="py-10">
      <!-- Section Title -->
      <v-row class="text-center mb-5">
        <v-col cols="12">
          <h2 class="headline font-weight-bold">Contact Us</h2>
          <p class="subheading">We'd love to hear from you</p>
        </v-col>
      </v-row>

      <!-- Contact Form -->
      <v-row justify="center">
        <v-col cols="12" md="8" lg="6">
          <v-form ref="contactForm" v-model="isFormValid" lazy-validation>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="form.name"
                  label="Name"
                  :rules="[rules.required]"
                  variant="outlined"
                  density="compact"
                  clearable
                  required
                  dense
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field
                  v-model="form.email"
                  label="Email"
                  density="compact"
                  :rules="[rules.required, rules.email]"
                  variant="outlined"
                  clearable
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-textarea
                  v-model="form.message"
                  label="Message"
                  :rules="[rules.required]"
                  variant="outlined"
                  clearable
                  required
                ></v-textarea>
              </v-col>

              <!-- Submit Button and Confirmation Message -->
              <v-col cols="12" class="text-center">
                <v-btn :disabled="!isFormValid || isSubmitting" @click="submitForm" class="mx-auto custom-btn">
                  Submit
                </v-btn>
                <v-alert v-if="submissionMessage" type="success" class="mt-4">
                  {{ submissionMessage }}
                </v-alert>
              </v-col>
            </v-row>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const contactForm = ref(null); 
const form = ref({
  name: '',
  email: '',
  message: ''
});

const isFormValid = ref(false);
const isSubmitting = ref(false);
const submissionMessage = ref('');

const rules = {
  required: (value) => !!value || 'This field is required',
  email: (value) => /.+@.+\..+/.test(value) || 'E-mail must be valid'
};

const submitForm = () => {
  if (!isFormValid.value) return;

  isSubmitting.value = true;

  // Simulate API submission delay
  setTimeout(() => {
    submissionMessage.value = 'Thank you for reaching out! We will get back to you shortly.';
    resetForm();
    isSubmitting.value = false;
  }, 1000);
};

const resetForm = () => {
  form.value.name = '';
  form.value.email = '';
  form.value.message = '';
  isFormValid.value = false;
  contactForm.value.resetValidation(); 
};
</script>

<style scoped>
</style>
