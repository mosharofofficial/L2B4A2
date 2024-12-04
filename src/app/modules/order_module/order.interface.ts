import { ObjectId } from "mongoose";

export interface OrderInterface {
  email: string;
  car: ObjectId;
  quantity: number;
  totalPrice: number;
}
