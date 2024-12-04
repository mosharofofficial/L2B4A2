import express from 'express';
import { carHandlers } from './car.controllers';


const carRoutes = express.Router();

const {createCar,
    //  getAllCars
    } = carHandlers;



carRoutes.post('/', createCar);
// carRoutes.get('/', getAllCars);










export default carRoutes;