import React, { useState } from 'react'

export default function App() {
  const [bomberos, setBomberos] = useState([])
  const [form, setForm] = useState({ nombre: '', rango: '', especialidad: '', salario: '', bono: '', foto: '' })

  const registrar = () => {
    if (!form.nombre || !form.rango) return
    const nuevoBombero = {
      id: Date.now(),
      nombre: form.nombre,
      rango: form.rango,
      especialidad: form.especialidad,
      salario: Number(form.salario || 0),
      bono: Number(form.bono || 0),
      foto: form.foto || 'https://via.placeholder.com/50',
      estado: 'Activo'
    }
    setBomberos([...bomberos, nuevoBombero])
    setForm({ nombre: '', rango: '', especialidad: '', salario: '', bono: '', foto: '' })
  }

  const cambiarEstado = (id) => {
    setBomberos(bomberos.map(b => b.id === id ? { ...b, estado: b.estado === 'Activo' ? 'Inactivo' : 'Activo' } : b))
  }

  const eliminar = (id) => {
    setBomberos(bomberos.filter(b => b.id !== id))
  }

  const handleChange = (e) => {
    const { id, value } = e.target
    setForm({ ...form, [id]: value })
  }

  return (
    <div>
      <div className="header">
        <h1>🚒 Panel Administrativo - Bomberos</h1>
      </div>
      <div className="container">
        <div className="form">
          <h2>Registrar Bombero</h2>
          <input id="nombre" type="text" placeholder="Nombre" value={form.nombre} onChange={handleChange} />
          <input id="rango" type="text" placeholder="Rango" value={form.rango} onChange={handleChange} />
          <input id="especialidad" type="text" placeholder="Especialidad" value={form.especialidad} onChange={handleChange} />
          <input id="salario" type="number" placeholder="Salario" value={form.salario} onChange={handleChange} />
          <input id="bono" type="number" placeholder="Bonificación" value={form.bono} onChange={handleChange} />
          <input id="foto" type="text" placeholder="URL de Foto" value={form.foto} onChange={handleChange} />
          <button onClick={registrar}>Registrar</button>
        </div>

        <table>
          <thead>
            <tr>
              <th>Foto</th>
              <th>Nombre</th>
              <th>Rango</th>
              <th>Estado</th>
              <th>Salario</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {bomberos.map(b => (
              <tr key={b.id}>
                <td><img src={b.foto} alt={b.nombre} /></td>
                <td>{b.nombre}</td>
                <td>{b.rango}</td>
                <td className={b.estado === 'Activo' ? 'activo' : 'inactivo'}>{b.estado}</td>
                <td>${b.salario}</td>
                <td>
                  <button onClick={() => cambiarEstado(b.id)}>Estado</button>
                  <button onClick={() => eliminar(b.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
