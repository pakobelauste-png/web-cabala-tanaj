'use client';
import Link from 'next/link';
import { seccionesTanaj } from '../data/libros';

// Definimos la forma de los datos para que TypeScript no se queje
interface Libro {
  nombre: string;
  id: string;
  he: string;
}

interface Seccion {
  titulo: string;
  libros: Libro[];
}

export default function SelectorTanaj() {
  return (
    <div className="space-y-8">
      {(seccionesTanaj as Seccion[]).map((seccion) => (
        <div key={seccion.titulo}>
          <h3 className="text-sm font-bold text-stone-400 uppercase tracking-widest mb-4 border-b pb-2">
            {seccion.titulo}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {seccion.libros.map((libro) => (
              <Link 
                key={libro.id} 
                href={`/tanaj/${libro.id}/1`}
                className="p-4 bg-white border border-stone-200 rounded-xl hover:border-blue-500 hover:shadow-md transition text-center group"
              >
                <p className="text-xs text-blue-600 font-bold mb-1 opacity-0 group-hover:opacity-100 transition">{libro.he}</p>
                <p className="font-serif text-lg text-stone-800">{libro.nombre}</p>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}