import express from 'express';
import routes from '../src/routers/routes';
import "reflect-metadata";
import '../src/dataSource/dbConnection'
import logger from 'morgan';

const app = express();
const port = 3000;

app.use(logger("dev"));
app.use(routes);


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
