import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section id="home" className="min-h-[80vh] flex items-center justify-center pt-20">
      <div className="section-container text-center lg:text-left w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-mono tracking-[0.2em] text-sm uppercase mb-4 block">
            Hi, my name is
          </span>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tighter leading-[0.9]">
            Tran Dinh Thinh <br className="hidden md:block" />
            <span className="text-white/40">Software Engineer.</span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed mx-auto lg:mx-0">
            I build full-stack applications with .NET 8, React, TypeScript, Flutter, and PostgreSQL, with a focus on clean architecture and production-ready features. I also have a passion for learning game development with Unity and C#.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
            <a href="#projects" className="px-8 py-4 bg-primary text-white font-bold rounded-xl transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_50px_rgba(168,85,247,0.6)]">
              View Projects
            </a>
            <a href="#contact" className="px-8 py-4 border-2 border-primary/50 text-primary font-bold rounded-xl transition-all hover:bg-primary/10 hover:border-primary active:scale-95">
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
