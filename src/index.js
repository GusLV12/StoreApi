import express from 'express';
import { PORT } from './config/config.js';

import productsRouter from './routes/products.route.js';
import suppliersRouter from './routes/suppliers.route.js';
import departmentRouter from './routes/department.route.js';
import typeRouter from './routes/types.route.js';
import salesRouter from './routes/sales.route.js';
import productsSaleRouter from './routes/productsSale.route.js';
import userRoutes from './routes/users.route.js';
import promotionRouter from './routes/promotion.route.js';
import productsPromotionsRouter from './routes/salesPromotions.route.js';

const app = express();
app.use(express.json());

// Endpoints
app.use('/api/products', productsRouter);
app.use('/api/suppliers', suppliersRouter);
app.use('/api/departments', departmentRouter);
app.use('/api/types', typeRouter);
app.use('/api/sales', salesRouter);
app.use('/api/product-sale', productsSaleRouter);
app.use('/api/users', userRoutes);
app.use('/api/promotions', promotionRouter);
app.use('/api/sales-promotions', productsPromotionsRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
