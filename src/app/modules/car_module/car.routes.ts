import express from 'express';
import { carHandlers } from './car.controllers';


const carRoutes = express.Router();

const {createCar,
     getAllCars,
     getCarById,
     updateCar
    } = carHandlers;



carRoutes.post('/', createCar);
carRoutes.get('/', getAllCars);
carRoutes.get('/:carId', getCarById);
carRoutes.put('/:carId', updateCar);










export default carRoutes;