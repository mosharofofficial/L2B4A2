import { Car } from './car_model';
import { CarInterface } from './car.interfaces';
import mongoose, { Error } from 'mongoose';

const createCarInDB = async (car: CarInterface) => {
  try {
    const result = await Car.create(car);
    console.log('services response: ', result);
    if (result._id) {
      return {
        message: 'Car created successfully',
        success: true,
        data: result,
      };
    }
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
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
};

// const getAllCarsFromDB = async () => {};

export const carServices = {
  createCarInDB,
  // getAllCarsFromDB
};
