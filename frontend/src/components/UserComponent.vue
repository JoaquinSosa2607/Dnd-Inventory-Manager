<template>
    <div class="container">
        <form >
            <div class="">
                <label>Ingrese su correo electrónico</label>
                <input type="text" placeholder="Email">
            </div>
            <div>
                <label>Ingrese su contraseña</label>
                <input type="text" placeholder="Password">
            </div>
            <button class="btn btn-danger">Ingresar</button>
        </form>
    </div>
</template>
<style scoped>
.container {
    margin: 25px;
    padding: 10px;
    background-color: gray;
    border-radius: 15%;
    width: 400px;
    height: 300px;
    align-items: center;
    justify-self: center;
    display: grid;
}
</style>
