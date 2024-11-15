<script setup lang="ts">
import AuthLayout from "../layout/AuthLayout.vue";
import { LocalStorageKeys } from "../../../core/constants/auth";
import { AuthForm } from "../models/forms.model";
import { useLogin } from "../services";
import { useNotication } from "../../../core/services/snackbar";
import { useRouter } from "vue-router";

const loginMutate = useLogin();
const router = useRouter();
const { onSuccessNotification, onErrorNotification } = useNotication();

async function onSubmit(data: AuthForm) {
  try {
    const res = await loginMutate.mutateAsync({ user: data });
    localStorage.setItem(LocalStorageKeys.TOKEN, res.data?.user?.token);
    onSuccessNotification("Welcome");
    router.push("/articles");
  } catch (e) {
    onErrorNotification("Email or Password is Incorrect");
    console.warn("register warn:", e);
  }
}
</script>

<template>
  <AuthLayout title="Login" button-label="Login" :onSubmit="onSubmit">
    <template #forms>
      <FormKit name="email" label="Email" validation="required|email" />
      <FormKit
        name="password"
        type="password"
        label="Password"
        validation="required|length:6"
      />
    </template>
    <template #footer> Don’t have account? Register Now </template>
  </AuthLayout>
</template>

<style scoped></style>
