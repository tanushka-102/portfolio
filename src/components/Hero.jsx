import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/50 via-slate-950 to-slate-950"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-blue-400 text-lg mb-4 font-medium"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold text-white mb-4"
          >
            Tanushka Verma
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl text-blue-300 mb-6"
          >
            Machine Learning Engineer | Data Scientist
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-white/70 text-lg mb-8 max-w-xl"
          >
            Passionate AI & Machine Learning Engineer focused on building intelligent systems using Deep Learning, NLP, Computer Vision, and Data Analytics. Experienced in developing real-world AI applications with Python, TensorFlow, Streamlit, and modern ML frameworks.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            {/* VIEW RESUME */}
            <Button
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-6 text-base"
            >
              <a
                href="/resume/Tanushka_Verma.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
              <Eye className="mr-2" size={20} />
              View Resume
              </a>
            </Button>


            {/* CONTACT */}
            <Button
              onClick={() => {
                const el = document.querySelector('#contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              variant="outline"
              className="border-blue-400 text-blue-400 hover:bg-blue-400/10 px-6 py-6 text-base"
            >
              <Mail className="mr-2" size={20} />
              Get in Touch
            </Button>
          </motion.div>

          {/* SOCIAL LINKS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex gap-4"
          >
            {[
              {
                Icon: Github,
                href: 'https://github.com/tanushka-102',
                external: true,
              },
              {
                Icon: Linkedin,
                href: 'https://www.linkedin.com/in/tanushka-verma-a89861289/',
                external: true,
              },
              {
                Icon: Mail,
                href: 'https://mail.google.com/mail/?view=cm&fs=1&to=tanushkaverma102@gmail.com',
                external: true,
              },
            ].map(({ Icon, href, external }, index) => (
              <motion.a
                key={index}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="relative z-20 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-blue-400 hover:border-blue-400/50 transition-all"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/20 to-cyan-600/20 blur-3xl"
            />

            <div className="relative rounded-2xl overflow-hidden border-2 border-blue-400/30 shadow-2xl shadow-blue-500/20">
              <img
                src="/images/Tanushka.jpg"
                alt="Tanushka Verma - Data Scientist"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
