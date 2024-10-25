import { defineStore } from "pinia";
import Cookies from "js-cookie";

export const useUserStore = defineStore("user", {
    state: () => ({
        email: "",
        isLoggedIn: false,
        authToken: null,
        refreshToken: null,
    }),

    actions: {
        login(payload, response) {
            this.email = payload.email;
            this.isLoggedIn = true;
            
            Cookies.set('authToken', response.data.tokens.authToken, { secure: true, sameSite: 'Strict' });
            Cookies.set('refreshToken', response.data.tokens.refreshToken, { secure: true, sameSite: 'Strict' });
        },
        logout() {
            this.email = "";
            this.isLoggedIn = false;
            this.token = null;

            Cookies.remove("authToken");
            Cookies.remove("refreshToken");
        },
    },

    getters: {
        isAuthenticated: (state) => state.isLoggedIn,
    },
});
