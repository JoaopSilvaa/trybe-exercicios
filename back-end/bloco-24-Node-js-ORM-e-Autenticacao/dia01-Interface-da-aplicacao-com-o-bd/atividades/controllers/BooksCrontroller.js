const bookService = require('../services/BooksService');

const getAll = async (_req, res) => {
    try {
        const books = await bookService.getAll();
        res.status(200).json(books);
    } catch {
        res.status(500).json({ message: 'Algo deu errado :(' })
    };
};

const getById = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await bookService.getById(id);
        if (!book) return res.status(404).json({ message: 'Book not found' });
        res.status(200).json(book);
    } catch {
        res.status(500).json({ message: 'Algo deu errado :(' })
    };
};

const create = async (req, res) => {
    try {
        const { title, author, pageQuantity } = req.body;
        const book = await bookService.create({ title, author, pageQuantity });
        res.status(201).json(book);
    } catch {
        res.status(500).json({ message: 'Algo deu errado :(' })
    };
};

const update = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, author, pageQuantity } = req.body;
        const book = await bookService.update(id, { title, author, pageQuantity });
        if(!book) return res.status(404).json({ message: 'Book not found' });
        res.status(201).json({ message: 'Book update' });

    } catch {
        res.status(500).json({ message: 'Algo deu errado :(' })
    };
};

const remove = async (req, res) => {
    try {
        const { id } = req.params;
        await bookService.remove(id);
        res.status(200).json({ message: 'Book deleted' });
    } catch {
        res.status(500).json({ message: 'Algo deu errado :(' })
    };
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove,
};