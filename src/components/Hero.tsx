import { motion } from 'framer-motion';
import catImg from '../assets/cat.png';

const Hero = () => {
  return (
    <section id="about" className="section-container pt-16 lg:pt-20">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1 space-y-8"
        >
          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight">About Me</h1>
          <div className="space-y-6 text-white/60 leading-relaxed text-lg">
            <p>
              I am a Software Engineering student at FPT University Vietnam and graduated with a GPA of 3.5 in May 2026.
            </p>
            <p>
              My core strengths are backend development with .NET 8 and frontend/mobile implementation with React and Flutter. I enjoy building complete products from architecture design to user-facing features.
            </p>
            <p>
              Recently, I worked as a UiPath RPA Intern at FPT Software Philippines, where I built and maintained automation workflows, tested bot executions, and improved process reliability.
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute -inset-10 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-all duration-500 opacity-50" />
          <div className="relative">
            <img 
              src={catImg} 
              alt="Pixel Cat" 
              className="w-64 lg:w-80 h-auto filter drop-shadow-[0_0_20px_rgba(168,85,247,0.3)] animate-float"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
