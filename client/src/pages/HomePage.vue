<script lang="ts" setup>
import HeroCard from "@/components/ExampleStuff/HeroCard.vue";
import OverviewCard from "@/components/ExampleStuff/OverviewCard.vue";
import StackCard from "@/components/ExampleStuff/StackCard.vue";

const frontTechs = [
  {
    name: "Vue.js",
    icon: "mdi-vuejs",
    color: "success",
    version: "v3.4.3",
    link: "https://vuejs.org/",
  },
  {
    name: "TypeScript",
    icon: "mdi-language-typescript",
    color: "info",
    version: "v5.1.0",
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "Pinia",
    icon: "mdi-fruit-pineapple",
    color: "warning",
    version: "v3.0.3",
    link: "https://pinia.vuejs.org/",
  },
  {
    name: "bootstrap",
    icon: "mdi-bootstrap",
    color: "purple",
    version: "v5.3.3",
    link: "https://getbootstrap.com/",
  },
];
</script>

<template>
  <!-- SECTION Hero Card-->
  <main class="container pt-3">
    <div class="pb-3 mb-2">
      <HeroCard />
    </div>
    <!-- !SECTION -->
    <!-- SECTION Stack Cards -->
    <div class="row justify-content-center mb-4">
      <!-- NOTE Front End Card -->
      <section class="col-12">
        <div class="stack-card">
          <div class="card-body ps-4 py-3">
            <p class="h3 text-light">
              <span>
                <i class="mdi mdi-desktop-classic fs-3" />
              </span>
              Frontend Stack
            </p>
            <!-- NOTE STACK CARDS -->
            <StackCard
              v-for="tech in frontTechs"
              :key="`front-end-tech-name-${tech.name}`"
              :tech="tech"
            />
          </div>
        </div>
      </section>
    </div>
    <!-- !SECTION -->
    <!-- SECTION Template Overview -->
    <div class="pb-3 mb-2">
      <OverviewCard />
    </div>
    <!-- !SECTION -->
  </main>
</template>

<style lang="scss" scoped>
.stack-card {
  background-color: var(--bs-dark);
  border-radius: 10px;
  border: 1px solid #192e5fd2;
  height: 450px;
}
</style>
