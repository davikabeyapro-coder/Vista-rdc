import React from 'react';
import { Compass, TrendingUp, Cpu, ShieldCheck } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans">
      {/* Barre de navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-white/10 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-emerald-500 rounded-xl flex items-center justify-center">
            <Compass className="text-white w-6" />
          </div>
          <span className="text-xl font-black tracking-tighter uppercase">Vista-Rdc</span>
        </div>
        <button className="bg-emerald-600 px-6 py-2 rounded-full text-xs font-black uppercase transition-colors hover:bg-emerald-700">
          Connexion
        </button>
      </nav>

      <main className="pt-20">
        {/* Section Hero */}
        <section className="relative h-[80vh] flex items-center justify-center text-center px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-[#050505] z-10" />
          <img 
            src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2000" 
            alt="Paysage de la RDC - Tourisme" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20">
            <h1 className="text-7xl md:text-9xl font-black mb-6 tracking-tighter">
              VISTA <span className="text-emerald-500">RDC</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 italic">
              "L'IA au service du tourisme national."
            </p>
            <button className="bg-emerald-600 px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest shadow-2xl shadow-emerald-500/20 transition-all hover:scale-105 hover:bg-emerald-700">
              Lancer l'Expédition
            </button>
          </div>
        </section>

        {/* Section Fonctionnalités */}
        <section className="py-20 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] text-center backdrop-blur-sm">
             <TrendingUp className="text-emerald-500 mx-auto mb-4" />
             <h3 className="font-bold mb-2">Valorisation IPO</h3>
             <p className="text-gray-400 text-sm">IA pilotée pour une entrée en bourse.</p>
           </div>
           <div className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] text-center backdrop-blur-sm">
             <Cpu className="text-blue-500 mx-auto mb-4" />
             <h3 className="font-bold mb-2">Gestion Autonome</h3>
             <p className="text-gray-400 text-sm">Maintenance automatisée à 100%.</p>
           </div>
           <div className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] text-center backdrop-blur-sm">
             <ShieldCheck className="text-purple-500 mx-auto mb-4" />
             <h3 className="font-bold mb-2">Sécurité Certifiée</h3>
             <p className="text-gray-400 text-sm">Chaque voyage est sécurisé par l'IA.</p>
           </div>
        </section>
      </main>

      {/* Pied de page */}
      <footer className="py-10 text-center border-t border-white/5 text-[10px] text-gray-600 font-black uppercase tracking-widest">
        © 2026 VISTA-RDC | Intelligence Artificielle & Tourisme
      </footer>
    </div>
  );
}
