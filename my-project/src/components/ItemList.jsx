import React from 'react';
import Item from './Item';

export default function ItemList({ productos, categoria }) {
  if (!categoria) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {productos.map((producto) => (
          <Item key={producto.id} libro={producto} />
        ))}
      </div>
    )
  }

  const productosFiltrados = productos.filter(
    (producto) => producto.categoria === categoria
  )

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {productosFiltrados.map((producto) => (
        <Item key={producto.id} libro={producto} />
      ))}
    </div>
  )
}
