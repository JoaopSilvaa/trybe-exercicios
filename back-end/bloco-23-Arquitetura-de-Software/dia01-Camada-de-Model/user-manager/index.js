const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const User = require('./models/User');

app.use(bodyParser.json());

app.post('/user', async (req, res) => {
    const { first_name, last_name, email, password } = req.body;

    const response = User.isValid(first_name, last_name, email, password);
    if(response.length !== 0) return res.status(404).json({error: true, message: response.map((error) => error)});
   
    await User.create(first_name, last_name, email, password);
    res.status(201).json(await User.findUser(first_name, last_name, email, password));
});

app.get('/user', async (_req, res) => {
    res.status(200).json(await User.getAll());
});

app.get('/user/:id', async (req, res) => {
    const { id } = req.params;

    const user = await User.findById(id);
    if (!user) return res.status(404).json({ error: true, message: 'Usuário não encontrado' });

    res.status(200).json(user);
});

app.put('/user/:id', async (req, res) => {
    const { first_name, last_name, email, password } = req.body;
    const { id } = req.params;
    const response = User.isValid(first_name, last_name, email, password);
    if(response.length !== 0) return res.status(404).json({error: true, message: response.map((error) => error)});
    const user = await User.updateById(id, req.body);
    if(!user) return res.status(404).json({ error: true, message: 'Usuário não encontrado' });
    res.status(200).json(user);
});

app.listen(3000, () => console.log('Online'));