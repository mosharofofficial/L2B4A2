import { Request, Response } from 'express';
import { orderServices } from './order.services';

const { createOrderInDB } = orderServices;

const createOrder = async (req: Request, res: Response) => {
  try {
    const result = await createOrderInDB();
    res.json(result);
  } catch (error) {
    console.log(error);
  }
};


export const orderControllers = {createOrder};