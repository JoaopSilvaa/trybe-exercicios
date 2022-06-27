const productsModel = require('../models/Products');

const listAll = (_req, res) => {
    try {
        const data = productsModel.getAll();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: 'Algo deu ruim' });
    }
}

module.exports = {
    listAll
}