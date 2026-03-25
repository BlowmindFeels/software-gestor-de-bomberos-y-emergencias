const express = require('express');
const router = express.Router();
const { listEmployees, createEmployee, updateEmployee, deleteEmployee } = require('../controllers/employeeController');

router.get('/', listEmployees);
router.post('/', createEmployee);
router.put('/:id', updateEmployee);
router.delete('/:id', deleteEmployee);

module.exports = router;
