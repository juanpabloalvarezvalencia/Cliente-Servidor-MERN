import express from 'express';
import path from 'path';
import morgan from 'morgan';
import cors from 'cors';

const methodOverride = require('method-override'); //-> es para poder extender la funcionalidad de los formularios que solo tiene get y post. Este modulo nosda otros metodos como put, delete
const session = require('express-session'); //-> es para crear sessiones dentro del servidor, cuando el usuario se autentique guarde la session.
//const passport = require('passport');
const flash = require('connect-flash');//-> para mensajes entre vistas, cuando se equivoque mandamos un mensaje.


/////////////////////////////////////////////
//Inicializaciones
/////////////////////////////////////////////
const app = express();
require('./database');//Inicializamos la Base de Datos
//require('./config/passport');//Inicializamos el archivo de autenticación de usuario.


/////////////////////////////////////////////
//Settings -> todas nuestras configuraciones
/////////////////////////////////////////////
app.set('port', process.env.PORT || 3000);
app.set('views',path.join(__dirname,'cliente/views'));//Le decimos a node.js donde esta la carpeta views, para ello al path actual src, le concatenamos la carpeta cliente/views para que quede src/cliente/views


/////////////////////////////////////////////
//Middlewares -> funciones que van a ser ejecutadas antes que lleguen al servidor, o cuando lleguen al servidor antes de pasarle a las rutas
/////////////////////////////////////////////
//?
app.use(morgan('tiny'));
//?
app.use(cors()); //El Intercambio de Recursos de Origen Cruzado (CORS (en-US)) es un mecanismo que utiliza cabeceras HTTP adicionales para permitir que un user agent (en-US) obtenga permiso para acceder a recursos seleccionados desde un servidor, en un origen distinto (dominio) al que pertenece.
//?
app.use(express.json());
//aplication/x-www-form-urlencoded
app.use(express.urlencoded({extended: true }));//sirve para que cuando un formulario nos envie datos los podamos entender, y le dejamos extended: true o false, para que nos envien solo datos y no archivos o fotos

app.use(methodOverride('_method'));//nos sirve para que los formularios nos puedan mandar otros tipos de metodos ademas de get, post, podamos utilizar put, delete.

//Nos va a permitir autenticar el usuario y almacenar los datos de session.
app.use(session({
    secret: 'mysecretapp',
    resave: true,
    saveUninitialized: true
}));

//Utilizamos el middleware password y sesion para inicializar la sesion de usuario y guardar la sesion de usuario. Debo colocarlo siempre debajo de app.use(session)
//app.use(passport.initialize());
//app.use(passport.session());

//utilizamos el middleware flash
app.use(flash());

//?
const history = require('connect-history-api-fallback');
app.use(history());

/////////////////////////////////////////////
//Global Variables -> para colocar datos que queremos que sean accesibles en toda nuestra aplicacion
/////////////////////////////////////////////
//El siguiente codigo crea dos variales globales denominadas success_msg, error_msg, para tener los mensajes flash disponibles en cualquier vista.
app.use((req,res,next)=>{
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');//errores de config/passport de autenticación.
    res.locals.usuario = req.user || null;//Guardamos el Usuario cuando se autentiquite, para validar las rutas que debemos mostrar a quien esta logueado. En caso de que no este autenticado el valor sera null
    next();
});

/////////////////////////////////////////////
//Routes
/////////////////////////////////////////////
app.use(require('./routes/registro'));
app.use(require('./routes/login'));
app.use(require('./routes/usuario'));

app.use(require('./routes/bicicleta'));





/////////////////////////////////////////////
//Static Files -> configurar donde va estar nuestra carpeta de archivos estaticos
/////////////////////////////////////////////
app.use(express.static(path.join(__dirname,'cliente/public')));////Le decimos a node.js donde esta la carpeta public, para ello al path actual src, le concatenamos la carpeta cliente/public para que quede src/cliente/public


/////////////////////////////////////////////
//Server is listenning
/////////////////////////////////////////////
app.listen(app.get('port'), () =>{
    console.log('Server on port', app.get('port'));
});
