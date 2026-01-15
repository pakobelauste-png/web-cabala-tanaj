'use client';
import { useState } from 'react';

export default function Gematria() {
  const [text, setText] = useState('');
  const valores: { [key: string]: number } = {
    'א': 1, 'ב': 2, 'ג': 3, 'ד': 4, 'ה': 5, 'ו': 6, 'ז': 7, 'ח': 8, 'ט': 9,
    'י': 10, 'כ': 20, 'ל': 30, 'מ': 40, 'נ': 50, 'ס': 60, 'ע': 70, 'פ': 80, 'צ': 90,
    'ק': 100, 'ר': 200, 'ש': 300, 'ת': 400, 'ך': 20, 'ם': 40, 'ן': 50, 'ף': 80, 'ץ': 90
  };

  const calcular = (txt: string) => {
    return txt.split('').reduce((acc, char) => acc + (valores[char] || 0), 0);
  };

  return (
    <div className="p-4 bg-stone-100 rounded-lg border border-stone-200">
      <h3 className="font-bold mb-2">Calculadora de Gematría</h3>
      <input 
        type="text" 
        className="w-full p-2 border rounded" 
        placeholder="Escribe en hebreo..."
        onChange={(e) => setText(e.target.value)}
      />
      <p className="mt-2 text-xl font-bold text-blue-900">Valor: {calcular(text)}</p>
    </div>
  );
}