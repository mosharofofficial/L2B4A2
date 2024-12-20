import express, { Request, Response } from 'express';
import { carServices } from './car.services';

const {
  createCarInDB,
  getAllCarsFromDB,
  getCarByIdFromDB,
  updateCarFromDB,
  deleteCarFromDB,
} = carServices;

const createCar = async (req: Request, res: Response) => {
  try {
    const result = await createCarInDB(req.body);
    // console.log('controller body: ', req.body);

    res.json(result);
  } catch (error) {
    console.log(error);
  }
};

const getAllCars = async (req: Request, res: Response) => {
  try {
    const result = await getAllCarsFromDB();
    res.json(result);
  } catch (error) {
    console.log(error);
  }
};

const getCarById = async (req: Request, res: Response) => {
  try {
    const result = await getCarByIdFromDB(req.params.carId);
    res.json(result);
  } catch (error) {
    console.log(error);
  }
};

const updateCar = async (req: Request, res: Response) => {
  try {
    const result = await updateCarFromDB(req.params.carId, req.body);
    res.json(result);
  } catch (error) {
    console.log(error);
  }
};

const deleteCar = async (req: Request, res: Response) => {
  try {
    const result = await deleteCarFromDB(req.params.carId);
    res.json(result);
  } catch (error) {
    console.log(error);
  }
};

export const carHandlers = {
  createCar,
  getAllCars,
  getCarById,
  updateCar,
  deleteCar,
};
