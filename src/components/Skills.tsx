import { motion } from 'framer-motion';

const Skills = () => {
  const skillCards = [
    { title: 'Languages', tags: ['C#', 'Dart', 'Java', 'Python', 'SQL', 'JavaScript', 'TypeScript', 'HTML/CSS'] },
    { title: 'Backend', tags: ['.NET 8', 'ASP.NET Core Web API', 'Entity Framework Core', 'MediatR', 'SignalR', 'JWT', 'Swagger'] },
    { title: 'Frontend & Mobile', tags: ['React', 'Vite', 'Tailwind CSS', 'Zustand', 'React Query', 'Flutter', 'Provider', 'SQLite'] },
    { title: 'Database & Tools', tags: ['PostgreSQL', 'Supabase', 'Docker', 'Git', 'Postman', 'Visual Studio', 'VS Code', 'Unity', 'UiPath Studio'] },
    { title: 'Architecture', tags: ['Clean Architecture', 'MVVM', 'CQRS', 'Repository Pattern', 'Unit of Work', 'Dependency Injection'] },
    { title: 'Highlights', tags: ['Google OAuth 2.0', 'OTP', 'RBAC', 'Real-time Chat', 'VNPay Integration'] },
  ];

  return (
    <section id="projects" className="section-container">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-12"
      >
        Skills & Technologies
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCards.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="card hover:border-primary/50 group"
          >
            <h3 className="text-xl font-semibold mb-6 group-hover:text-primary transition-colors">
              {card.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {card.tags.map((tag, tagIdx) => (
                <span key={tagIdx} className="badge group-hover:bg-primary/20 transition-all duration-300">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
