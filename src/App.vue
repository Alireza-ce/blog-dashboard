<script setup lang="ts">
import { Vue3Snackbar } from "vue3-snackbar";
</script>

<template>
  <router-view />
  <vue3-snackbar top right :duration="2000"></vue3-snackbar>
</template>

<style scoped></style>
