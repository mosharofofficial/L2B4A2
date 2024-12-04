import mongoose from 'mongoose';
import app from './app';
import data from './app/config';

const main = async () => {
  try {
    
    await mongoose.connect(data.db_url as string);

    app.listen(data.port, () => console.log(`B4A2V3 listening on port: ${data.port}`));
  } catch (error) {
    console.log('=======Error while connecting to DB======');
    console.log(error);
  }
};

main();
