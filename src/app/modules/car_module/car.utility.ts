import mongoose from 'mongoose';

const genericError = (error: mongoose.Error.ValidationError) => {
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

export default genericError;
