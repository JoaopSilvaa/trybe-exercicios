const movieModel = require('../models/movieModel');

const isValid = (title, directBy, releaseYear) => {
    if (!title || typeof title !== 'string') return false;
    if (!releaseYear || typeof releaseYear !== 'number') return false;
    if (!directBy || typeof directBy !== 'string') return false;

    return true;
};

const create = async ({ title, directBy, releaseYear }) => {
    const isMovieValid = isValid(title, directBy, releaseYear);

    if(!isMovieValid) return false;

    const { id } = await movieModel.create({ title, directBy, releaseYear });

    return { id };
};

module.exports = {
    create,
}