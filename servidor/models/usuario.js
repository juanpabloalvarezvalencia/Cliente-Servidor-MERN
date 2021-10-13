import mongoose from "mongoose";
const Schema = mongoose.Schema;
const bcryptjs = require('bcryptjs');

const usuarioSchema=new Schema({
    nombre:{type:String, required:[true, 'El Nombre es Requerido']},
    email:{type:String, unique:[true, 'El Email ya esta registrado'], required:[true, 'El Email es Requerido']},
    password:{type:String, required:[true, 'El password es Requerido']},
    estado:{type:Boolean, default:true},    
    created_at:{type:Date, default:Date.now},
    updated_at:{type:Date, default:Date.now},
});

//Creamos una funcion para encriptar el password
usuarioSchema.methods.encryptPassword = async (password) => {
    const salt = await bcryptjs.genSalt(10);
    const hash = bcryptjs.hash(password,salt);
    return hash;
};

//Creamos una funcion para comparar si el password ingresado es igual al password encriptado en el modelo de datos
//Utilizamos function en vez de funcion flecha debido a que necesito utilizar this.password. y con flecha no se puede.
usuarioSchema.methods.matchPassword = async function(password){
    return await bcryptjs.compare(password, this.password);
};

module.exports = mongoose.model('Usuario',usuarioSchema);