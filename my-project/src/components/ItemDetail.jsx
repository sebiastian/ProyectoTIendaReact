import React from 'react'
import { Link } from 'react-router-dom'

export default function ItemDetail({producto}) {
  return (
    <div className="flex justify-center items-center h-screen">
      {producto ? (
        <div className="max-w-md p-4 bg-white shadow-md rounded-md">
          <h2 className="text-xl font-semibold mb-2">{producto.nombre}</h2>
          <p className="text-gray-700">Autor: {producto.autor}</p>
          <p className="text-gray-700">Precio: {producto.precio}</p>
          <p className="text-gray-700">Descripción: {producto.descripcion}</p>
          <Link to={`/libros`} className="mt-2 inline-block px-4 py-2 text-sm font-medium text-primary bg-accent rounded-full hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
            Volver
          </Link>
        </div>
      ) : (
        <p>Cargando producto...</p>
      )}
    </div>
  )
}
