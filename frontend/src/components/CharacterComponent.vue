<template>
    <div class="character-list">
        <div v-for="character in characters" :key="character.id" class="card" style="width: 18rem">
            <hr>
            <img :src="getClassIcon(character.character_class)" class="card-img-top" alt="Icono de Personaje" />
            <hr>
            <div class="card-body">
                <h3 class="card-title">{{ character.name }}: {{ character.character_class }}</h3>
                <p><strong>Campaña: {{ character.campaign.title }}</strong></p>
                <div class="buttons">
                    <button class="btn btn-danger" @click="showDetails(character.id)">Detalles</button>
                    <router-link :to="{ name: 'InventoryView', params: { id: character.id } }" class="btn btn-danger">Inventario</router-link>
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
            characters: [],
            characterDetails: null
        };
    },
    methods: {
        async getUserCharacters() {
            try {
                const token = Cookies.get('authToken');
                if (!token) {
                    this.modalStore.openModal("Token no encontrado", "Debes iniciar sesión.");
                }
                const response = await apiClient.get("/character/user-characters", {
                    headers: { "auth-header": `${token}` }
                });
                
                this.characters = response.data.characters;
            } catch (error) {
                this.modalStore.openModal("Error obteniendo los personajes del usuario:", error.message);
            }
        },
        getClassIcon(characterClass) {
            return require(`@/assets/icons/${characterClass.toLowerCase()}.svg`);
        },
        async showDetails(id) {
            try {
                const response = await apiClient.get(`/character/${id}`);
                console.log(response)
                
                this.characterDetails = response.data.character;
                this.modalStore.openModal("Detalles del Personaje:", 
                `<strong>Nombre:</strong> ${this.characterDetails.name} <br> 
                <strong>Especie:</strong> ${this.characterDetails.species} <br> 
                <strong>Clase:</strong> ${this.characterDetails.character_class} <br> 
                <strong>Nivel:</strong> ${this.characterDetails.level}`);
            } catch (error) {
                this.modalStore.openModal("Error obteniendo los detalles", error.message);
            }
        }
    },
    mounted() {
        this.getUserCharacters();
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
