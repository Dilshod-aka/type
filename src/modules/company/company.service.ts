import db from '../../db/pg'


class CompanyService {
    async getAll() {
        const company = await db.fetchAll('SELECT * FROM company');
        return company;
    }

    async createCompany(company_name: string, company_img: string) {
        const company = await db.fetchAll(
            `INSERT INTO company(company_name, company_img) VALUES ($1, $2)`,
            [company_name, company_img]
        );
        return company;
    }

    async updateCompany(company_id: number, company_name: string, company_img: string) {
        const company = await db.fetchAll(
            `UPDATE 
               company 
               SET 
               company_name  = $2,
               company_img = $3
                  updated_at = current_timestamp
               WHERE id = $1
               RETURNING *`,
            [company_id, company_name, company_img] 
        );
        return company;
    }

    async deleteCompany(companyId: number) {
        const company = await db.fetchAll('DELETE FROM company WHERE company_id = $1 RETURNING *', [companyId]);
        return company;
    }
    async getById(companyId: number) {
        const [company] = await db.fetchAll('SELECT * FROM company WHERE company_id = $1', [companyId]);
        return company;
    }
}

export default new CompanyService();