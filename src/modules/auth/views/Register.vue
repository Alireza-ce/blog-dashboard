<script setup lang="ts">
import { LocalStorageKeys } from "../../../core/constants/auth";
import { useNotication } from "../../../core/services/snackbar";
import AuthLayout from "../layout/AuthLayout.vue";
import { RegisterForm } from "../models/forms.model";
import { useRegisterApi } from "../services/api";
import { useRouter } from "vue-router";

const router = useRouter();
const { onSuccessNotification, onErrorNotification } = useNotication();

const registerMutate = useRegisterApi();

async function onSubmit(data: RegisterForm) {
  try {
    const res = await registerMutate.mutateAsync({ user: data });
    localStorage.setItem(LocalStorageKeys.TOKEN, res.data?.user?.token);
    onSuccessNotification("User Created Successfully.");
    router.push("/articles");
  } catch (e) {
    onErrorNotification("User Existed!");
    console.warn("login warn:", e);
  }
}
</script>

<template>
  <AuthLayout
    title="Register"
    button-label="Register"
    :is-loading="registerMutate.isPending.value"
    :onSubmit="onSubmit"
  >
    <template #forms>
      <FormKit name="username" label="User" validation="required" />
      <FormKit name="email" label="Email" validation="required|email" />
      <FormKit
        name="password"
        type="password"
        label="Password"
        validation="required|length:6"
      />
    </template>
    <template #footer> Already Registered? Login </template>
  </AuthLayout>
</template>

<style scoped></style>
