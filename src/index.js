import express from 'express';
import { PORT } from './config.js';

import productsRouter from './routes/products.route.js';

const app = express();
app.use(express.json());

// Endpoints
app.use('/api/products', productsRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
