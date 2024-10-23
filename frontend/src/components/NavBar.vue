<template>
    <nav class="nav-bar">
        <h2>Bienvenido {{ name }}</h2>
        <ul>
            <li><a href="#">Inventario</a></li>
            <li><a href="#">Personajes</a></li>
            <li><a href="#">Perfil</a></li>
        </ul>
    </nav>
</template>

<script>
export default {
    props: ["name"],
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
