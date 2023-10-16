import React from 'react'
import { Link } from 'react-router-dom'


export default function Item({ libro }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      {libro ? (
        <div>
          <h2 className="text-xl font-semibold mb-2">{libro.nombre}</h2>
          <p className="text-gray-700">Autor: {libro.autor}</p>
          <p className="text-gray-700">Precio: {libro.precio}</p>
          <Link to={`../item/${libro.id}`} className="mt-2 inline-block px-4 py-2 text-sm font-medium text-primary bg-accent rounded-full hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
            Más Info
          </Link>
        </div>
      ) : (
        <p>Cargando libro...</p>
      )}
    </div>
  );
}
