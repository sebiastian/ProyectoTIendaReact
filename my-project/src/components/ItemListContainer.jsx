import React, { useEffect, useState } from "react"
import ItemList from "./ItemList"
import NavCategorias from "./NavCategorias"
import { useParams } from "react-router-dom"

export default function ItemListContainer() {

    const [libros, setLibros] = useState([])
    const { categoria } = useParams()

    useEffect(() => {
        fetch('./src/assets/array.json')
            .then(respuesta => respuesta.json())
            .then(productos => setLibros(productos))
            .catch(error => console.log(error))
    }, [])


    return (
        <div className="max-w-full">
            <NavCategorias />
            <ItemList productos={libros} categoria={categoria} />
        </div>
    )
}

