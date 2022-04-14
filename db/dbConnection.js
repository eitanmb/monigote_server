import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';

mongoose.connect(process.env.DB_CNN)
.then(
    () => console.log('Conectado a la BBDD')
).catch(err => {
    console.log(err);
});
