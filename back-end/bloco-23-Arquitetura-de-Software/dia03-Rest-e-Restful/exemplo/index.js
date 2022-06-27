const express = require('express')
const productsController = require('./controllers/ProductsController')
const usersController = require('./controllers/UsersController');

const app = express();

app.use(express.json());

const PORT = 3000;

app.get('/products', productsController.listAll);

app.get('/users', usersController.listAll);

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
