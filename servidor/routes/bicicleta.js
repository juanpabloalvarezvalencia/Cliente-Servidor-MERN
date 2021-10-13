import express from "express";
const router = express.Router();
const Bicicleta = require('../models/Bicicleta');
// Middlewares
const { verificarAuth } = require("../middlewares/autenticacion");

//////////////////////////
//Listar todas las Bicicletas de un usuario registrado
//////////////////////////
router.get('/bicicleta', verificarAuth, async(req, res) => {
    try 
    {
        const bicicletas = await Bicicleta.find({usuario_id: req.usuario._id }).sort({created_at:'desc'});   
        res.status(200).json(bicicletas);
    }
    catch (error) 
    {
        return res.status(400).json({
            mensaje:"Ocurrio un error",
            error
        })
    }
});

//////////////////////////
//Agregar
//////////////////////////
//Agregar una Bicicleta
router.post('/bicicleta', verificarAuth, async(req, res) => {
   
    const body = req.body;
    body.usuario_id = req.usuario._id;
    try
    {
        const bicicletaDB = await Bicicleta.create(body);
        res.status(200).json(bicicletaDB); 
    } 
    catch (error) 
    {
        return res.status(500).json({
            mensaje:"Ocurrio un error",
            error
        })
    }
});

//////////////////////////
//consultar
//////////////////////////
router.get('/bicicleta/:id', verificarAuth, async(req, res) => {
    const id = req.params.id;
    try 
    {
        const bicicleta = await Bicicleta.findOne({_id: id});
        res.status('200').json(bicicleta);
    } 
    catch (error) 
    {
        return res.status(500).json({
            mensaje:"Ocurrio un error",
            error
        })
    }
});

//////////////////////////
//Actualizar
//////////////////////////
router.put('/bicicleta/:id', verificarAuth, async(req, res) => {
    const id = req.params.id;
    const body = req.body;
    try 
    {
        const errores = [];
        const {marca,color} = req.body;

        if(!marca){
            errores.push({text:'Por favor ingresa la Marca'});
        }
        if(!color){
            errores.push({text:'Por favor ingresa el Color'});
        }
        if(errores.length > 0)
        {
            const bicicleta = await Bicicleta.findById(req.params.id);
            res.render('bicicleta',{marca,color});
            console.log(errores);
        }
        else
        {
            //Almacenar en la Base de Datos si pasa la validación
            //Aqui podemos utilizar el Modelo Bicicleta
            //await Bicicleta.findByIdAndUpdate(req.params.id,{marca,color});
    
            //Utilizamos el módulo flash para mostrar un mensaje de exito
            //req.flash('success_msg','Bicicleta Actualizada exitosamente');
            //res.redirect('/nota');

            const bicicletaDB = await Bicicleta.findByIdAndUpdate(id,body,{new:true});
            res.status(200).json(bicicletaDB);
        }
        
    } catch (error) 
    {
        return res.status(500).json({
            mensaje:"Ocurrio un error",
            error
        })
    }
});

//////////////////////////
//Eliminar
//////////////////////////
router.delete('/bicicleta/:id',verificarAuth, async(req, res) =>{
    
    const _id = req.params.id;
    try 
    {
        const bicicletaDB = await Bicicleta.findByIdAndDelete({_id});
        if(!bicicletaDB)
        {
            return res.status(400).json({mensaje:"No se encontro el id indicado"})
        }
        //Utilizamos el módulo flash para mostrar un mensaje de exito
        //req.flash('success_msg','Nota Elimninada exitosamente');
        //res.redirect('/nota',{nota});
        res.status(200).json(bicicletaDB);
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