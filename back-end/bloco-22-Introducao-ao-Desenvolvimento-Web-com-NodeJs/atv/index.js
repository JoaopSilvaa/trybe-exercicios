const express = require('express');
const bodyParser = require('body-parser');
const { validateEmail, validateUsername, validatePassword } = require('./userMiddlware');

const app = express();
app.use(bodyParser.json());

app.post('/user/register', 
    validateEmail,
    validateUsername,
    validatePassword,
    (_req, res) => {
        res.status(201).json({message: 'user created'})
});

app.listen(3001, () => console.log('online'));