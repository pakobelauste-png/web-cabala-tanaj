'use client';
import { useState, useEffect } from 'react';

export default function Gematria() {
  const [text, setText] = useState('');
  const [isMounted, setIsMounted] = useState(false);

  // Esto asegura que el código solo se ejecute cuando el navegador esté listo
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const valores: { [key: string]: number } = {
    'א': 1, 'ב': 2, 'ג': 3, 'ד': 4, 'ה': 5, 'ו': 6, 'ז': 7, 'ח': 8, 'ט': 9,
    'י': 10, 'כ': 20, 'ל': 30, 'מ': 40, 'נ': 50, 'ס': 60, 'ע': 70, 'פ': 80, 'צ': 90,
    'ק': 100, 'ר': 200, 'ש': 300, 'ת': 400, 'ך': 20, 'ם': 40, 'ן': 50, 'ף': 80, 'ץ': 90
  };

  const calcular = (txt: string) => {
    return txt.split('').reduce((acc, char) => acc + (valores[char] || 0), 0);
  };

  // Si aún no ha cargado en el navegador, mostramos un espacio vacío para evitar errores
  if (!isMounted) {
    return <div style={{ padding: '20px' }}>Cargando calculadora...</div>;
  }

  return (
    <div style={{ 
      padding: '20px', 
      background: '#fff', 
      border: '1px solid #ddd', 
      borderRadius: '12px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.05)' 
    }}>
      <h3 style={{ marginTop: 0, color: '#1e3a8a' }}>🔢 Gematría</h3>
      <p style={{ fontSize: '12px', color: '#666' }}>Escribe en hebreo para calcular:</p>
      <input 
        type="text" 
        placeholder="Ej: אמת"
        style={{ 
          width: '100%', 
          padding: '12px', 
          fontSize: '20px', 
          border: '2px solid #eff6ff', 
          borderRadius: '8px',
          outline: 'none',
          marginBottom: '10px'
        }}
        onChange={(e) => setText(e.target.value)}
      />
      <div style={{ 
        textAlign: 'center', 
        padding: '10px', 
        background: '#eff6ff', 
        borderRadius: '8px',
        fontSize: '28px', 
        fontWeight: 'bold', 
        color: '#1e40af' 
      }}>
        {calcular(text)}
      </div>
    </div>
  );
}