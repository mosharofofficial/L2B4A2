"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const mongoose_1 = require("mongoose");
const OrderSchema = new mongoose_1.Schema({
    email: { type: String, required: true, unique: true },
    car: { type: mongoose_1.Schema.Types.ObjectId, required: true, unique: true },
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
});
exports.Order = (0, mongoose_1.model)('Order', OrderSchema);
