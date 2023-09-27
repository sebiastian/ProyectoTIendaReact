import React from "react";

export default function ItemListContainer({greeting}) {
    return (
        <div className="text-center flex h-screen">
            <h2 className="text-center items-center"> {greeting}
            </h2>
        </div>
    )
}
