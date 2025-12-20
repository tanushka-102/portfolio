import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900/80 backdrop-blur-sm border-t border-blue-400/20 py-10 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-4 text-center"
        >

          {/* SOCIAL LINKS */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/tanushka-102"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition transform hover:-translate-y-1"
            >
              <Github size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/tanushka-verma-a89861289/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-blue-400 transition transform hover:-translate-y-1"
            >
              <Linkedin size={20} />
            </a>

            <a
              href="mailto:tanushkaverma102@gmail.com"
              className="text-white/60 hover:text-blue-400 transition transform hover:-translate-y-1"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* COPYRIGHT */}
          <p className="text-white/60 text-sm">
            © {currentYear} <span className="font-medium">Tanushka Verma</span>. All rights reserved.
          </p>

          {/* TAGLINE */}
          <p className="text-white/40 text-xs flex items-center gap-1">
            <span>Built with</span>
            <Heart size={12} className="text-blue-400 fill-blue-400" />
            <span>and data-driven insights</span>
          </p>

        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
