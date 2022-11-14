const {Router} = require('express');
const router = Router();
const _ = require('underscore')
const jc = require('../json/juicio.json')


// metodo GET UwU
router.get('/', (req, res) =>{
    res.json(jc);
})

//metodo POST :3
router.post('/', (req, res)=> {
    const {nombre, caso, juez, pruebasv, pruebasf, veredicto}= req.body;// esto es una condicion de que si los datos no coinciden con el post no se almacenaran en ningun lugar 
if (nombre && caso && juez && pruebasv && pruebasf && veredicto) {

    const id = jc.length + 1;
    const newjc = {...req.body, id};
    pc.push(newjc);
    res.json('Guardado con exito mi rey UwU')
} else {
    res.send('Respuesta Invalida UnU')
    }
})

//metodo ATUALIZAR :3
router.put('/:id', (req,res) => {
const {id} = req.params;
const {nombre, caso, juez, pruebasv, pruebasf, veredicto}= req.body; 
if (nombre && caso && juez && pruebasv && pruebasf && veredicto) {
      _.each(jc, (jcu, i) => {
        if (jcu.id == id){
            jcu.img = img;
            jcu.marca = marca;
            jcu.precio = precio;
            jcu.procesador = procesador;
            jcu.grafica = grafica;
            jcu.ram = ram;
            jcu.pantalla = pantalla;
            jcu.tipo = tipo;
        }
      });
      res.json(pc);
} else {
    res.send('Error al actualizar datos UnU')
} 
});


//metodo ELIMINAR :3
router.delete('/:id', (req, res) => {
    const {id} = req.params;
    _.each(jc,(jcd, i) =>{
     if (jcd.id == id){
        jc.splice(i, 1);
     }
    });
    res.send(jc)
})
module.exports = router;