const IncidentService = require('../services/incidentService');

exports.listIncidents = async (req, res, next) => {
  try {
    const list = await IncidentService.list();
    res.json(list);
  } catch (err) {
    next(err);
  }
};

exports.createIncident = async (req, res, next) => {
  try {
    const created = await IncidentService.create(req.body);
    res.status(201).json(created);
  } catch (err) {
    next(err);
  }
};

exports.updateIncident = async (req, res, next) => {
  try {
    const updated = await IncidentService.update(req.params.id, req.body);
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

exports.deleteIncident = async (req, res, next) => {
  try {
    await IncidentService.delete(req.params.id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
