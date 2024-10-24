<template>
    <NavBar />
    <div class="main">
        <h2>Al inventario de qué personaje quieres acceder?</h2>
    </div>
    <div class="characters">
        <CharacterComponent></CharacterComponent>
    </div>
    <div class="add-character">
        <router-link :to="{ name: 'CharacterForm'}" class="btn btn-danger">Agregar Personaje</router-link>
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

<style>

.main {
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
    margin: 20px;
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

.add-character{
    justify-self: center;
}
</style>
