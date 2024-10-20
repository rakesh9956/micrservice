const ContainerTypes = {
    CityController: Symbol.for("CityController"),
    CityAggregateService: Symbol.for("CityAggregateService"),
    CityService: Symbol.for("CityService"),
    CityAdapter: Symbol.for("CityAdapter"),

   ProductController: Symbol.for("ProductController"),
   ProductAggregateService: Symbol.for("ProductAggregateService"),
   ProductService: Symbol.for("ProductService"),
   ProductAdapter: Symbol.for("ProductAdapter"),
   
   CategoryController: Symbol.for("CategoryController"),
   CategoryAggregateService: Symbol.for("CategoryAggregateService"),
   CategoryService: Symbol.for("CategoryService"),
   CategoryAdapter: Symbol.for("CategoryAdapter"),


   //return slaes
   ReturnSalesInvoiceAdapter: Symbol.for("ReturnSalesInvoiceAdapter"),
   ReturnSalesInvoiceService: Symbol.for("ReturnSalesInvoiceService"),
   ReturnSalesAggregateInvoiceService: Symbol.for(
     "ReturnSalesAggregateInvoiceService"
   ),
   ReturnSalesInvoiceController: Symbol.for("ReturnSalesInvoiceController"),
}
export { ContainerTypes };

