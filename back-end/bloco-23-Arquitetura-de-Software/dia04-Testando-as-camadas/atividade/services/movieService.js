const movieModel = require('../models/movieModel');

const isValid = (title, directBy, releaseYear) => {
    if (!title || typeof title !== 'string') return false;
    if (!releaseYear || typeof releaseYear !== 'number') return false;
    if (!directBy || typeof directBy !== 'string') return false;

    return true;
};

const idIsValid = (id) => {
    if (!id || typeof id !== 'number') return false;

    return true;
}

const create = async ({ title, directBy, releaseYear }) => {
    const isMovieValid = isValid(title, directBy, releaseYear);

    if(!isMovieValid) return false;

    const { id } = await movieModel.create({ title, directBy, releaseYear });

    return { id };
};

const getById = async (id) => {
    const isIdValid = idIsValid(id);

    if (!isIdValid) return false;

    const movie = await movieModel.getById(1);

    return movie;
};

module.exports = {
    create,
    getById,
}