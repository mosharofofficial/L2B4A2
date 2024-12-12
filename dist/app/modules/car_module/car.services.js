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
const car_utility_1 = __importDefault(require("./car.utility"));
const createCarInDB = (car) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield car_model_1.Car.create(car);
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
            const errorDetails = (0, car_utility_1.default)(error);
            return errorDetails;
        }
        else {
            return error;
        }
    }
});
const getAllCarsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield car_model_1.Car.find();
        return {
            message: 'Cars retrieved successfully',
            success: true,
            data: result,
        };
    }
    catch (error) {
        if (error instanceof mongoose_1.default.Error.ValidationError) {
            return (0, car_utility_1.default)(error);
        }
        else {
            return error;
        }
    }
});
const getCarByIdFromDB = (carId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield car_model_1.Car.findById(carId);
        return {
            message: 'Car retrieved successfully',
            success: true,
            data: result,
        };
    }
    catch (error) {
        if (error instanceof mongoose_1.default.Error.ValidationError) {
            return (0, car_utility_1.default)(error);
        }
        else {
            return error;
        }
    }
});
const updateCarFromDB = (carId, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield car_model_1.Car.findByIdAndUpdate(carId, updateData, {
            new: true,
        });
        return {
            message: 'Car updated successfully',
            success: true,
            data: result,
        };
    }
    catch (error) {
        if (error instanceof mongoose_1.default.Error.ValidationError) {
            return (0, car_utility_1.default)(error);
        }
        else {
            return error;
        }
    }
});
exports.carServices = {
    createCarInDB,
    getAllCarsFromDB,
    getCarByIdFromDB,
    updateCarFromDB,
};
