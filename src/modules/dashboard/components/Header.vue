<script setup lang="ts"></script>

<template>
  <div class="dashboard-header">
    <div class="info">
      <p class="company">Arvan Challenge</p>
      <p>Welcome user name</p>
    </div>
    <button class="btn btn-primary">logout button</button>
  </div>
</template>

<style scoped>
.dashboard-header {
  width: 100%;
  background-color: var(--charcoal-grey);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  padding: 24px;
  color: var(--white);
}

.dashboard-header .info {
  display: flex;
  align-items: center;
  gap: 12px;
}
</style>
