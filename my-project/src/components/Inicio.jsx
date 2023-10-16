import React from 'react';

export default function Inicio() {
  return (
    <div className="bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <img
          src="https://via.placeholder.com/800x400" 
          alt="Librería"
          className="rounded-lg shadow-md mb-4"
        />
        <div className="text-lg text-gray-800">
          <p className="mb-4">
            ¡Bienvenido a nuestra librería! Encontrarás una amplia selección de libros de diferentes géneros,
            desde literatura clásica hasta emocionantes historias de terror, pasando por la magia de la fantasía
            y la tierna poesía infantil.
          </p>
          <p>
            Explora nuestro catálogo y sumérgete en el fascinante mundo de la lectura.
          </p>
        </div>
      </div>
    </div>
  );
}
