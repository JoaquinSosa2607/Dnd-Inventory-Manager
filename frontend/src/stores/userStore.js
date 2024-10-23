import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
    state: () => ({
      email: '',
      isLoggedIn: false,
      authToken: null,
      refreshToken: null
    }),
  
    actions: {
      login(response) {
        this.email = response.email;
        this.isLoggedIn = true;
        this.authToken = response.authToken;
        this.refreshToken = response.refreshToken;
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