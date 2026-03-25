// Modelo de datos para incidentes (placeholder)
// En una implementación real usarías Mongoose u otro ORM

module.exports = {
  // esquema de ejemplo para incidentes
  id: 'number',
  type: 'string',
  priority: 'string',
  location: { lat: 'number', lng: 'number' },
  assignedFirefighters: ['string'],
  status: 'string',
  createdAt: 'date',
  prioridad: 'string',
  creadoEn: 'date'
};
