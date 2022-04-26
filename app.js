// Usando un objeto express
const express = require('express');
// App de express
const app = express();
// Puesrto para ve la app localhost:5000
const port = 5000;

// Path inicial, respondera a la url localhost
app.get('/', (req, res) => {
    res.send("Hola mundo!")
})

// Inicializando app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})