require('./config/config')

const express = require('express');
const app = express();

//se declara el uso de paquete
const bodyParser = require('body-parser');

//para procesar peticiones application/x-www-form-urlencoded
//APP.USE son middleware
//cada peticion que hagamos va a pasar por estas lineas
//funciona para POST GET DELETE PUT
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/usuario', function(req, res) {
    res.json('get Usuario');
});

//crear registro
app.post('/usuario', function(req, res) {

    //x-www-form-form-urlencoded npm body parser
    let body = req.body;

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: "el nombre es necesario"
                //, error: errros

        });
    } else {
        res.status(201).json({
            // res.json({
            persona: body
        });
    }


});

//put patch actualizar registro
//si en :id tuviera otra palabra :ides
app.put('/usuario/:id', function(req, res) {

    //aca deveria ir lo mismo :ides
    let id = req.params.id;

    res.json({
        id
    });
});

//delete cambiar flag estado de un usuario
app.delete('/usuario', function(req, res) {
    res.json('delete Usuario');
});

app.listen(process.env.PORT, () => {
    console.log(`Escuchando en el puerto ${process.env.PORT}`);
});