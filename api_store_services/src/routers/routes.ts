import express from 'express';
import bodyParser from 'body-parser';
import userDetailsRouter from './usersRouter'; // Adjust the import path as necessary
import CityRouter from './cityrouter';
import productsDetailsRouter from './productsRouter';
import ReturnSalesInvoiceRouter from './return-sales-invoice.routes';
import categoryRoute from './category.routes';

const app = express();
app.use(bodyParser.json());
app.use("/usersController", userDetailsRouter());
app.use("/CityController", CityRouter());
app.use("/return-invoice", ReturnSalesInvoiceRouter());
app.use("/product-details", productsDetailsRouter());
app.use("/categories", categoryRoute());
export default app;
