const express = require('express');

const app = express();

app.listen(3000, () => {
    console.log('Servidor Corriendo');
    app.get('/', (req,res) => {
        res.send('Hola Mundo');
    })
});

app.get('/', function(req,res)  {
    res.send('Bienvenido al barra')
});


app.get('/contacto', function(req,res)  {
    res.send('Deja tu contacto ahora    aaaaaaaaaaaaaaa')
});