import db from '../../db/pg'


class UserService {
    async getAll() {
        const users = await db.fetchAll('SELECT * FROM users');
        return users;
    }

    async createUser(username: string, password: string) {
        const users = await db.fetchAll(
            `INSERT INTO users(username, password) VALUES ($1, $2)`,
            [username, password]
        );
        return users;
    }

    async updateUser(userId: number, username: string) {
        const users = await db.fetchAll(
            `UPDATE 
               users
               SET 
                 username = $2,
                  updated_at = current_timestamp
               WHERE id = $1
               RETURNING *`,
            [userId, username] 
        );
        return users;
    }

    async deleteUser(userId: number) {
        const users = await db.fetchAll('DELETE FROM users WHERE id = $1 RETURNING *', [userId]);
        return users;
    }
    async getById(userId: number) {
        const [user] = await db.fetchAll('SELECT * FROM users WHERE id = $1', [userId]);
        return user;
    }
}

export default new UserService();