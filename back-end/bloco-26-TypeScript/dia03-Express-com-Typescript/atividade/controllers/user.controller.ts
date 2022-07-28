import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import UserService from "../services/user.service";

export default class UserController {
    public service: UserService;

    constructor() {
        this.service = new UserService();
    };

    public getAll = async (_req: Request, res: Response) => {
        const users = await this.service.getAll();
        
        res.status(StatusCodes.OK).json(users);
    };

    public getById = async (req: Request, res: Response) => {
        const id = Number(req.params.id);

        const user = await this.service.getById(id);

        if (!user) {
            return res.status(StatusCodes.NOT_FOUND)
                .json({ message: 'User not found' });
        };

        res.status(StatusCodes.OK).json(user);
    };

    public create = async (req: Request, res: Response) => {
        const user = req.body;

        const userCreated = await this.service.create(user);
        

        res.status(StatusCodes.CREATED).json(userCreated);
    };

    public update = async (req: Request, res: Response) => {
        const user = req.body;
        const id = Number(req.params.id);

        await this.service.update(id, user);

        res.status(StatusCodes.NO_CONTENT).end();
    };

    public remove = async (req: Request, res: Response) => {
        const id = Number(req.params.id);

        await this.service.remove(id);

        res.status(StatusCodes.OK).json({ message: 'User deleted successfully!' });
    };
};
