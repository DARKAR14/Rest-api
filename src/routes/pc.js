const {Router} = require('express');
const router = Router();
const _ = require('underscore')
const pc = require('../json/pc.json')


// metodo GET UwU
router.get('/', (req, res) =>{
    res.json(pc);
})

//metodo POST :3
router.post('/', (req, res)=> {
    const {img, marca, precio, procesador, grafica, ram, pantalla, tipo}= req.body;// esto es una condicion de que si los datos no coinciden con el post no se almacenaran en ningun lugar 
if (img && marca && precio && procesador && grafica && ram && pantalla && tipo) {

    const id = pc.length + 1;
    const newPC = {...req.body, id};
    pc.push(newPC);
    res.json('Guardado con exito mi rey UwU')
} else {
    res.send('Respuesta Invalida UnU')
    }
})

//metodo ATUALIZAR :3
router.put('/:id', (req,res) => {
const {id} = req.params;
const {img, marca, precio, procesador, grafica, ram, pantalla, tipo}= req.body;
if (img && marca && precio && procesador && grafica && ram && pantalla && tipo) {
      _.each(pc, (pcu, i) => {
        if (pcu.id == id){
            pcu.img = img;
            pcu.marca = marca;
            pcu.precio = precio;
            pcu.procesador = procesador;
            pcu.grafica = grafica;
            pcu.ram = ram;
            pcu.pantalla = pantalla;
            pcu.tipo = tipo;
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
    _.each(pc,(pcd, i) =>{
     if (pcd.id == id){
        pc.splice(i, 1);
     }
    });
    res.send(pc)
})
module.exports = router;