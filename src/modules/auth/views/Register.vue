<script setup lang="ts">
import { reactive } from "vue";
import AuthLayout from "../layout/AuthLayout.vue";

const formData = reactive({
  email: "",
  password: "",
  user: "",
});

function onSubmit() {
  // Handle register logic
  console.log("Register with:", formData);
}
</script>

<template>
  <AuthLayout title="Register" button-label="Register" :onSubmit="onSubmit">
    <template #forms>
      <div class="form-group">
        <label for="userField">User</label>
        <input
          type="text"
          class="form-control"
          id="userField"
          v-model="formData.user"
          required
        />
      </div>
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
    <template #footer> Already Registered? Login </template>
  </AuthLayout>
</template>

<style scoped></style>
