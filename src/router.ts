import  { Router } from "express";
import CarRouter from "./modules/car/car.router";
import CompanyRouter from "./modules/company/company.router";
import AdminRouter from "./modules/admin/admin.router";

const router = Router()

const carRouter = new CarRouter();
const companyRouter = new CompanyRouter()
const adminRouter = new AdminRouter();

router.use('/car', carRouter.router);
router.use('/', companyRouter.router);
router.use('/', adminRouter.router);

export default router;