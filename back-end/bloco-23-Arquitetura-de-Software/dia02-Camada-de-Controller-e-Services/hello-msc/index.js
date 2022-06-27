const express = require('express');
const bodyParser = require('body-parser');
const errorMiddleware = require('./middlewares/error');
const rescue = require('express-rescue');

const app = express();

app.use(errorMiddleware);
app.use(bodyParser.json());

const Author = require('./controllers/Author');

app.get('/authors', rescue(Author.getAll));

app.get('/authors/:id', rescue(Author.findById));
  
app.post('/authors', rescue(Author.create));

  
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});