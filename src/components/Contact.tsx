import { motion } from 'framer-motion';

const Contact = () => {
  const contactItems = [
    { label: 'Phone', value: '+84 392 280 230', href: 'tel:+84392280230' },
    { label: 'Email', value: 'thinhdinhtran0605@gmail.com', href: 'mailto:thinhdinhtran0605@gmail.com' },
    { label: 'LinkedIn', value: 'linkedin.com/in/dinh-thinh-tran', href: 'https:/www.linkedin.com/in/đình-thịnh-trần-90b1a529a/' },
    { label: 'GitHub', value: 'github.com/thinhdabezt', href: 'https://github.com/thinhdabezt' },
  ];

  return (
    <section id="contact" className="section-container pb-32">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="card max-w-2xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-2 text-center">Get in Touch</h2>
        <p className="text-white/60 mb-10 text-center">Open to internship and fresher software engineering opportunities.</p>

        <div className="space-y-4">
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
              className="flex items-center justify-between p-4 rounded-lg border border-white/10 bg-black/40 hover:border-primary/50 transition-colors"
            >
              <span className="text-white/70">{item.label}</span>
              <span className="text-primary font-medium">{item.value}</span>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
