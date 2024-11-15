<script setup lang="ts">
import { LocalStorageKeys } from "../../../core/constants/auth";
import AuthLayout from "../layout/AuthLayout.vue";
import { RegisterForm } from "../models/forms.model";
import { useRegister } from "../services";

const registerMutate = useRegister();

async function onSubmit(data: RegisterForm) {
  try {
    const res = await registerMutate.mutateAsync({ user: data });
    console.log("Register with:", res);
    localStorage.setItem(LocalStorageKeys.TOKEN, res.data?.user?.token);
  } catch (e) {
    console.warn("login warn:", e);
  }
}
</script>

<template>
  <AuthLayout title="Register" button-label="Register" :onSubmit="onSubmit">
    <template #forms>
      <FormKit name="username" label="User" validation="required" />
      <FormKit name="email" label="Email" validation="required|email" />
      <FormKit
        name="password"
        label="Password"
        validation="required|length:6"
      />
    </template>
    <template #footer> Already Registered? Login </template>
  </AuthLayout>
</template>

<style scoped></style>
