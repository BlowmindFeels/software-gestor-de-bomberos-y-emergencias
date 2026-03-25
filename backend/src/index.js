const express = require('express');
const cors = require('cors');
const incidentRoutes = require('./routes/incidentRoutes');
const employeeRoutes = require('./routes/employeeRoutes');
const { errorHandler } = require('./middlewares/errorHandler');
require('dotenv').config();


const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    mensaje: "API de gestión de emergencias e incidentes para bomberos funcionando"
  });
});

app.use('/api/incidents', incidentRoutes);
app.use('/api/employees', employeeRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Backend escuchando en puerto ${PORT}`);
});
