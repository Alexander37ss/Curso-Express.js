const express = require('express');

const categoriesRouter = require('./categoriesRouter');
const productsRouter = require('./productsRouter');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
}

module.exports = routerApi;
