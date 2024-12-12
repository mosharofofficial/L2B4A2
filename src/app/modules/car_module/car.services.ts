import { Car } from './car_model';
import { CarInterface } from './car.interfaces';
import mongoose from 'mongoose';
import genericError from './car.utility';

const createCarInDB = async (car: CarInterface) => {
  try {
    const result = await Car.create(car);
    if (result._id) {
      return {
        message: 'Car created successfully',
        success: true,
        data: result,
      };
    }
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      const errorDetails = genericError(error);
      return errorDetails;
    } else {
      return error;
    }
  }
};

const getAllCarsFromDB = async () => {
  try {
    const result = await Car.find();
    return {
      message: 'Cars retrieved successfully',
      success: true,
      data: result,
    };
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      return genericError(error);
    } else {
      return error;
    }
  }
};

const getCarByIdFromDB = async (carId: string) => {
  try {
    const result = await Car.findById(carId);
    return {
      message: 'Car retrieved successfully',
      success: true,
      data: result,
    };
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      return genericError(error);
    } else {
      return error;
    }
  }
};
export const carServices = {
  createCarInDB,
  getAllCarsFromDB,
  getCarByIdFromDB,
};
