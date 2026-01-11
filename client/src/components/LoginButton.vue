<script lang="ts" setup>
import { useAuthStore } from "@/stores/AuthStore";
import { Pop } from "@/utils/Pop.ts";
import { computed } from "vue";

const authStore = useAuthStore();

const displayName = computed(() => {
  const name = authStore.user?.name;
  if (name) return name.includes("@") ? name.split("@")[0] : name;
  return "";
});

function login() {
  // TODO: Implement your login logic
  Pop.toast("Login functionality needs to be implemented");
}

async function logout() {
  const confirmed = await Pop.confirm(
    "Log Out?",
    "",
    "Log Me Out!",
    "No Thanks!"
  );
  if (!confirmed) {
    return;
  } else {
    // TODO: Implement your logout logic
    Pop.toast("Logout functionality needs to be implemented");
  }
}
</script>

<template>
  <span>
    <button v-if="!authStore.user" class="btn text-green" @click="login">
      Login
    </button>
    <div v-else>
      <div
        v-if="authStore.user?.picture"
        class="d-flex justify-content-between"
      >
        <div class="d-inline-flex">
          <img
            :src="authStore.user?.picture"
            :alt="authStore.user?.name || 'user photo'"
            height="40"
            class="user-img"
          />
          <p class="text-light mt-2 ms-2">
            {{ displayName }}
          </p>
        </div>
        <div>
          <button role="button" class="account-btn me-2 fs-4" @click="logout">
            <i class="mdi mdi-chevron-up" />
          </button>
        </div>
      </div>
    </div>
  </span>
</template>

<style lang="scss" scoped>
.user-img {
  height: 40px;
  width: 40px;
  border-radius: 100px;
  object-fit: cover;
  object-position: center;
}

.account-btn {
  background-color: transparent;
  color: var(--bs-secondary);
  border: none;

  &:hover {
    color: var(--bs-light);
  }
}
</style>
