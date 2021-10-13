import express from "express";
const router = express.Router();
const Usuario = require('../models/Usuario');
//const passport = require('passport');
var bcrypt = require('bcryptjs');

//////////////////////////
//REGISTRO
//////////////////////////
router.post('/registro', async(req, res) => {
    
    console.log(req.body);    
    const errores = [];
 
    try{
        
        const emailUsuario = await Usuario.findOne({email: req.body.email}); //Verificamos que no exista un email registrado.

        if(!req.body.nombre)
        {
            //errores.push({text:'El Nombre es Obligatorio.'});
            return res.json({message: 'El Nombre es Obligatorio.'});
        }
        if(!req.body.email)
        {
            //errores.push({text:'El Email es Obligatorio.'});
            return res.json({message: 'El Email es Obligatorio.'}); 
        }
        if(!req.body.password)
        {
            //errores.push({text:'El Password es Obligatorio.'});
            return res.json({message: 'El Password es Obligatorio.'}); 
        }
        if(emailUsuario)
        {
            //errores.push({text:'El email ingresado ya se encuentra registrado.'});
            return res.json({message: 'El email ingresado ya se encuentra registrado'}); 
        }
        if(req.body.password != req.body.confirm_password)
        {
            //errores.push({text:'El Password No Concuerda.'});
            return res.json({ message: 'El Password No Concuerda'});
        }
        if(errores.length > 0){
            //return res.status(200).json(errores);
        }
        else
        {
            req.body.password = await bcrypt.hash(req.body.password,10);
            
            await Usuario.create(req.body);
            return res.status(200).json("Ok");
        }
     } catch (error) 
     {
        return res.status(500).json({mensaje:"Ocurrio un error",error})
     }
});

//exportamos la configuracion de express app
module.exports = router;