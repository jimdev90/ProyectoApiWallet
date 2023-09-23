process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.APP_ENV = process.env.APP_ENV || 'development';

import dotenv from 'dotenv';
import express from 'express';
import { loadControllers } from "awilix-express";
import loadContainer from './container';

dotenv.config({
    path: `${__dirname}/../config/${process.env.APP_ENV}.env`
});

console.log(process.env.APP_FOO);


const app: express.Application = express();

// app.get('/', (req, res) => {
//     res.send('Hola mundo');
// });

loadContainer(app);

app.use(loadControllers(
    'controllers/*.ts',
    { cwd: __dirname}
));


export {app};