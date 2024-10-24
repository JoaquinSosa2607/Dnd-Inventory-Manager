<template>
    <div class="character-list">
        <!-- Iterar sobre los personajes obtenidos -->
        <div v-for="player in players" :key="player.id" class="card" style="width: 18rem">
            <img :src="player.image" class="card-img-top" alt="Character Image" />
            <div class="card-body">
                <h5 class="card-title">{{ player.name }}</h5>
                <p class="card-text">Clase: {{ player.player_class }}</p>
                <p class="card-text">Especie: {{ player.species }}</p>
                <p class="card-text">Nivel: {{ player.level }}</p>
                <a href="#" class="btn btn-primary">Ver más detalles</a>
            </div>
        </div>
    </div>
</template>

<script>
import Cookies from "js-cookie";
import axios from "axios";

export default {
    data() {
        return {
            players: [],
        };
    },
    methods: {
        async fetchUserPlayers() {
            try {
                const token = Cookies.get('authToken');
                if (!token) {
                    throw new Error("Token no encontrado. Debes iniciar sesión.");
                }

                const response = await axios.get("http://localhost:4040/player/user-players", {
                    headers: { "auth-header": `${token}` }
                });
                this.players = response.data.Players;
            } catch (error) {
                console.error("Error obteniendo los personajes del usuario:", error.message);
            }
        },
    },
    mounted() {
        this.fetchUserPlayers();
    },
};
</script>

<style>
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
    object-fit: cover;
}
</style>
