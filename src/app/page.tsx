import Gematria from '../components/Gematria';

async function getJewishDate() {
  const res = await fetch('https://www.hebcal.com/etc/hdate-en.json', { next: { revalidate: 3600 } });
  return res.json();
}

export default async function Home() {
  const dateData = await getJewishDate();

  return (
    <div className="min-h-screen bg-[#fdfaf6] font-serif">
      <nav className="p-6 bg-white border-b flex justify-between items-center shadow-sm">
        <h1 className="text-2xl font-bold text-blue-900">TORAH & CÁBALA</h1>
        <div className="bg-blue-50 px-4 py-1 rounded-full text-blue-800 text-sm font-sans">
          {dateData.hebrew}
        </div>
      </nav>

      <main className="max-w-6xl mx-auto p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div className="bg-blue-900 p-10 rounded-2xl text-white shadow-xl">
            <h2 className="text-4xl mb-4">Explora la Luz del Tanaj</h2>
            <p className="text-blue-100 italic">"La Torá es un árbol de vida para quienes se aferran a ella."</p>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
             <div className="p-6 bg-white border rounded-xl hover:shadow-md transition">
               <h3 className="text-xl font-bold text-blue-900">Biblia Hebrea Bilingüe</h3>
               <p className="text-stone-600">Accede al Tanaj completo con traducción al español y texto original.</p>
               <button className="mt-4 text-blue-600 font-bold underline">Empezar a leer →</button>
             </div>
          </div>
        </div>

        <aside className="space-y-6">
          <Gematria />
          <div className="p-6 bg-white border rounded-xl shadow-sm">
            <h3 className="font-bold mb-4 border-b pb-2">Próximas Festividades</h3>
            <p className="text-stone-700 italic">{dateData.events ? dateData.events[0] : "Estudio diario"}</p>
          </div>
        </aside>
      </main>
    </div>
  );
}import Gematria from '../components/Gematria';

async function getJewishDate() {
  const res = await fetch('https://www.hebcal.com/etc/hdate-en.json', { next: { revalidate: 3600 } });
  return res.json();
}

export default async function Home() {
  const dateData = await getJewishDate();

  return (
    <div className="min-h-screen bg-[#fdfaf6] font-serif">
      <nav className="p-6 bg-white border-b flex justify-between items-center shadow-sm">
        <h1 className="text-2xl font-bold text-blue-900">TORAH & CÁBALA</h1>
        <div className="bg-blue-50 px-4 py-1 rounded-full text-blue-800 text-sm font-sans">
          {dateData.hebrew}
        </div>
      </nav>

      <main className="max-w-6xl mx-auto p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div className="bg-blue-900 p-10 rounded-2xl text-white shadow-xl">
            <h2 className="text-4xl mb-4">Explora la Luz del Tanaj</h2>
            <p className="text-blue-100 italic">"La Torá es un árbol de vida para quienes se aferran a ella."</p>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
             <div className="p-6 bg-white border rounded-xl hover:shadow-md transition">
               <h3 className="text-xl font-bold text-blue-900">Biblia Hebrea Bilingüe</h3>
               <p className="text-stone-600">Accede al Tanaj completo con traducción al español y texto original.</p>
               <button className="mt-4 text-blue-600 font-bold underline">Empezar a leer →</button>
             </div>
          </div>
        </div>

        <aside className="space-y-6">
          <Gematria />
          <div className="p-6 bg-white border rounded-xl shadow-sm">
            <h3 className="font-bold mb-4 border-b pb-2">Próximas Festividades</h3>
            <p className="text-stone-700 italic">{dateData.events ? dateData.events[0] : "Estudio diario"}</p>
          </div>
        </aside>
      </main>
    </div>
  );
}