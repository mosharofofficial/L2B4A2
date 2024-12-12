import express from 'express';
import { carHandlers } from './car.controllers';


const carRoutes = express.Router();

const { createCar, getAllCars, getCarById, updateCar, deleteCar } = carHandlers;



carRoutes.post('/', createCar);
carRoutes.get('/', getAllCars);
carRoutes.get('/:carId', getCarById);
carRoutes.put('/:carId', updateCar);
carRoutes.delete('/:carId', deleteCar);










export default carRoutes;