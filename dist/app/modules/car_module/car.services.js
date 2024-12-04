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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.carServices = void 0;
const car_model_1 = require("./car_model");
const mongoose_1 = __importDefault(require("mongoose"));
const createCarInDB = (car) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield car_model_1.Car.create(car);
        console.log('services response: ', result);
        if (result._id) {
            return {
                message: 'Car created successfully',
                success: true,
                data: result,
            };
        }
    }
    catch (error) {
        if (error instanceof mongoose_1.default.Error.ValidationError) {
            // const errors = JSON.stringify(error.errors, (key, value) => {
            //   return value;
            // });
            const errorDetails = {
                message: error.message,
                success: false,
                error: {
                    name: error.name,
                    errors: error.errors,
                },
                stack: error.stack,
            };
            return errorDetails;
        }
    }
});
// const getAllCarsFromDB = async () => {};
exports.carServices = {
    createCarInDB,
    // getAllCarsFromDB
};
