import { Request, Response } from "express";
import CarService from "./car.service";

class CarController {

    async getAllCar(req: Request, res: Response): Promise<void> {
        const car = await CarService.getAll()
        res.send(car)
    }
    async createCar(req: Request, res: Response): Promise<void> {
        const {car_markasi, car_motor, car_desc, car_img, car_albom, car_photo,  car_cost, company_id } = req.body;
        const car = await CarService.createCar(car_markasi, car_motor, car_desc,  car_cost, company_id, car_img, car_photo, car_albom);
        res.status(201).send(car);
    }
    async updateCar(req: Request, res: Response): Promise<void> {
        const {car_markasi, car_motor, car_desc, car_img, car_albom, car_photo,  car_cost, company_id } = req.body;
        const { carId} = req.params;
        const car = await CarService.updateCar(carId, car_markasi, car_motor, car_img, car_photo, car_albom, car_desc,  car_cost, company_id);
        res.status(201).send(car);
    }

    async deleteCar(req: Request, res: Response): Promise<void> {
        const { carId} = req.params;
        const car = await CarService.deleteCar(+carId);
        res.status(201).send(car);
    }
    async getByIdCar(req: Request, res: Response): Promise<void> {
        const { carId} = req.params;
        const car = await CarService.deleteCar(+carId);
        res.status(201).send(car);
    }
}

export default new CarController();