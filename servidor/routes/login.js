import express from "express";
const router = express.Router();

const Usuario = require('../models/Usuario');
var bcrypt = require('bcryptjs');

//const passport = require('passport');

const jwt = require('jsonwebtoken');

//////////////////////////
//LOGIN
//////////////////////////
router.post('/login', async (req, res) => {

    try {
        console.log(req.body.email)
        console.log(req.body.password)

        const user = await Usuario.findOne({email: req.body.email});

        if (user) 
        {
            
            const match = await user.matchPassword(req.body.password);//validamos el password

            if (match) {

                // Generar Token
                let token = jwt.sign({ data: user }, 'secret', { expiresIn: 60 * 60 * 24 * 30}); // Expira en 30 días
                
                // Pasó las validaciones
                return res.status(200).json({user,token: token});
                
            } else {
                return res.json({message: 'Password Incorrecto'});
            }
        } 
        else 
        {
            return res.json({message: 'No existe el usuario'});
        }
    } 
    catch (e) 
    {
        return res.status(500).json({message: 'Ocurrió un error'});
    }
});

//exportamos la configuracion de express app
module.exports = router;