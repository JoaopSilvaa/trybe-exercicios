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

const getById = async (req, res) => {
    const { id } = req.params;

    const movie = await movieService.getById(id);

    if(!movie) {
        return res
            .status(404)
            .send('Movie Not Found');
    }

    return res
        .status(200)
        .send(movie);

    //resolução do course
    // const findById = async (req, res) => {
    //     try {
    //         const { id } = req.params;
    //         const movie = await MoviesService.findById(id);
    //         if (!movie) {
    //         return res.status(404).send('Not Found');
    //         }
    //         res.status(200).json(movie);
    //     } catch (err) {
    //         res.status(500).json({ message: err.message });
    //     }
    //     };
}

module.exports = {
    create,
    getById,
};