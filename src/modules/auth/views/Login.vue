<script setup lang="ts">
import AuthLayout from "../layout/AuthLayout.vue";
import { AuthForm } from "../models/forms.model";


function onSubmit(data: AuthForm): void {
  // Handle register logic
  console.log("Register with:", data);
}
</script>

<template>
  <AuthLayout title="Login" button-label="Login" :onSubmit="onSubmit">
    <template #forms>
      <FormKit name="email" label="Email" validation="required|email" />
      <FormKit name="password" label="Password"  validation="required|length:6" />
    </template>
    <template #footer> Don’t have account? Register Now </template>
  </AuthLayout>
</template>

<style scoped></style>
