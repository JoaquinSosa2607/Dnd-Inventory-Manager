<template>
    <div class="character-list">
        <div v-for="player in players" :key="player.id" class="card" style="width: 18rem">
            <hr>
            <img :src="getClassIcon(player.player_class)" class="card-img-top" alt="Icono de Personaje" />
            <hr>
            <div class="card-body">
                <h3 class="card-title">{{ player.name }} : {{ player.player_class }}</h3>
                <p><strong>Campaña: {{ player.campaign.title }}</strong></p>
                <div class="buttons">
                    <button class="btn btn-danger" @click="showDetails(player.id)">Detalles</button>
                    <router-link class="btn btn-danger">Inventario</router-link>
                </div>
            </div>
        </div>
    </div>
    <AlertComponent v-if="modalStore.showModal" :title="modalStore.modalTitle" :message="modalStore.modalMessage" @close="closeModal">
    </AlertComponent>
</template>

<script>
import Cookies from "js-cookie";
import apiClient from "@/services/databaseService";
import AlertComponent from "./AlertComponent.vue";
import { useModalStore } from "@/stores/modalStore";

export default {
    data() {
        const modalStore = useModalStore();
        return {
            modalStore,
            players: [],
            playerDetails: null
        };
    },
    methods: {
        async fetchUserPlayers() {
            try {
                const token = Cookies.get('authToken');
                if (!token) {
                    this.modalStore.openModal("Token no encontrado", "Debes iniciar sesión.");
                }
                const response = await apiClient.get("/player/user-players", {
                    headers: { "auth-header": `${token}` }
                });
                
                this.players = response.data.Players;
            } catch (error) {
                this.modalStore.openModal("Error obteniendo los personajes del usuario:", error.message);
            }
        },
        getClassIcon(playerClass) {
            return require(`@/assets/icons/${playerClass.toLowerCase()}.svg`);
        },
        async showDetails(id) {
            try {
                const response = await apiClient.get(`/player/${id}`);
                
                this.playerDetails = response.data.Player;
                this.modalStore.openModal("Detalles del Personaje:", 
                `<strong>Nombre:</strong> ${this.playerDetails.name} <br> 
                <strong>Especie:</strong> ${this.playerDetails.species} <br> 
                <strong>Clase:</strong> ${this.playerDetails.player_class} <br> 
                <strong>Nivel:</strong> ${this.playerDetails.level}`);
            } catch (error) {
                this.modalStore.openModal("Error obteniendo los detalles", error.message);
            }
        }
    },
    mounted() {
        this.fetchUserPlayers();
    },
    components: {
        AlertComponent
    }
};
</script>

<style scoped>
.character-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.card {
    margin: 10px;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.card-img-top {
    height: 200px;
    object-fit: contain;
    margin-top: 10px;
}

.buttons{
    display: flex;
    justify-self: center;
    gap: 10px;
}

</style>
