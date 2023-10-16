import CartWidget from "./CartWidget"
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <main className="flex justify-between items-center p-4">
            <h1>BlairBooks</h1>
            <div>
                <ul className="">
                    <li><Link to="/">Inicio </Link></li>
                    <li><Link to="/libros">Libros </Link></li>
                    <li><Link to="#">Informacion </Link></li>
                </ul>

                <CartWidget />
            </div>
        </main>
    )
}

export default NavBar