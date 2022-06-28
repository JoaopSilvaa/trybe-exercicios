const connection = require('./connection');

const create = async ({ title, directBy, releaseYear }) => {
    const [result] = await connection.execute('INSERT INTO movies (title, direct_by, release_year) VALUES (?, ?, ?)', 
        [title, directBy, releaseYear]
    );

    return { id: result.insertId };
};

const getById = async (id) => {
    const [result] = await connection.execute('SELECT * FROM movies WHERE id=?', [id]);
    
    if (result.length === 0) return null;

    const { title, direct_by: directBy, release_year: releaseYear } = result[0];

    return {
        id,
        title,
        directBy,
        releaseYear,
    };
};

module.exports = {
    create,
    getById,
}