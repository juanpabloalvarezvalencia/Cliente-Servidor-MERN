import mongoose from "mongoose";
const Schema = mongoose.Schema;

const bicicletaSchema=new Schema({

    marca:{type:String},
    color:{type:String},
    serial:{type:String},
    pais:{type:String},
    ciudad:{type:String},
    direccion:{type:String},
    descripcion:{type:String},
    nombre:{type:String},
    telefono:{type:String},
    email:{type:String},

    created_at:{type:Date, default:Date.now},
    updated_at:{type:Date, default:Date.now},

    usuario_id: {type:String, require:true},

});

//Convertir a modelo
module.exports = mongoose.model('Bicicleta',bicicletaSchema);

