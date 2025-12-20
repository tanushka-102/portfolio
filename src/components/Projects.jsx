import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'IntroSense',
      description:
        'Developed a Streamlit app leveraging HuggingFace Transformers to generate summaries, contextual Q&A, and interactive challenge questions from research papers, improving study efficiency and engagement.',
      technologies: [
        'Python',
        'Streamlit',
        'Pandas',
        'Scikit-learn',
        'Rule-based NLP',
        'TF-IDF'
      ],
      date: 'November 2025',
      demoLink: 'https://introsense-ghbkjcsxvy2edda5eyba4t.streamlit.app/',
      githubLink: 'https://github.com/tanushka-102/IntroSense'
    },
    {
      title: 'Smart Research Assistant',
      description:
        'Built an evaluation system that analyzes student introductions using rubric-based scoring, rule-based NLP summarization, and missing-element detection.',
      technologies: [
        'Python',
        'Streamlit',
        'HuggingFace Transformers',
        'pdfplumber',
        'PyMuPDF'
      ],
      date: 'July 2025',
      demoLink: 'https://ezlabsassessmentintern.streamlit.app/',
      githubLink: 'https://github.com/tanushka-102/Summarify'
    },
    {
      title: 'Face Detection Model',
      description:
        'Designed a computer vision pipeline to detect human faces in images and videos using classical and deep learning approaches.',
      technologies: ['OpenCV', 'Python', 'TensorFlow', 'YOLO'],
      date: 'May 2024',
      demoLink: null,
      githubLink: 'https://github.com/tanushka-102/SkillSprint-2.0_PySight/tree/main/Class%20Projects'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-slate-950">
      <div className="container mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            A selection of my data science and machine learning projects
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-blue-400/20 rounded-xl overflow-hidden flex flex-col"
            >
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-white/70 text-sm mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-400/10 border border-blue-400/30 rounded-full text-blue-300 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto">
                  {project.demoLink && (
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-blue-400 text-blue-400 hover:bg-blue-400/10 flex-1"
                    >
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}

                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-blue-400 text-blue-400 hover:bg-blue-400/10"
                  >
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
