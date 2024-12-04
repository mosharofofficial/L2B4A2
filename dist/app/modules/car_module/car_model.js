"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
const mongoose_1 = require("mongoose");
const CarSchema = new mongoose_1.Schema({
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
    quantity: { required: [true, `quantity is required`], type: Number, min: 0 },
    inStock: { required: [true, `inStock is required`], type: Number },
}, { timestamps: true });
exports.Car = (0, mongoose_1.model)('Car', CarSchema);
