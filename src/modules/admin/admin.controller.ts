import { Request, Response } from "express";
import adminService from "./admin.service";
import AdminService from "./admin.service";
const jwt = require("jsonwebtoken")

class AdminController {

    async getAllAdmin(req: Request, res: Response): Promise<void> {
        const admin = await AdminService.getAll()
        res.send(admin)
    }
    async createAdmin(req: Request, res: Response): Promise<void> {
        const {username, password } = req.body
        const admin = await AdminService.createAdmin(username,password);
        res.status(201).send(admin);
    }
    async updateAdmin(req: Request, res: Response): Promise<void> {
        const {username } = req.body;
        const { userId} = req.params;
        const admin = await AdminService.updateAdmin(+userId, username);
        res.status(201).send(admin);
    }
    async deleteAdmin(req: Request, res: Response): Promise<void> {
        const { carId} = req.params;
        const admin = await AdminService.deleteAdmin(+carId);
        res.status(201).send(admin);
    }
    async getByIdAdmin(req: Request, res: Response): Promise<void> {
        const { adminId} = req.params;
        const admin = await AdminService.deleteAdmin(+adminId);
        res.status(201).send(admin);
    }

    async login(req: Request, res: Response): Promise<void>{
        const {username, password} = req.body;
        const admin = await  adminService.login(username, password);
        if(!admin){
            throw new Error("username or password")
        }
        res.status(203).json({message: 'success', access_token: jwt.sign({adminId: admin.admin_id})})
    }
}

export default new AdminController();