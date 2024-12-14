import express from 'express';
import { orderControllers } from './order.controller';

const orderRoutes = express.Router();
const { createOrder } = orderControllers;

orderRoutes.post('/', createOrder);

export default orderRoutes;
