const jwt = require('jsonwebtoken');

const secret = 'segredoshiiiu';

const validateUser = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) return res.status(401).json({ error: { message: 'Token not found' } });

    try {
        const decoded = jwt.verify(token, secret);
        const { username, admin } = decoded;
        req.response = { username, admin };
        next();
    } catch (err) {
        return res.status(401).json({ error: { message: err.message } });
    }
};

module.exports = {
    validateUser,
};
