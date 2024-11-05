const express = require('express');
const productsServices = require('../services/categoriesServices');

const router = express.Router();
const service = new productsServices;

router.get('/', (req,res) => {
  const categories = service.find();
  res.json(categories);
});

router.get('/:id', (req,res) => {
  const { id } = req.params;
  const category = service.findOne(id);
  res.json(category);
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
  const categoryChanged = service.update(id, body);
  res.json(categoryChanged);
})

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const index = service.delete(id);
  res.json(index);
})

module.exports = router;
