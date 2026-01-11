import { defineStore } from "pinia";

interface User {
  id: string;
  email: string;
  name?: string;
  picture?: string;
}

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null as User | null,
  }),
});
