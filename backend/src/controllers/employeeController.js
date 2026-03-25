const EmployeeService = require('../services/employeeService');

exports.listEmployees = async (req, res, next) => {
  try {
    const list = await EmployeeService.list();
    res.json(list);
  } catch (err) {
    next(err);
  }
};

exports.createEmployee = async (req, res, next) => {
  try {
    const created = await EmployeeService.create(req.body);
    res.status(201).json(created);
  } catch (err) {
    next(err);
  }
};

exports.updateEmployee = async (req, res, next) => {
  try {
    const updated = await EmployeeService.update(req.params.id, req.body);
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

exports.deleteEmployee = async (req, res, next) => {
  try {
    await EmployeeService.delete(req.params.id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
