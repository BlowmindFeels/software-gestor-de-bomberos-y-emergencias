const express = require('express');
const router = express.Router();
const { listIncidents, createIncident, updateIncident, deleteIncident } = require('../controllers/incidentController');

router.get('/', listIncidents);
router.post('/', createIncident);
router.put('/:id', updateIncident);
router.delete('/:id', deleteIncident);

module.exports = router;
