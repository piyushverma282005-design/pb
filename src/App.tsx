import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ShowroomExplorer } from './components/ShowroomExplorer';
import { CollectionsCatalog } from './components/CollectionsCatalog';
import { WeddingGifting } from './components/WeddingGifting';
import { MaterialCareGuide } from './components/MaterialCareGuide';
import { VisitUs } from './components/VisitUs';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-surface-darker text-slate-100 selection:bg-metallic-copper selection:text-white flex flex-col justify-between">
      <Navbar />
      <main>
        <Hero />
        <ShowroomExplorer />
        <CollectionsCatalog />
        <WeddingGifting />
        <MaterialCareGuide />
        <VisitUs />
      </main>
      <Footer />
    </div>
  );
}
