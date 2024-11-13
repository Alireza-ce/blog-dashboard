<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{
  title: string;
  buttonLabel: string;
  onSubmit: () => void;
}>();
</script>

<template>
  <div class="auth-layout-container">
    <div class="auth-form">
      <h2>{{ title }}</h2>
      <form @submit.prevent="onSubmit">
        <slot name="forms"></slot>
        <button type="submit" class="btn btn-primary submit-button">
          {{ buttonLabel }}
        </button>
      </form>
      <div class="footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.auth-layout-container {
  min-height: 100vh;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.auth-form {
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  padding: 37px 20px 19px;
  border-radius: 4px;
  background-color: var(--silver);
}

.auth-form h2 {
  text-align: center;
  color: var(--warm-grey);
  font-size: var(--title-font-size);
}

.submit-button {
  width: 100%;
}

.footer {
  margin-top: 12px;
}
</style>
