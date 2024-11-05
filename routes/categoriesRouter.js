const express = require('express');

const router = express.Router();

router.get('/', (req,res) => {
  res.json([{
    id: 1,
    nombre: 'Consolas',
    cantidadProductos: '200'
  },
  {
    id: 2,
    nombre: 'Ordenadores',
    cantidadProductos: '1000'
  },
  {
    id: 3,
    nombre: 'Electrodomesticos',
    cantidadProductos: '1'
  }
]);
});

router.get('/:id', (req,res) => {
  const { id } = req.params;
  if(id == 1){
    res.json({
      id: id,
      nombre: 'Consolas',
      cantidadProductos: '200'
    });
  }else if(id == 2){
    res.json({
      id: id,
      nombre: 'Ordenadores',
      cantidadProductos: '1000'
    });
  }else{
    res.json({
      id: id,
      nombre: 'Electrodomesticos',
      cantidadProductos: '1'
    });
  }
});

module.exports = router;
