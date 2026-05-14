import Navbar from './components/Navbar';
import Home from './components/Home';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <Home />
        <Hero />
        <div className="space-y-32">
          <Skills />
          <Experience />
          <Contact />
        </div>
      </main>
      <footer className="py-12 border-t border-white/5 text-center text-white/40 text-sm">
        <div className="section-container py-0">
          <p>© {new Date().getFullYear()} ThinhDaBezt. Built with Passion & Code.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
