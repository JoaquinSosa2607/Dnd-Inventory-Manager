<template>
    <div class="main-form">
        <h2>Agregar un personaje</h2>
        <form @submit.prevent="submitForm">
            <div>
                <label for="name">Nombre</label>
                <input type="text" id="name" v-model="player.name" required/>
            </div>
            <div>
                <label for="species">Especie</label>
                <select v-model="player.species" required>
                    <option v-for="species in speciesList" :key="species.id" :value="species"> {{ species }}</option>
                </select>
            </div>
        </form>
    </div>
</template>
<script>
import { useUserStore } from "@/stores/userStore";
import axios from "axios";

export default {
    data() {
        return {
            player: {
                name: "",
                species: "",
                player_class: "",
                campaign: null,
                level: 1,
            },
            speciesList: [],
            classesList: [],
            campaigns: [],
        };
    },
    methods: {
        async getCampaings() {
            try {
                const response = await axios.get(
                    "http://localhost:4040/campaigns/all-campaigns"
                );
                this.campaigns = response.data.Campaigns;
            } catch (error) {
                console.error(
                    "Error obteniendo las camapañas: ",
                    error.message
                );
            }
        },
        async submitForm() {
            try {
                const userStore = useUserStore();
                const token = userStore.authToken;

                await axios.post('http://localhost:4040/player/create-player', this.player, {
                    headers: { "auth-header": token }
                });
                alert("Personaje creado con éxito");
            } catch (error) {
                console.error("Error creando el personaje", error.message);
            }
        },
    },
    mounted() {
        this.getCampaings();
    },
};
</script>

<style>
.main-form {
    margin: 20px;
    background-color: rgba(255, 255, 255, 0.733);
    border-radius: 15px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    padding: 10px 20px;
    transition: transform 0.2s;
    width: auto;
    text-align: center;
    align-self: center;
    justify-self: center;
    display: flex;
}
</style>
