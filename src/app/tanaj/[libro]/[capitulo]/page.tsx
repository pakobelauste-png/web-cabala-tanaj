import Link from 'next/link';
// Si vas a usar Gematría aquí también, usa:
// import Gematria from '@/components/Gematria';

async function getJewishDate() {
  try {
    const res = await fetch('https://www.hebcal.com/etc/hdate-en.json', { next: { revalidate: 3600 } });
    if (!res.ok) return { hebrew: "Fecha no disponible" };
    return res.json();
  } catch (e) {
    return { hebrew: "Hebcal no disponible" };
  }
}

export default async function Page() {
  const dateData = await getJewishDate();

  return (
    <div className="min-h-screen bg-[#fdfaf6] font-serif text-stone-900 pb-20">
      {/* Header */}
      <nav className="p-6 bg-white border-b flex justify-between items-center sticky top-0 z-50 shadow-sm">
        <h1 className="text-2xl font-bold text-blue-900 tracking-tighter">TORAH & CÁBALA</h1>
        <div className="bg-blue-900 text-white px-4 py-1 rounded-full text-xs font-sans">
          {dateData.hebrew}
        </div>
      </nav>

      <div className="max-w-6xl mx-auto p-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Principal: Selector de Biblia */}
        <div className="lg:col-span-2 space-y-10">
          <header className="bg-blue-900 p-12 rounded-3xl text-white shadow-2xl relative overflow-hidden">
            <h2 className="text-5xl mb-4 font-serif relative z-10">Biblioteca Sagrada</h2>
            <p className="text-blue-100 text-xl relative z-10 opacity-90 italic">Selecciona un libro para comenzar el estudio bilingüe.</p>
            <div className="absolute right-[-20px] top-[-20px] text-[200px] text-white opacity-5 font-bold">ת</div>
          </header>

          <SelectorTanaj />
        </div>

        {/* Lateral: Herramientas */}
        <aside className="space-y-8">
          <Gematria />
          
          <div className="p-8 bg-white border border-stone-200 rounded-2xl shadow-sm">
            <h3 className="font-bold mb-4 border-b pb-2 text-stone-400 uppercase text-[10px] tracking-[0.2em]">Festividad de hoy</h3>
            <p className="text-blue-900 text-xl font-medium">
              {dateData.events && dateData.events.length > 0 ? dateData.events[0] : "Día de estudio (Chol)"}
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}