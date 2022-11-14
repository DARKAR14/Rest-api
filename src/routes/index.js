//rutas
const { Router } = require("express");
const router = Router();

router.get('/', (req,res) => {
        const data = {
          "dev": "jorge kamilo peña silva",
          "cargo": "FullStack",
          "apipc": "/api/pc",
          "apijuicio": "/api/juicio"
                       
        };
        res.json(data);
})
module.exports = router;