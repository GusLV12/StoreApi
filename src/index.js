import express from 'express';
import { PORT } from './config/config.js';

import productsRouter from './routes/products.route.js';
import suppliersRouter from './routes/suppliers.route.js';
import departmentRouter from './routes/department.route.js';

const app = express();
app.use(express.json());

// Endpoints
app.use('/api/products', productsRouter);
app.use('/api/suppliers', suppliersRouter);
app.use('/api/departments', departmentRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
