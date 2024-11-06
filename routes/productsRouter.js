const express = require('express');
const productsServices = require('../services/productsServices');

const router = express.Router();
const service = new productsServices;

router.get('/', (req, res) => {
  const products = service.find();
  res.json(products);
});

router.get('/filter', (req,res) => {
    res.send('Chaval, esto es un filtro');
  });

  router.get('/:id', async (req,res) => {
    try {
      const { id } = req.params;
      const product = await service.findOne(id);
      res.json(product);
    } catch (error) {
      res.status(404).json({message: error.message});
    }
  });

  router.post('/', (req, res) => {
    const body = req.body;
    const newProduct = service.create(body);
    res.status(201).json(newProduct);
  })

  router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const product = service.update(id, body);
    res.json(product);
  })

  router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const index = service.delete(id);
    res.json(index);
  })

  module.exports = router;
