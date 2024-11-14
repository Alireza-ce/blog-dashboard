<script setup lang="ts"></script>

<template>
  <div class="dashboard-container">
    <div class="dashboard-header">
      <div class="info">
        <p class="company">Arvan Challenge</p>
        <p>Welcome user name</p>
      </div>
      <button class="btn btn-primary">logout button</button>
    </div>
    <div class="dashboard-content">
      <div class="side-bar">
        <p class="title">Post</p>
        <div class="links">
          <p>All Articles</p>
          <p>New Articles</p>
        </div>
      </div>
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

.dashboard-content {
  flex-grow: 1;
  display: flex;
}

.routes-wrapper {
  padding: 12px 24px;
}

.dashboard-content .side-bar {
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

.dashboard-content .routes-wrapper {
  flex-grow: 1;
}
</style>
