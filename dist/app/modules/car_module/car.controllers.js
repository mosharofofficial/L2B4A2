"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.carHandlers = void 0;
const car_services_1 = require("./car.services");
const { createCarInDB } = car_services_1.carServices;
const createCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield createCarInDB(req.body);
        // console.log('controller body: ', req.body);
        res.json(result);
    }
    catch (error) {
        console.log(error);
    }
});
// const getAllCars = async (req: Request, res: Response) => {
//   res.json({ message: 'get all cars route hit' });
// };
exports.carHandlers = {
    createCar,
    // getAllCars
};
