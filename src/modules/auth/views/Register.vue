<script setup lang="ts">
import AuthLayout from "../layout/AuthLayout.vue";
import { RegisterForm } from "../models/forms.model";

function onSubmit(data: RegisterForm): void {
  // Handle register logic
  console.log("Register with:", data);
}
</script>

<template>
  <AuthLayout title="Register" button-label="Register" :onSubmit="onSubmit">
    <template #forms>
      <FormKit name="username" label="User" validation="required" />
      <FormKit name="email" label="Email" validation="required|email" />
      <FormKit name="password" label="Password"  validation="required|length:6" />
    </template>
    <template #footer> Already Registered? Login </template>
  </AuthLayout>
</template>

<style scoped></style>
