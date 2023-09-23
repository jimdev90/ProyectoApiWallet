process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.APP_ENV = process.env.APP_ENV || 'development';

import dotenv from 'dotenv';
import express from 'express';

dotenv.config({
    path: `${__dirname}/../config/${process.env.APP_ENV}.env`
});

console.log(process.env.APP_FOO);


const app: express.Application = express();

app.get('/', (req, res) => {
    res.send('Hola mundo');
});

import { container } from './container';
import { TestService } from './services/test.service';
const testService = container.resolve<TestService>('testService');
console.log(testService.get());


export {app};