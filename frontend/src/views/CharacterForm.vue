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
                <select v-model="player.species" id="species" required>
                    <option v-for="species in speciesList" :key="species.id" :value="species"> {{ species }}</option>
                </select>
            </div>
            <div>
                <label for="classes">Clase</label>
                <select v-model="player.player_class" id="classes" required>
                    <option v-for="player_class in classesList" :key="player_class.id" :value="classes"> {{ player_class }}</option>
                </select>
            </div>       
            <div>
                <label for="campaign">Camapaña</label>
                <select v-model="player.campaign" id="campaign" required>
                    <option v-for="campaign in campaigns" :key="campaign.id" :value="campaign"> {{ campaign.title }}</option>
                </select>
            </div>  
            <div>
                <label for="level">Nivel</label>
                <input type="number" v-model="player.level" min="1" max="20" required />
            </div>
            <button type="submit">Crear Personaje</button>
        </form>
    </div>
</template>
<script>
import Cookies from "js-cookie";
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
        async getSpeciesAndClasses() {
            try {
                const response = await axios.get(
                    "http://localhost:4040/campaigns/enums"
                );
                this.speciesList = response.data.species;
                this.classesList = response.data.classes;
            } catch (error) {
                console.error(
                    "Error obteniendo las especies y clases: ",
                    error.message
                );
            }
        },
        async submitForm() {
            try {
                const token = Cookies.get('authToken');
                if (!token) {
                    throw new Error("Token no encontrado. Debes iniciar sesión.");
                }

                await axios.post('http://localhost:4040/player/create-player', this.player, {
                    headers: { "auth-header": `${token}` }
                });
                alert("Personaje creado con éxito");
            } catch (error) {
                console.error("Error creando el personaje", error.message);
            }
},
    },
    mounted() {
        this.getCampaings();
        this.getSpeciesAndClasses();
    },
};
</script>

<style>
.main-form {
    margin: 20px auto;
    background: #f4e2c1;
    background-image: url('https://www.transparenttextures.com/patterns/old-paper.png');
    border-radius: 15px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
    padding: 20px 30px;
    max-width: 600px;
    text-align: left;
    font-family: 'Courier New', Courier, monospace;
    border: 5px solid #d8b786;
    position: relative;
}

input, select, button {
    font-family: 'Courier New', Courier, monospace;
    font-size: 16px;
    padding: 10px;
    margin-bottom: 15px;
    border-radius: 8px;
    border: 2px solid #8b6f47;
    background: #f7ecd9;
    width: 100%;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
}

input:focus, select:focus, button:focus {
    outline: none;
    border-color: #8b6f47;
}

button {
    background-color: #8b6f47;
    color: #fff;
    cursor: pointer;
    border: 2px solid #614927;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #614927;
}

h2, label {
    font-family: 'Cedarville Cursive', cursive;
    color: #5e4630;
    text-shadow: 1px 1px 1px #fff;
}

label {
    font-size: 18px;
    display: block;
    margin-bottom: 5px;
}

.main-form:before, .main-form:after {
    content: '';
    position: absolute;
    width: 40px;
    height: 40px;
    background: url('https://www.pngitem.com/pimgs/m/205-2056941_transparent-scroll-clipart-scroll-corner-png-download.png') no-repeat center;
    background-size: contain;
}

.main-form:before {
    top: -20px;
    left: -20px;
}

.main-form:after {
    bottom: -20px;
    right: -20px;
}

</style>
