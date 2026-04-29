import express from 'express';
import v1Router from './routers/v1/route.version1.js';
import { middleware1 } from './middlewares/custom/middleware1.js';

const app =express();

app.use(express.json());

app.use('api/', middleware1, v1Router);

app.listen(3000 , ()=>{
    console.log(`I am listening from PORT `)
    console.log('If i cut the server then click CTRL+C')
})
