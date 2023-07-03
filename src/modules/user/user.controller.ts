import { Request, Response } from "express";
import userService from "./user.service";

class UserController {

    async getAllUser(req: Request, res: Response): Promise<void> {
        const users = await userService.getAll()
        res.send(users)
    }
    async createUser(req: Request, res: Response): Promise<void> {
        const {username, password } = req.body
        const users = await userService.createUser(username,password);
        res.status(201).send(users);
    }
    async updateUser(req: Request, res: Response): Promise<void> {
        const {username } = req.body;
        const { userId} = req.params;
        const users = await userService.updateUser(+userId, username);
        res.status(201).send(users);
    }
    async deleteUser(req: Request, res: Response): Promise<void> {
        const { userId} = req.params;
        const users = await userService.deleteUser(+userId);
        res.status(201).send(users);
    }
    async getByIdUser(req: Request, res: Response): Promise<void> {
        const { userId} = req.params;
        const users = await userService.deleteUser(+userId);
        res.status(201).send(users);
    }
}

export default new UserController();