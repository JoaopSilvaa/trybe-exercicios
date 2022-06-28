const movieService = require('../services/movieService');

const create = async (req, res) => {
    const { title, directBy, releaseYear } = req.body;

    const movie = await movieService.create({ title, directBy, releaseYear });

    if (!movie) {
        return res
            .status(400)
            .send('Dados inválidos');
    }

    return res 
        .status(201)
        .send('Filme criado com sucesso!');
};

module.exports = {
    create,
};