const express= require('express');
const app= express();
const path = require('path');
const info = require('./productosJSON.json');
const titulo ="Hola soy Lucila";

//console.log(info)
app.use(express.json());

app.set('views',path.join(__dirname,'vistas'));
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));

app.get('/in',(req,res)=>{
    res.render('index');
    res.render('index',{
        titulo, //titulo :titulo
        dataProductos:info  //le paso a index la data que traje de productos.js
    });
});

app.get('/contacto',(req,res)=>{
    res.render('./pages/contacto');
});

app.listen(3000,()=>{
    console.log("Corriendo en el puerto 3000")
}); 
