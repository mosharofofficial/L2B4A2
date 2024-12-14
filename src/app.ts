import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import carRoutes from './app/modules/car_module/car.routes';
import orderRoutes from './app/modules/order_module/order.routes';


dotenv.config();

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use('/api/cars', carRoutes);
app.use('/api/orders', orderRoutes);

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'works' });
});

export default app;
