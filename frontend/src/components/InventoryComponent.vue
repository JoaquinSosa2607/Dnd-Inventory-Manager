<template>
    <NavBar :name="characterName"/>
    <div class="inventory-sheet">
        <section class="inventory-section">
            <h2>Armaduras y Escudos</h2>
            <div v-if="armors !== null">
                <hr>
                <p v-for="armor in armors" :key="armor.id">
                    Nombre: <strong>{{ armor.name }}</strong> - {{ armor.type }} (Defensa: {{ armor.AC }}) 
                </p>
                <hr>
            </div>
            <p v-else>Cargando armaduras y escudos...</p>
        </section>
    </div>
</template>

<script>
import apiClient from '@/services/databaseService';
import NavBar from './NavBar.vue';

    export default {
        props: ['id'],
        data() {
            return {
                characterName: null,
                armors: null
            }
        },
        methods: {
            async getCharacterArmors() {
                try {
                    const response = await apiClient.get(`/armor/character-armors/${this.id}`);
                    console.log(response)
                    this.armors = response.data.armors;
                } catch (error) {
                    console.error("Error obteniendo las armaduras de tu personaje", error.message);
                }
            },
            async getCharacter() {
                try {
                    const response = await apiClient.get(`/character/${this.id}`);
                    this.characterName = response.data.character.name
                } catch (error) {
                    console.error("Error obteniendo tu personaje", error.message);
                } 
            }
        },
        async created() {
            this.getCharacter();
            this.getCharacterArmors();
        },
        components: {
            NavBar
        }
    }
</script>

<style scoped>
    .inventory-sheet {
        margin: 20px;
        background-color: rgba(255, 255, 255, 0.733);
        border-radius: 15px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
        padding: 10px 20px;
        transition: transform 0.2s;
        width: 500px;
        text-align: center;
        align-self: center;
        justify-self: center;
    }
</style>