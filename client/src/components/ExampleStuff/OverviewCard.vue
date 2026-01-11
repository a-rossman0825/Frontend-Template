<script lang="ts" setup></script>

<template>
  <section class="card p-2 bg-dark">
    <div class="card-body text-light p-4 pb-4">
      <h3>Project Overview</h3>
    </div>
    <div class="row ms-2 text-light">
      <!-- SECTION Architecture overview -->
      <div class="col-md-6">
        <p class="h5">Architecture</p>
        <p>
          Modern frontend architecture with component-based design, enabling
          scalable and maintainable applications.
        </p>
      </div>
      <!-- !SECTION -->
      <!-- SECTION Auth overview -->
      <div class="col-md-6">
        <p class="h5">Authentication</p>
        <p>
          Ready for secure authentication and authorization implementation with
          JWT tokens for seamless user management and security.
        </p>
      </div>
      <!-- !SECTION -->
    </div>
  </section>
</template>

<style lang="scss" scoped>
.card {
  border-radius: 15px;
  border: 1px solid #192e5fd2;
}
</style>
