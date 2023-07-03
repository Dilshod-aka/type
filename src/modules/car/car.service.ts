import db from '../../db/pg'


class CarService {
    async getAll() {
        const cars = await db.fetchAll('SELECT * FROM car');
        return cars;
    }

    async createCar(car_markasi: string, car_motor: string, car_img: string, car_photo: string, car_albom: string, car_desc: string, car_cost: string, company_id: string) {
        const car = await db.fetchAll(
            `INSERT INTO car(car_markasi, car_motor, car_img, car_photo, car_albom, car_desc,  car_cost, company_id ) VALUES ($1, $2,  $3, $4,$5, $6, $7, $8 )`,
            [car_markasi, car_motor, car_img, car_photo, car_albom, car_desc,  car_cost, company_id]
        );
        return car;
    }

    async updateCar(car_markasi: string, car_motor: string, car_img: string, car_photo:string, car_albom: string, car_desc: string, car_year: string, car_cost: string, company_id: string) {
        const car = await db.fetchAll(
            `UPDATE 
               car
               SET 
                 car_markasi = $2, car_motor = $3, car_desc = $4, car_img = $5, car_photo = $6, car_albom = $7, car_year = $8, car_cost = $9, company_id = $10
               WHERE car_id = $1
               RETURNING *`,
            [car_markasi, car_motor, car_desc, car_img, car_albom, car_photo, car_year, car_cost, company_id] 
        );
        return car;
    }

    async deleteCar(carId: number) {
        const car = await db.fetchAll('DELETE FROM car WHERE car_id = $1 RETURNING *', [carId]);
        return car;
    }
    async getById(carId: number) {
        const [car] = await db.fetchAll('SELECT * FROM car WHERE car_id = $1', [carId]);
        return car;
    }
}

export default new CarService();