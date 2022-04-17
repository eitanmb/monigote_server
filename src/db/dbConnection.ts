import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';

const DB_CNN: string | undefined = process.env.DB_CNN;

if (!DB_CNN) {
    process.exit(1);
  }

mongoose.connect(DB_CNN)
.then(
    () => console.log('Conectado a la Base de Datos')
).catch(err => {
    console.log(err);
});