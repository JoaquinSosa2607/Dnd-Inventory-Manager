<template>
    <NavBar :in-home="true"/>
    <div class="add-character">
        <router-link :to="{ name: 'CharacterForm'}" class="btn btn-danger">
            <h3>Agregar Personaje</h3>
        </router-link>
        <button class="btn btn-danger" @click="deleteCharacter(character.id)">Detalles</button>
    </div>
    <div class="characters">
        <CharacterComponent></CharacterComponent>
    </div>
    
    
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import CharacterComponent from "@/components/CharacterComponent.vue";

export default {
    name: "HomeView",
    components: {
        NavBar,
        CharacterComponent,
    }
}
</script>

<style scoped>

.main {
    margin-top: 10px;
    background-color: rgba(255, 255, 255, 0.733);
    border-radius: 15px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    padding: 10px 20px;
    transition: transform 0.2s;
    width: auto;
    text-align: center;
    align-self: center;
    justify-self: center;
}
.characters {
    background-color: none;
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

.add-character {
    justify-self: center;
    margin-top: 20px;
}
</style>
