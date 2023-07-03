import { Router } from "express";
import CompanyController from "./company.controller";



class CompanyRouter {
    public router = Router()

    constructor () {
        this.Routers()
    }

    public Routers () {
        this.router.get('/company', CompanyController.getAllCompany);
        this.router.post('/company', CompanyController.createCompany);
        this.router.get('/company/:companyId', CompanyController.getAllCompany);
        this.router.put('/company/:companyId', CompanyController.updateCompany);
        this.router.delete('/company/:companyId', CompanyController.deleteCompany);
    }

}

export default CompanyRouter;