import { Router } from "express";
import userController from "./user.controller";



class UserRouter {
    public router = Router()

    constructor () {
        this.Routers()
    }

    public Routers () {
        this.router.get('/users', userController.getAllUser);
        this.router.post('/users', userController.createUser);
        this.router.get('/users/:userId', userController.getByIdUser);
        this.router.put('/users/:userId', userController.updateUser);
        this.router.delete('/users/:userId', userController.deleteUser);
    }

}

export default UserRouter;