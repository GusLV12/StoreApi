import express from 'express';
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

// Ejemplo de ruta base
app.get('/', (req, res) => {
  res.send('API is running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
