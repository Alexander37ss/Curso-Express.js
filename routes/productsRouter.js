const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res) => {
  const products = [];
  const { limit } = req.query;
  const size = limit || 10;
  for (let index = 0; index < size; index++) {
    products.push({
    name: faker.commerce.productName(),
    price: parseInt(faker.commerce.price(), 10),
    image: faker.image.url()
  });
}
  res.json(products);
});

router.get('/filter', (req,res) => {
    res.send('Chaval, esto es un filtro');
  });

  router.get('/:id', (req,res) => {
  const { id } = req.params;
    res.json({
      id: id,
      name: "PS9",
      precio: 77777
    });
  });

  router.post('/', (req, res) => {
    const body = req.body;
    res.status(201).json({
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
