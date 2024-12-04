import mongoose, { model, Schema } from 'mongoose';
import { CarInterface } from './car.interfaces';

const CarSchema = new Schema<CarInterface>(
  {
    brand: {
      required: [true, `brand is required`],
      type: String,
      maxlength: 30,
    },
    model: { required: [true, `model is required`], type: String },
    year: { required: [true, `year is required`], type: Number },
    price: { required: [true, `price is required`], type: Number },
    category: {
      required: [true, `category is required`],
      type: String,
      enum: {
        values: ['Sedan', 'SUV', 'Truck', 'Coupe', 'Convertible'],
        message: `{VALUE} is not supported`,
      },
    },
    description: { required: [true, `description is required`], type: String },
    quantity: { required: [true, `quantity is required`], type: Number ,min:0},
    inStock: { required: [true, `inStock is required`], type: Number },
  },
  { timestamps: true },
);

export const Car = model<CarInterface>('Car', CarSchema);
