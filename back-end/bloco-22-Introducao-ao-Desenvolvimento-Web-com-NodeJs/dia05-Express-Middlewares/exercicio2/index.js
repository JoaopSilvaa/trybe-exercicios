const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const { validateProductName, validateInfos, validateSaleDate, validateWarrentyPeriod, validateSignup, validateUser } = require('./authMiddleware');

const app = express();
app.use(bodyParser.json());

const geraToken = () => {
    return crypto.randomBytes(8).toString('hex');
}


app.post('/signup', validateSignup, (_req, res) => {
    res.status(200).json({ token: geraToken()});
});

app.use(validateUser)

app.post('/sales', validateProductName, validateInfos, validateSaleDate, validateWarrentyPeriod, (_req, res) => {
    
    res.status(201).json({message: 'Venda cadastrada com sucesso'});
});

app.listen(3002, () => {console.log('Aplicação iniciada!'); } )
