import CartWidget from "./CartWidget"
import React from "react";

const NavBar = () => {
    return (
        <main className="flex justify-between items-center p-4">
            <h1>BlairBooks</h1>
            <div>
                <ul className="">
                    <li><a href="#">Inicio </a></li>
                    <li><a href="#">Productos </a></li>
                    <li><a href="#">Informacion </a></li>
                </ul>

                <CartWidget />
            </div>
        </main>
    )
}

export default NavBar