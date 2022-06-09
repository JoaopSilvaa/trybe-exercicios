const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const fs = require('fs');

app.get('/ping', function(req, res) {
    res.status(200).json({message: 'pong'});
});

app.post('/hello', function(req, res) {
    const { name } = req.body;
    res.status(200).json({message: `Hello, ${name}!`});
});

app.post('/greetings', function(req, res) {
    const { name, age } = req.body;
    if(age <= 17) return res.status(401).json({message: 'Unauthorized'});

    res.status(200).json({message: `Hello, ${name}!`});
});

app.put('/users/:name/:age', function(req, res) {
    const { name, age } = req.params;
    res.status(200).json({message: `Seu nome é ${name} e você tem ${age} anos de idade`});
});

app.get('/simpsons', function (req, res) {
    const simpsons = JSON.parse(fs.readFileSync('./simpsons.json', 'utf-8'));
    res.status(200).json(simpsons);
});

app.get('/simpsons/:id', function(req, res) {
    const { id } = req.params;
    const simpsons = JSON.parse(fs.readFileSync('./simpsons.json', 'utf-8'));

    const simpson = simpsons.find((s) => s.id === id);
    if(!simpson) return res.status(404).json({message: 'simpson not found'});

    res.status(200).json(simpson);
});

app.post('/simpsons', function(req, res) {
    const { id, name } = req.body;
    const simpsons = JSON.parse(fs.readFileSync('./simpsons.json', 'utf-8'));

    const simpson = simpsons.find((s) => s.id === id);
    if(simpson) return res.status(409).json({message: 'id already exists'});
    simpsons.push({id, name});
    fs.writeFileSync('./simpsons.json', JSON.stringify(simpsons));
    res.status(204).end();
});

app.listen(3001);