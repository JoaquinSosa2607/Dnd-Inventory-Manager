import { defineStore } from "pinia";

export const useModalStore = defineStore('modal', {
    state: () => ({
        showModal: false,
        modalTitle: null,
        modalMessage: null
    }),
    actions: {
        openModal(title, message) {
            this.modalTitle = title;
            this.modalMessage = message;
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
            this.modalTitle = '';
            this.modalMessage = '';
        }
    }
});