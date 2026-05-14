import { useEffect, useState } from 'react';

const Navbar = () => {
  const navLinks = ['Home', 'About', 'Projects', 'Blog', 'Contact'];
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sectionIds = navLinks.map((item) => item.toLowerCase());
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: '-40% 0px -40% 0px',
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-4xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-3xl font-logo text-primary tracking-tight">
          ThinhDaBezt
        </div>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              aria-current={activeSection === item.toLowerCase() ? 'page' : undefined}
              className={`text-sm font-medium transition-all duration-300 hover:text-primary ${
                activeSection === item.toLowerCase() ? 'text-primary' : 'text-white/60'
              }`}
            >
              {item}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <button className="text-white/70 hover:text-primary transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
