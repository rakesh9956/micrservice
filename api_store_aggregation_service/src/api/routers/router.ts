import express from "express";
import bodyParser from "body-parser";
import CityRoute from "./city.router"
import ProductRoute from "./product.router";
import categoryRoute from "./category.router";
import ReturnSalesInvoiceRouter from "./return-sales-invoice.routes";
const app = express();
app.use(bodyParser.json());
app.use("/cities", CityRoute());
app.use("/product-details", ProductRoute());
app.use("/categories", categoryRoute());
app.use("/return-invoice", ReturnSalesInvoiceRouter());

export default app;