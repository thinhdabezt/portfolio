import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      time: 'Jan 2026 - May 2026',
      title: 'AURA Eyes',
      subtitle: '.NET 8, React, TypeScript, PostgreSQL, SignalR, Docker',
      description:
        'Developed a retinal screening platform with AI-assisted analysis, retinal image upload, heatmap results, ophthalmologist validation, secure booking and consultation workflows, and responsive patient/clinic dashboards.',
    },
    {
      time: 'Sep 2025 - Nov 2025',
      title: 'AnHu Food App',
      subtitle: 'Flutter, Dart, .NET 8, PostgreSQL, SignalR, VNPay',
      description:
        'Built a full-stack food ordering app with authentication, cart and checkout, order lifecycle, shipper assignment, real-time chat, payment integration, reviews, promotions, and notifications using Flutter MVVM and .NET Clean Architecture.',
    },
    {
      time: 'May 2025 - Jul 2025',
      title: 'Lost Soul',
      subtitle: 'Unity, C#, 2D Game Development',
      description:
        'Developed a 2D side-scrolling hack-and-slash game in Unity featuring melee combat, platforming, enemy waves, boss fights, collectibles, and progression systems.',
    },
    {
      time: 'Jan 2025 - Apr 2025',
      title: 'UiPath RPA Intern',
      subtitle: 'FPT Software Philippines',
      description:
        'Developed and maintained UiPath automation workflows, analyzed process requirements, tested bot execution results, and collaborated with senior developers to debug reliability issues and document implementation details.',
    },
  ];

  return (
    <section id="project" className="section-container">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-16"
      >
        Projects & Experience
      </motion.h2>
      
      <div className="relative border-l-2 border-white/10 ml-8 md:ml-12 space-y-12">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="relative pl-12 md:pl-20"
          >
            {/* Timeline Dot */}
            <div className="absolute left-0 -translate-x-1/2 top-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary flex items-center justify-center text-sm md:text-base font-bold shadow-[0_0_20px_rgba(168,85,247,0.5)] z-10">
              {exp.time.split(' - ')[0].split(' ')[1]}
            </div>
            
            <div className="card relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-primary before:rounded-l-xl">
              <p className="text-primary/90 text-sm font-semibold mb-2">{exp.time}</p>
              <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
              <p className="text-primary font-medium mb-4">{exp.subtitle}</p>
              <p className="text-white/60 leading-relaxed max-w-2xl">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
