const connection = require('./connection');
const Author = require('./Author');

const getAll = async () => {
    const [books] = await connection.execute('SELECT id, title, author_id FROM books');

    return books;
};

const getByAuthorId = async (author_id) => {
    const query = 'SELECT id, title, author_id FROM books WHERE author_id=?';

    const [books] = await connection.execute(query, [author_id]);

    return books;
}

const findBookById = async (id) => {
    const [books] = await connection.execute(
        'SELECT id, title, author_id FROM books WHERE id=?',
        [id]
    );

    if (books.length === 0) return null; 
    
    return books;
}

const isValid = async (title, author_id) => {
    if (!title || title.length < 3) return false;
    if (!author_id || !(await Author.findById(author_id))) return false;

    return true;
}

const create = async (title, author_id) => connection.execute(
    'INSERT INTO model_example.books (title, author_id) VALUES (?, ?)',
    [title, author_id]   
)

module.exports = {
    getAll,
    getByAuthorId,
    findBookById,
    isValid,
    create
}
