import db from '../../db/pg'


class AdminService {
    async getAll() {
        const admin = await db.fetchAll('SELECT * FROM admin');
        return admin;
    }

    async createAdmin(username: string, password: string) {
        const admin = await db.fetchAll(
            `INSERT INTO car(username, password) VALUES ($1, $2)`,
            [username, password]
        );
        return admin;
    }

    async updateAdmin(adminId: number, username: string) {
        const admin = await db.fetchAll(
            `UPDATE 
               admin
               SET 
                 username = $2,
                  updated_at = current_timestamp
               WHERE id = $1
               RETURNING *`,
            [adminId, username] 
        );
        return admin;
    }

    async deleteAdmin(adminId: number) {
        const admin = await db.fetchAll('DELETE FROM admin WHERE admin_id = $1 RETURNING *', [adminId]);
        return admin;
    }
    async getById(adminId: number) {
        const [admin] = await db.fetchAll('SELECT * FROM admin WHERE id = $1', [adminId]);
        return admin;
    }
    async login(username: string, password:string){
        const admin = await db.fetchAll('SELECT * FROM admin WHERE username = $1 and password = $2', [username, password]);
        return admin;
    }
}

export default new AdminService();