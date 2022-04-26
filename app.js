// Usando un objeto express
const express = require('express');
// App de express
const app = express();
// Puesrto para ve la app localhost:5000
const port = 5000;

// Path inicial, respondera a la url localhost:5000
app.get('/', (req, res) => {
    res.send("Hola mundo!")
})

// Ruta adicional
// localhost:5000/launchx
app.get('/launchx', (req, res) => {
    res.send("Bienvenidos a Launch X!")
})

// Regresando un objeto
// localhost:5000/explorersInNode
app.get('/explorersInNode', (req, res) => {
    const explorer = {name: "Explorer", msg: "Hola"};
    res.send(explorer)
})

// Query Params: Recibir parámetros por la url
// localhost:5000/explorers/and
app.get('/explorers/:explorerName', (req, res) => {
    res.send(req.params)
})

// Inicializando app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})