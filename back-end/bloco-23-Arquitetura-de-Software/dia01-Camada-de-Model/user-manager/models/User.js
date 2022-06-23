const connection = require('./connection');

const serialize = (users) => {
    return {
        id: users.id,
        firstName: users.first_name,
        lastName: users.last_name,
        email: users.email,
        password: users.password
    }
}

const create = async (firstName, lastName, email, password) => await connection.execute(
    'INSERT INTO users_crud.users (first_name, last_name, email, password) VALUES (?, ?, ?, ?) ',
    [firstName, lastName, email, password]
);

const findUser = async (firstName, lastName, email, password) => {
    const [users] = await connection.execute(
        'SELECT * FROM users WHERE first_name=? AND last_name=? AND email=? AND password=?',
        [firstName, lastName, email, password]
    ); 

    if (users.length === 0) return null;

    return serialize(users[0]);
};

const isValid = (firstName, lastName, email, password) => {
    const errors = []
    if (!firstName) errors.push("O campo 'first_name' é inválido")
    if (!lastName) errors.push("O campo 'last_name' é inválido")
    if (!email) errors.push("O campo 'email' é inválido")
    if (!password) errors.push("O campo 'password' é inválido")
    if (password.length < 6) errors.push("O campo 'password' deve ter pelo menos 6 caracteres")

    return errors;
}

const getAll = async () => {
    const [users] = await connection.execute('SELECT * FROM users');
    return users;
}

const findById = async (id) => {
    const [users] = await connection.execute(
        'SELECT * FROM users WHERE id=?',
        [id]
    );

    if (users.length === 0) return null

    return users[0];

}

const updateById = async (id, data) => {
    await connection.execute(
        'UPDATE users SET first_name=?, last_name=?, email=?, password=? WHERE id=?',
        [data.first_name, data.last_name, data.email, data.password, id]
    );

    return findById(id);
}

module.exports = {
    create,
    findUser,
    isValid,
    getAll,
    findById,
    updateById
}