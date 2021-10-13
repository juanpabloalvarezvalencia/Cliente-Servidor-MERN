const moongose = require('mongoose');

/////////////////////////////
// CONEXION MONGO LOCAL
/////////////////////////////
//const url = "mongodb://localhost:27017/biciregistro";
//const url = "mongodb://localhost/biciregistro";

/////////////////////////////
// CONEXION MONGO ATLAS
/////////////////////////////
const url = "mongodb+srv://juanpabloalvarezvalencia:06k2PI5pHob9P5uT@cluster0.kmkrr.mongodb.net/biciregistro?retryWrites=true&w=majority";

moongose.connect(url,{
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
.then(db => console.log('Conectado a la Base de Datos') )
.catch(err => console.error("No se puedo conectar a la base de datos: " + err));

