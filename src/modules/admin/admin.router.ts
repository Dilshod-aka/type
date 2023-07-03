import { Router } from "express";
import AdminController from "../admin/admin.controller";



class AdminRouter {
    public router = Router()

    constructor () {
        this.Routers()
    }

    public Routers () {
        this.router.get('/admin', AdminController.getAllAdmin);
        this.router.post('/admin', AdminController.createAdmin);
        this.router.get('/admin/:adminId', AdminController.getByIdAdmin);
        this.router.put('/admin/:adminId', AdminController.updateAdmin);
        this.router.delete('/admin/:adminId', AdminController.deleteAdmin);
    }

}

export default AdminRouter;