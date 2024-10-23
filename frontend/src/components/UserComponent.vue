<template>
    <div class="main">
        <h2>Inventario de <br />Dungeons & Dragons</h2>

        <form action="">
            <label for="email"> Email: </label>
            <input type="email" placeholder="Ingresa tu email" required />

            <label for="password"> Contraseña: </label>
            <input
                type="password"
                placeholder="Ingresa tu contraseña"
                required
            />

            <div class="wrap">
                <button type="submit">Submit</button>
            </div>
        </form>

        <p>
            No estás registrado?
            <a href="#"> Crea una cuenta </a>
        </p>
    </div>
</template>
<style scoped>
.main {
    margin: 100px;
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

h2 {
    color: rgb(145, 24, 24);
}

label {
    display: block;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 5px;
    text-align: center;
    color: rgb(145, 24, 24);
    font-weight: bold;
}

input {
    display: block;
    width: 80%;
    margin-bottom: 15px;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 5px;
    justify-self: center;
    align-self: center;
}

button {
    padding: 15px;
    border-radius: 10px;
    margin-top: 15px;
    margin-bottom: 15px;
    border: none;
    color: white;
    cursor: pointer;
    background-color: rgb(145, 24, 24);
    width: 25%;
    font-size: 16px;
}

.wrap {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
