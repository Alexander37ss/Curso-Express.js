const express = require('express');
const routerApi = require('./routes/index');

const { logErrors, handlerErrors } = require('./middlewares/errorHandler');

const app = express();
const port = 3000;

app.use(express.json());

routerApi(app);

app.use(logErrors);
app.use(handlerErrors);

app.get('/', (req, res) => {
  res.send('Pagina principal');
});

app.listen(port, () => {
console.log('Mi port' + port);
});
