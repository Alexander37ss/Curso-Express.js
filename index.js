const express = require('express');
const routerApi = require('./routes/index');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/errorHandler');

const app = express();
const port = 3000;

app.use(express.json());

routerApi(app);

app.use(boomErrorHandler);
app.use(logErrors);
app.use(errorHandler);

app.get('/', (req, res) => {
  res.send('Pagina principal');
});

app.listen(port, () => {
console.log('Mi port' + port);
});
