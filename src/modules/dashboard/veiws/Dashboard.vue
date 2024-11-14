<script setup lang="ts">
import Header from "../components/Header.vue";
import Sidebar from "../components/Sidebar.vue";
</script>

<template>
  <div class="dashboard-container">
    <!-- @to-do send data to header -->
    <Header />
    <div class="dashboard-content">
      <Sidebar />
      <div class="routes-wrapper"><router-view /></div>
    </div>
  </div>
</template>

<style scoped>
.dashboard-container {
  height: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
}

.dashboard-content {
  flex-grow: 1;
  display: flex;
}

.dashboard-content .routes-wrapper {
  flex-grow: 1;
  padding: 12px 24px;
}
</style>
