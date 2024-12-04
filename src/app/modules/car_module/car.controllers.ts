import express, { Request, Response } from 'express';
import { carServices } from './car.services';

const { createCarInDB } = carServices;

const createCar = async (req: Request, res: Response) => {
  try {
    const result = await createCarInDB(req.body);
    // console.log('controller body: ', req.body);

    res.json(result);
  } catch (error) {
    console.log(error);
  }
};

// const getAllCars = async (req: Request, res: Response) => {
//   res.json({ message: 'get all cars route hit' });
// };

export const carHandlers = {
  createCar,
  // getAllCars
};
