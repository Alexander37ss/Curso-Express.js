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

router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'created',
    data: body
  })
})

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'updated',
    data: body,
    id
  })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'deleted',
    id
  })
})

module.exports = router;
