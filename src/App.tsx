import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ShowroomExplorer } from './components/ShowroomExplorer';

export default function App() {
  return (
    <div className="min-h-screen bg-surface-darker text-slate-100 selection:bg-metallic-copper selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <ShowroomExplorer />
      </main>
    </div>
  );
}
