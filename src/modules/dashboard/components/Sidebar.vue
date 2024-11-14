<script setup lang="ts">
import { sidebarLiks } from "../constants";
</script>

<template>
  <div class="side-bar">
    <p class="title">Post</p>
    <div class="links">
      <p v-for="sidebarLink in sidebarLiks" :key="sidebarLink.link">
        {{ sidebarLink.label }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.side-bar {
  width: 100%;
  max-width: 250px;
  background-color: var(--water-blue);
  color: var(--white);
  font-size: 16px;
}

.side-bar .title {
  padding: 12px 24px;
}

.side-bar .links p {
  padding: 12px 36px;
}
</style>
