const express = require('express');
const bodyParser = require('body-parser');
const { validateProductName, validateInfos, validateSaleDate, validateWarrentyPeriod } = require('./authMiddleware');

const app = express();
app.use(bodyParser.json());

app.post('/sales', validateProductName, validateInfos, validateSaleDate, validateWarrentyPeriod, (_req, res) => {
    
    res.status(201).json({message: 'Venda cadastrada com sucesso'});
});

app.listen(3002, () => {console.log('Aplicação iniciada!'); } )
