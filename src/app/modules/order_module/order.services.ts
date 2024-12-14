const createOrderInDB = () => {
  try {
    return { message: 'db function hit', status: true };
  } catch (error) {
    console.log(error);
  }
};

export const orderServices = { createOrderInDB };
