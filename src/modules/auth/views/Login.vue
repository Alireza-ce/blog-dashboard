<script setup lang="ts">
import AuthLayout from "../layout/AuthLayout.vue";
</script>

<template>
  <AuthLayout title="Login" button-label="Login">
    <template #forms>
      <div class="form-group">
        <label for="emailField">Email</label>
        <input type="email" class="form-control" id="emailField" />
      </div>
      <div class="form-group">
        <label for="passwordField">Password</label>
        <input type="password" class="form-control" id="passwordField" />
      </div>
    </template>
  </AuthLayout>
</template>

<style scoped></style>
