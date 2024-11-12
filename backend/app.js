const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./db');

const todoRoutes = require('./todo.routes');

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/todos', todoRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
