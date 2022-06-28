const connection = require('./connection');

const create = async ({ title, directBy, releaseYear }) => {
    const [result] = await connection.execute('INSERT INTO movies (title, direct_by, release_year) VALUES (?, ?, ?)', 
        [title, directBy, releaseYear]
    );

    return { id: result.insertId };
};

module.exports = {
    create,
}