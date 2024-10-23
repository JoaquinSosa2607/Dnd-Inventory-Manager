<template>
    <div class="inventory-sheet">
        <header>
            <h1>Hoja de Inventario</h1>
            <h2>Nombre del Personaje: <span id="character-name">Nombre del Personaje</span></h2>
        </header>

        <section class="inventory-section">
            <h3>Escudos y Armaduras</h3>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Tipo</th>
                        <th>CA</th>
                        <th>Peso</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Escudo de Madera</td>
                        <td>Escudo</td>
                        <td>2</td>
                        <td>6 lb</td>
                    </tr>
                </tbody>
            </table>
        </section>

        <section class="inventory-section">
            <h3>Armas</h3>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Tipo</th>
                        <th>Daño</th>
                        <th>Peso</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Espada Larga</td>
                        <td>Cuerpo a Cuerpo</td>
                        <td>1d8</td>
                        <td>3 lb</td>
                    </tr>
                </tbody>
            </table>
        </section>

        <section class="inventory-section">
            <h3>Varitas y Anillos</h3>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Efecto</th>
                        <th>Usos Restantes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Varita de Fuego</td>
                        <td>Lanza Conjuro de Fuego</td>
                        <td>3</td>
                    </tr>
                </tbody>
            </table>
        </section>

        <section class="inventory-section">
            <h3>Pociones y Sustancias</h3>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Efecto</th>
                        <th>Cantidad</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Poción de Curación</td>
                        <td>Restaura 2d4+2 HP</td>
                        <td>2</td>
                    </tr>
                </tbody>
            </table>
        </section>

        <section class="inventory-section">
            <h3>Oro y Otros Valiosos</h3>
            <table>
                <thead>
                    <tr>
                        <th>Tipo</th>
                        <th>Cantidad</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Oro</td>
                        <td>50</td>
                    </tr>
                </tbody>
            </table>
        </section>
    </div>
</template>

<style scoped>

    body {
        font-family: Arial, sans-serif;
        background-color: #f0f0f0;
        margin: 100px;
        padding: 20px;
    }

    .inventory-sheet {
        background-color: rgba(255, 255, 255, 0.9);
        border: 2px solid #000;
        border-radius: 10px;
        padding: 20px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        max-width: 800px;
        margin: auto;
    }

    header {
        text-align: center;
        margin-bottom: 20px;
    }

    h1 {
        color: rgb(145, 24, 24);
        font-size: 24px;
    }

    h2 {
        font-size: 18px;
    }

    .inventory-section {
        margin-bottom: 20px;
    }

    h3 {
        background-color: rgb(145, 24, 24);
        color: white;
        padding: 10px;
        border-radius: 5px;
    }

    table {
        width: 100%;
        border-collapse: collapse;
    }

    th, td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }

    th {
        background-color: rgba(145, 24, 24, 0.8);
        color: white;
    }

    tbody tr:hover {
        background-color: rgba(145, 24, 24, 0.1);
    }
</style>