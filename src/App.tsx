import { Navbar } from './components/Navbar';

export default function App() {
  return (
    <div className="min-h-screen bg-surface-darker text-slate-100 selection:bg-metallic-copper selection:text-white">
      <Navbar />
      <main className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="py-20 text-center">
          <h1 className="text-4xl font-serif text-gradient-brass font-bold">PRAHLAD BHAGAT JI</h1>
          <p className="text-metallic-copper tracking-widest mt-2 uppercase text-sm">Bartan • Kitchenware • Appliances</p>
        </div>
      </main>
    </div>
  );
}
