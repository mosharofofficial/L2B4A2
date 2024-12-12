import express from 'express';
import { carHandlers } from './car.controllers';


const carRoutes = express.Router();

const {createCar,
     getAllCars,
     getCarById
    } = carHandlers;



carRoutes.post('/', createCar);
carRoutes.get('/', getAllCars);
carRoutes.get('/:carId', getCarById);










export default carRoutes;