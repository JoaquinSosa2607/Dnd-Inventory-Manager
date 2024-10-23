<template>
    <nav class="nav-bar">
        <h2>Bienvenido!</h2>
        <ul>
            <li><router-link to="/inventory">Inventario</router-link></li>
            <li><router-link to="/characters">Personajes</router-link></li>
            <li><router-link to="/profile">Perfil</router-link></li>
        </ul>
    </nav>
</template>

<script>
export default {
    data() {
        return {}
    }
};
</script>

<style>
    .nav-bar {
        background-color: rgba(0, 0, 0, 0.7);
        padding: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .nav-bar h2 {
        color: #fff;
        margin: 0;
    }

    .nav-bar ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        gap: 20px;
    }

    .nav-bar ul li {
        display: inline;
    }

    .nav-bar ul li a {
        color: #fff;
        text-decoration: none;
        font-weight: bold;
    }

    .nav-bar ul li a:hover {
        text-decoration: underline;
    }
</style>
