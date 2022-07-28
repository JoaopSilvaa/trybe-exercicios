import connection from "../models/connection";
import UserModel from "../models/user.model";
import User from "../interfaces/user.interface";
import { NotFoundError, BadRequestError } from "restify-errors";

export default class UserService {
    public model: UserModel;

    constructor() {
        this.model = new UserModel(connection);
    };

    public async getAll(): Promise<User[]> {
        const users = await this.model.getAll();
        return users;
    };

    public async getById(id: number): Promise<User> {
        const user = await this.model.getById(id);
        return user;
    };

    public async create(user: User): Promise<Error | User> {
        const { email } = user;
        const findEmail = await this.model.getByEmail(email);
        if(findEmail) {
            throw new BadRequestError('BadRequestError');
        };

        const userCreated = await this.model.create(user);
        return userCreated;
    };

    public async update(id: number, user: User): Promise<void> {
        const findUser = await this.model.getById(id);

        if (!findUser) {
            throw new NotFoundError('NotFoundError');
        };

        return this.model.update(id, user);
    };

    public async remove(id: number): Promise<void> {
        const findUser = await this.model.getById(id);

        if (!findUser) {
            throw new NotFoundError('NotFoundError');
        };

        return this.model.remove(id);
    };
};

