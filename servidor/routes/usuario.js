import express from "express";
const router = express.Router();

const Usuario = require('../models/Usuario');
//const passport = require('passport');

//////////////////////////
//LISTAR USUARIOS
//////////////////////////
const {verificarAuth} = require('../middlewares/autenticacion.js');

router.get('/usuario', verificarAuth , async(req, res) => {
    
    try {
        const usuarios = await Usuario.find();
        console.log(usuarios);
        return res.status(200).json(usuarios);
    } 
    catch (error) 
    {
        return res.status(500).json({
            mensaje:"Ocurrio un error",
            error
        })
    }    

});

 //exportamos la configuracion de express app
module.exports = router;