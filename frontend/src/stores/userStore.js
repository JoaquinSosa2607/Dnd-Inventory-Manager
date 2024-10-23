import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
    state: () => ({
      email: '',
      isLoggedIn: false,
      token: null,
    }),
  
    actions: {
      login(email) {
        this.email = email;
        this.isLoggedIn = true;
      },
  
      logout() {
        this.email = '';
        this.isLoggedIn = false;
        this.token = null;
      }
    },
  
    getters: {
      isAuthenticated: (state) => state.isLoggedIn,
    },
  });