const express = require('express');
const morgan = require('morgan');
const app = express();

// correr programa npm run dev @w@

// esta api esta echa para motivos educativos nada mas la api de pc es para la app movil de paula UwU Y la de juicio para daniel, no creo actualizar esta api hasta el momento ya que solo sera para motivos de un solo uso 
// no creo meterle base de datos hastaaa el momento pero eh dejado digamoslo que buena documentacion por si alguien mas ve esta cosa 
// Author: Jorge Kamilo Peña Silva

//Configuracion
app.set('port',  process.env.PORT || 3000);
app.set('json spaces', 2);

//middlewares "esto procesa los datos antes de que lleguen al backend"

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))
app.use(express.json());

//Importo las rutas
app.use(require('./routes/index'));// creador de la api 
app.use('/api/pc',require('./routes/pc'));//API para la app movil de Pautter05
app.use('/api/juicio',require('./routes/juicio'));//API para la pagina de juicio de Daniel vargas

//aqui empieza el servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})