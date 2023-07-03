import { Request, Response } from "express";
import CompanyService from "./company.service";

class CompanyController {

    async getAllCompany(req: Request, res: Response): Promise<void> {
        const company = await CompanyService.getAll()
        res.send(company)
    }
    async createCompany(req: Request, res: Response): Promise<void> {
        const {company_name, company_img } = req.body;
        const company = await CompanyService.createCompany(company_name, company_img)
        res.status(201).send(company);
    }
    async updateCompany(req: Request, res: Response): Promise<void> {
        const {company_name, company_img } = req.body;
        const { companyId} = req.params;
        const company = await CompanyService.updateCompany(+companyId, company_name, company_img);
        res.status(201).send(company);
    }
    async deleteCompany(req: Request, res: Response): Promise<void> {
        const { companyId} = req.params;
        const company = await CompanyService.deleteCompany(+companyId);
        res.status(201).send(company);
    }
    async getByIdCompany(req: Request, res: Response): Promise<void> {
        const { companyId} = req.params;
        const company = await CompanyService.deleteCompany(+companyId);
        res.status(201).send(company);
    }
}

export default new CompanyController();