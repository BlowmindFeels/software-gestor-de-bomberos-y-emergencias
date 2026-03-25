// Modelo de datos para empleados/bomberos (placeholder)
// En una implementación real usarías Mongoose u otro ORM

module.exports = {
  // esquema de ejemplo para empleados
  id: 'number',
  name: 'string',
  badge: 'string',
  position: 'string',
  department: 'string',
  phone: 'string',
  email: 'string',
  status: 'string', // active, inactive, on_leave
  startDate: 'date',
  certifications: ['string'],
};
