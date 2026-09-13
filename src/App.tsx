import { ThemeProvider } from './context/ThemeContext';
import { CursorGlow } from './components/CursorGlow';
import { MotionMarquee } from './components/MotionMarquee';
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
    <ThemeProvider>
      <div className="min-h-screen bg-surface-darker text-slate-100 selection:bg-metallic-copper selection:text-white flex flex-col justify-between relative">
        {/* Subtle Ambient Cursor Spotlight */}
        <CursorGlow />

        {/* Fixed Glass Navbar */}
        <Navbar />

        {/* Main Motion Sections */}
        <main className="relative z-10">
          <Hero />
          <MotionMarquee />
          <ShowroomExplorer />
          <CollectionsCatalog />
          <WeddingGifting />
          <MaterialCareGuide />
          <VisitUs />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}
