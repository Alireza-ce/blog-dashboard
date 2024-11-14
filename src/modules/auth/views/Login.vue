<script setup lang="ts">
import { reactive } from "vue";
import AuthLayout from "../layout/AuthLayout.vue";

const formData = reactive({
  email: "",
  password: "",
});

function onSubmit() {
  // Handle register logic
  console.log("Register with:", formData.email, formData.password);
}
</script>

<template>
  <AuthLayout title="Login" button-label="Login" :onSubmit="onSubmit">
    <template #forms>
      <div class="form-group">
        <label for="emailField">Email</label>
        <input
          type="email"
          class="form-control"
          id="emailField"
          v-model="formData.email"
          required
        />
      </div>
      <div class="form-group">
        <label for="passwordField">Password</label>
        <input
          type="password"
          class="form-control"
          id="passwordField"
          v-model="formData.password"
          required
        />
      </div>
    </template>
    <template #footer> Don’t have account? Register Now </template>
  </AuthLayout>
</template>

<style scoped></style>
