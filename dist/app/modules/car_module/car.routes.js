"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const car_controllers_1 = require("./car.controllers");
const carRoutes = express_1.default.Router();
const { createCar, getAllCars, getCarById, updateCar, deleteCar } = car_controllers_1.carHandlers;
carRoutes.post('/', createCar);
carRoutes.get('/', getAllCars);
carRoutes.get('/:carId', getCarById);
carRoutes.put('/:carId', updateCar);
carRoutes.delete('/:carId', deleteCar);
exports.default = carRoutes;
