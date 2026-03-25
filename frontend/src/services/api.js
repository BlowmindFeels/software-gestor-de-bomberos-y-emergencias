import axios from 'axios'

const base = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000/api'
export const api = axios.create({ baseURL: base })

export const fetchIncidents = () => api.get('/incidents')
export const postIncident = (data) => api.post('/incidents', data)
export const updateIncident = (id, data) => api.put(`/incidents/${id}`, data)
export const deleteIncident = (id) => api.delete(`/incidents/${id}`)

export const fetchEmployees = () => api.get('/employees')
export const postEmployee = (data) => api.post('/employees', data)
export const updateEmployee = (id, data) => api.put(`/employees/${id}`, data)
export const deleteEmployee = (id) => api.delete(`/employees/${id}`)
