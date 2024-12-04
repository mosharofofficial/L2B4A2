import { model, Schema } from 'mongoose';
import { OrderInterface } from '../order_module/order.interface';

const OrderSchema = new Schema<OrderInterface>({
  email: { type: String, required: true, unique: true },
  car: { type: Schema.Types.ObjectId, required: true, unique: true },
  quantity: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
});

export const Order = model<OrderInterface>('Order', OrderSchema);
