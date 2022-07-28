import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/user.interface';

export default class UserModel {
    public connection: Pool;

    constructor(connection: Pool) {
        this.connection = connection;
    };

    public async getAll(): Promise<User[]> {
        const result = await this.connection.execute(
            'SELECT id, name, email FROM Users'
        );
        const [rows] = result;
        return rows as User[];
    };

    public async getById(id: number): Promise<User> {
        const result = await this.connection.execute(
            'SELECT id, name, email FROM Users WHERE id=?',
            [id],
        );
        const [rows] = result;
        const [user] = rows as User[];
        return user;
    };

    public async create(user: User): Promise<User> {
        const { name, email, password } = user;
        const result = await this.connection.execute<ResultSetHeader>(
            'INSERT INTO Users (name, email, password) VALUES (?, ?, ?)',
            [name, email, password],
        );
        const [dataIserted] = result;
        const { insertId } = dataIserted;
        return { id: insertId, ...user };
    };

    public async update(id: number, user: User) {
        const { name, email, password } = user;
        await this.connection.execute(
            'UPDATE Users SET name=?, email=?, password=? WHERE id=?',
            [name, email, password, id],
        );
    };

    public async remove(id: number) {
        await this.connection.execute(
            'DELETE FROM Users WHERE id=?',
            [id],
        );
    };

    public async getByEmail(email: string): Promise<User> {
        const result = await this.connection.execute(
            'SELECT * FROM Users WHERE email=?',
            [email],
        );
        const [rows] = result;
        const [user] = rows as User[];
        return user;
    };
};
