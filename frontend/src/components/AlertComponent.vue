<template>
    <div v-if="showModal" class="modal-overlay" @click="closeModal">
        <div class="modal-content" @click.stop>
            <h3>{{ modalTitle }}</h3>
            <p v-html="modalMessage"></p>
            <hr>
            <button class="btn btn-dark" @click="closeModal">Aceptar</button>
        </div>
    </div>
</template>

<script>
import { useModalStore } from '@/stores/modalStore';

export default {
    setup() {
        const modalStore = useModalStore();

        return {
            showModal: modalStore.showModal,
            modalTitle: modalStore.modalTitle,
            modalMessage: modalStore.modalMessage,
            closeModal: modalStore.closeModal
        };
    }
};
</script>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}
.modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    max-width: 400px;
    width: 90%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
</style>