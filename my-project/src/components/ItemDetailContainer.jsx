import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

export default function ItemDetailContainer() {
    const { id } = useParams()
    const [producto, setProducto] = useState(null)

    useEffect(() => {
        fetch('../src/assets/array.json')
            .then(respuesta => respuesta.json())
            .then(productos => {
                const productoEncontrado = productos.find(producto => producto.id === +(id))
                setProducto(productoEncontrado)
            })
            .catch(error => console.log(error));
    }, [id])

    return (
        <div>
            {producto ? (
                <ItemDetail producto={producto} />
            ) : (
                <p>Cargando producto...</p>
            )}
        </div>
    )
}

