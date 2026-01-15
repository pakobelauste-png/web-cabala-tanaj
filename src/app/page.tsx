import Gematria from '../components/Gematria';

// 1. Función de datos fuera del componente para limpieza
async function getJewishDate() {
  try {
    const res = await fetch('https://www.hebcal.com/etc/hdate-en.json', { 
      next: { revalidate: 3600 } 
    });
    if (!res.ok) return { hebrew: "Error de conexión" };
    return res.json();
  } catch (e) {
    return { hebrew: "Hebcal no disponible" };
  }
}

// 2. COMPONENTE PRINCIPAL (Debe ser export default)
export default async function Page() {
  const dateData = await getJewishDate();

  return (
    <div style={{ padding: '40px', fontFamily: 'serif', backgroundColor: '#fdfaf6', minHeight: '100vh' }}>
      <header style={{ borderBottom: '1px solid #ccc', marginBottom: '20px', paddingBottom: '10px' }}>
        <h1 style={{ color: '#1e3a8a' }}>Portal de Cábala y Tanaj</h1>
        <p style={{ fontWeight: 'bold', color: '#1e40af' }}>{dateData.hebrew}</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px' }}>
        <main>
          <section style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
            <h2>Bienvenido al Estudio de la Luz</h2>
            <p>Explora los secretos de la Torá y la mística judía.</p>
            <hr style={{ margin: '20px 0' }} />
            <div style={{ padding: '15px', background: '#eff6ff', borderRadius: '8px' }}>
              <h3 style={{ margin: 0 }}>📖 Biblia Hebrea Bilingüe</h3>
              <p>Próximamente: Navegador completo de los 5 libros.</p>
            </div>
          </section>
        </main>

        <aside>
          {/* Inyectamos el componente de Gematria */}
          <Gematria />
        </aside>
      </div>
    </div>
  );
}