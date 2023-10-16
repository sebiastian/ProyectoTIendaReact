import React from 'react'
import { Link } from "react-router-dom"

export default function NavCategorias() {
    
    

    return (
        <nav className="bg-gray-800 p-4">
            <ul className="flex justify-center items-center h-12">
                <li>
                    <Link to="/libros" className="hover:text-white">Todos</Link>
                </li>
                <li>
                    <Link to="/libros/literaturaClasica" className="hover:text-white">Literatura Clasica</Link>
                </li>
                <li>
                    <Link to="/libros/terror" className="hover:text-white">Terror</Link>
                </li>
                <li>
                    <Link to="/libros/poesia" className="hover:text-white">Poesía</Link>
                </li>
                <li>
                    <Link to="/libros/infantiles" className="hover:text-white">Infantiles</Link>
                </li>
                <li>
                    <Link to="/libros/fantasia" className="hover:text-white">Fantasia</Link>
                </li>
            </ul>
        </nav>
    )
}
