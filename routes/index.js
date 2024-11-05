const categoriesRouter = require('./categoriesRouter');
const productsRouter = require('./productsRouter');

function routerApi(app) {
  app.use('/products', productsRouter);
  app.use('/categories', categoriesRouter);
}

module.exports = routerApi;
