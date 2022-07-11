const express = require('express');
const jwt = require('jsonwebtoken');

const { validateUser } = require('./middlewares/auth');

const app = express();

app.use(express.json());

const secret = 'segredoshiiiu';

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) return res.status(401).json({ message: 'login invalid' });

    if (typeof username != 'string' || username.length < 5) return res.status(401).json({ message: 'username invalid' });

    if (typeof password != 'string' || username.length < 5) return res.status(401).json({ message: 'password invalid' });

    if (username === 'admin' && password === 's3nh4S3gur4???') {
        const jwtConfig = {
            expiresIn: '1h',
            algorithm: 'HS256',
        };
    
        const token = jwt.sign({ username, admin: true }, secret, jwtConfig);
    
        return res.status(201).json({ token });
    }

    const jwtConfig = {
        expiresIn: '1h',
        algorithm: 'HS256',
    };

    const token = jwt.sign({ username, admin: false }, secret, jwtConfig);

    res.status(201).json({ token });
});

app.get('/users/me', validateUser, (req, res) => {
    const { response } = req;
    
    return res.status(200).json(response);
});

app.get('/top-secret', validateUser, (req, res) => {
    const { admin } = req.response;
    
    if (admin === false) return res.status(403).json({ error: { message: 'Restricted access' } });

    if (admin === true) return res.status(200).json({ secretInfo: "Peter Parker é o Homem-Arannha"});
});

app.post('signup', (req, res) => {
    if (!username || !password) return res.status(401).json({ message: 'login invalid' });

    if (typeof username != 'string' || username.length < 5) return res.status(401).json({ message: 'username invalid' });

    if (typeof password != 'string' || username.length < 5) return res.status(401).json({ message: 'password invalid' });

    
});

app.listen(3000, () => console.log('App listening in pot 3000'));