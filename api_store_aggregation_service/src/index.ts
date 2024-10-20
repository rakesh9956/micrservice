import express from 'express';
import 'reflect-metadata';
import routes from './api/routers/router'; 
import dotenv from 'dotenv';
import logger from 'morgan';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;  

app.use(logger("dev"));
app.use("/" + process.env.CONTEXT_PATH, routes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
