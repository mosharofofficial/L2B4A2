"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const genericError = (error) => {
    return {
        message: error.message,
        success: false,
        error: {
            name: error.name,
            errors: error.errors,
        },
        stack: error.stack,
    };
};
exports.default = genericError;
