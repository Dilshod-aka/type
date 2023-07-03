import { Router } from "express";
import CarController from "./car.controller";



class CarRouter {
    public router = Router()

    constructor () {
        this.Routers()
    }

    public Routers () {
        this.router.get('/model', CarController.getAllCar);
        this.router.post('/model', CarController.createCar);
        this.router.get('/model/:carId', CarController.getByIdCar);
        this.router.put('/model/:carId', CarController.updateCar);
        this.router.delete('/model/:carId', CarController.deleteCar);
    }

}

export default CarRouter;