<template>
    <div class="container">
        <div class="main-form">
            <h2>Agregar un personaje</h2>
            <form @submit.prevent="submitForm">
                <div>
                    <label for="name">Nombre</label>
                    <input
                        type="text"
                        id="name"
                        v-model="character.name"
                        required
                    />
                </div>
                <div>
                    <label for="species">Especie</label>
                    <select v-model="character.species" id="species" required>
                        <option
                            v-for="species in speciesList"
                            :key="species.id"
                            :value="species"
                        >
                            {{ species }}
                        </option>
                    </select>
                </div>
                <div>
                    <label for="classes">Clase</label>
                    <select v-model="character.character_class" id="classes" required>
                        <option
                            v-for="character_class in classesList"
                            :key="character_class.id"
                            :value="character_class"
                        >
                            {{ character_class }}
                        </option>
                    </select>
                </div>
                <div>
                    <label for="campaign">Camapaña</label>
                    <select v-model="character.campaign" id="campaign" required>
                        <option
                            v-for="campaign in campaigns"
                            :key="campaign.id"
                            :value="campaign"
                        >
                            {{ campaign.title }}
                        </option>
                    </select>
                </div>
                <div>
                    <label for="level">Nivel</label>
                    <input
                        type="number"
                        v-model="character.level"
                        min="1"
                        max="20"
                        required
                    />
                </div>
                <div class="btn-submit">
                    <button class="btn btn-danger" type="submit">Crear Personaje</button>
                    <button class="btn btn-danger" @click="goBack">Volver</button>
                </div>
            </form>
        </div>
    </div>

    <AlertComponent v-if="modalStore.showModal" :title="modalStore.modalTitle" :message="modalStore.modalMessage" @close="closeModal"/>
</template>
<script>
import Cookies from "js-cookie";
import axios from "axios";
import AlertComponent from "@/components/AlertComponent.vue";
import { useModalStore } from "@/stores/modalStore";

export default {
    data() {
        const modalStore = useModalStore()
        return {
            modalStore,
            character: {
                name: "",
                species: "",
                character_class: "",
                campaign: null,
                level: 1,
            },
            speciesList: [],
            classesList: [],
            campaigns: [],
            showModal: false,
            modalTitle: null,
            modalMessage: null
        };
    },
    methods: {
        async getCampaings() {
            try {
                const response = await axios.get(
                    "http://localhost:4040/campaigns/all-campaigns"
                );
                this.campaigns = response.data.campaigns;
            } catch (error) {
                this.modalStore.openModal("Error obteniendo las campañas", error.message);
            }
        },
        async getSpeciesAndClasses() {
            try {
                const response = await axios.get(
                    "http://localhost:4040/campaigns/enums"
                );
                this.speciesList = response.data.species;
                this.classesList = response.data.classes;
            } catch (error) {
                this.modalStore.openModal("Error obteniendo las especies y clases", error.message);
            }
        },
        async submitForm() {
            try {
                const token = Cookies.get("authToken");
                if (!token) {
                    this.modalStore.openModal("Error de autenticación", "Inicie sesión")
                }

                await axios.post(
                    "http://localhost:4040/character/create-character",
                    this.character,
                    {
                        headers: { "auth-header": `${token}` },
                    }
                );
                this.modalStore.openModal("Personaje creado con éxito", "Ya puedes acceder a su inventario.");
            } catch (error) {
                this.modalStore.openModal("Error creando el personaje", error.message);
            }
        },
        closeModal() {
            this.modalStore.closeModal();
            this.goBack();
        },
        goBack() {
            this.$router.push('home');
        }
    },
    mounted() {
        this.getCampaings();
        this.getSpeciesAndClasses();
    },
    components: {
        AlertComponent
    },
};
</script>

<style scoped>
.container {
    margin: 10px;
    display: flex;
    justify-content: center;
    align-self: center;
    justify-self: center;
    height: auto;
    overflow: hidden;
}
.main-form {
    background-color: rgba(255, 255, 255, 0.733);
    border-radius: 15px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
    padding: 20px 30px;
    max-width: 600px;
    text-align: left;
    max-height: 100vh;
    overflow-y: auto;
    align-self: center;
    align-items: center;
}

input,
select {
    font-size: auto;
    padding: 10px;
    border-radius: 8px;
    width: 100%;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
}

.btn-submit {
    margin-top: 10px;
    display: flex;
    gap: 10px;
    justify-self: center;
}
</style>
