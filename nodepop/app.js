
/**
 * Este fichero de app.js es el fichero principal de nuestra aplicación. Básicamente importa una serie de librerías, establece una serie de rutas, registramos nuestros modelos, establecemos nuestros controladores
 */

 //1. Primero carga una serie de librerías

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//2. Carga una serie de rutas

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//3. Crea una aplicación de express que llama app

var app = express();

//Cargamos el módulo de mongoose para conectar nuestra aplicación a la base de datos

require("./lib/connectMongoose");

//4. Comienza a configurar esa aplicación de express

// view engine setup
app.set('views', path.join(__dirname, 'views')); //__dirname en nodejs simboliza el directorio actual donde está este fichero y / views engloba las vistas
app.set('view engine', 'ejs'); //establece que el motor de vistas es ejs

// Cada uno de estos app.use son como esos jugadores de la partida de poker que deciden responder o pasar ante una petición. Empieza con el primero y le dice que si quiere hacer algo con esa petición. Si tiene programada una respuesta para esa petición, responde, si no, pasa. Todos los middleware tienen habitualmente 3 parámetros (req, res, next) salvo los middleware de error handler que también tienen el parámetro de error.

app.locals.title ="NodePOP" // A partir de este comando en app, cualquier vista tendrá acceso a la variable title NodeApi. Ya no se limitará a la ruta específica donde lo indiquemos

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter); // Aquí establece que cuando alguien haga una petición a la raiz del sitio, le está diciendo a nuestra aplicación que utilice este router para ver si hay que responder o no
app.use('/users', usersRouter);

// catch 404 and forward to error handler
//Cuando no encuentra el parámetro que le estamos pasando en la request crea un error de 404 y lo manda al error handler

app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//5. Una vez configurada la aplicación de express creada, la exporta para que pueda ser cargada en otro fichero. Lo importa luego de hecho el fichero www

module.exports = app;
