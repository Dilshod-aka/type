import { Pool} from 'pg';


class Database {
    private pool: Pool

    constructor () {
        this.pool = new Pool({
            user: 'postgres',
            password: '2008',
            host: 'localhost',
            database: 'exam7',
            port: 5432
        })
    }

    public async fetchAll (SQL: string, params: any[] = []): Promise<any> {
        const client = await this.pool.connect()
        try{
            const {rows} = await client.query(SQL, params)
            return rows;
        } catch (error) {
            console.log(error);
        } finally {
            client.release()
        }
    }
}

export default new Database();