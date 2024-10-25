<template>
    <div class="inventory-sheet">
        <h1>Hoja de Inventario</h1>
        <h2>Nombre del Personaje: <span id="character-name">{{ characterName }}</span></h2>
    </div>
</template>

<script>
import apiClient from '@/services/databaseService';

    export default {
        props: ['id'],
        data() {
            return {
                characterName: null
            }
        },
        async created() {
            const response = await apiClient.get(`/character/${this.id}`);
            console.log(response)
            this.characterName = response.data.Character.name
        }
    }
</script>

<style scoped>
    
</style>