//Sintaxis commmand js
//iMPORTANDO EXPRESS
// const express = require('express');
import express from 'express';
import router from './routes/index.js'
import db from './config/db.js'


//Variables de entorno

import dotenv from 'dotenv';
dotenv.config({path: 'variables.env'})
//eEjecutando express
const app = express();



//conectar la base de datos
db.authenticate()
    .then(()=> console.log('base de datos conectada'))
    .catch(console.log)




//Habilitar PUG
app.set('view engine', 'pug');

//Obtener el año actual
app.use((req,res,next)=>{
    
    //Creando una variable en locals para mandarla a la vista
    const fecha = new Date();
    res.locals.fecha = fecha.getFullYear()
    res.locals.nombresitio = 'Agencia de Viajes'
    
    //Ya termine, vamos al siguiente middleware
    return next()
})

//Definir la carpeta publica
app.use(express.static('public'))


//agregar body parser para leer los datos del formulario
app.use(express.urlencoded({extended: true}))


//Agregando router
//use soporta get, patch, put, delete
app.use('/', router);




//Arranca el servidor con el metodo listen
//se le pasa como parametro el puerto

//Definir Puerto como variable de entorno
//cuando se sube al servidor, existe la variable y toma el puerto disponible
//en loca podemos crearla o escuchar por el puerto 4000
const port = process.env.PORT || 4000;

const host = process.env.HOST || '0.0.0.0';
app.listen(port, host, ()=>{
    console.log(`El servidor esta escuchando en el puerto ${port}`)
})
