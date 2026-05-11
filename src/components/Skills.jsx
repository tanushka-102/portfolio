import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Monitor, Layout } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: [
        'Python',
        'Java',
        'SQL',
        'C',
        'HTML/CSS'
      ]
    },

    {
      title: 'AI / Machine Learning',
      icon: Brain,
      skills: [
        'Machine Learning',
        'Deep Learning',
        'Natural Language Processing',
        'Computer Vision',
        'Scikit-learn',
        'TensorFlow',
        'OpenCV',
        'YOLO'
      ]
    },

    {
      title: 'Data Science & Analytics',
      icon: Layout,
      skills: [
        'Pandas',
        'NumPy',
        'Data Analytics',
        'Data Preprocessing',
        'Feature Engineering',
        'Model Evaluation',
        'Power BI',
        'Tableau'
      ]
    },

    {
      title: 'Tools & Platforms',
      icon: Monitor,
      skills: [
        'GitHub',
        'Linux',
        'Kali Linux',
        'Jupyter Notebook',
        'VS Code',
        'PyCharm',
        'Streamlit',
        'MS Excel'
      ]
    }
  ];

  const additionalSkills = [
    'HuggingFace Transformers',
    'Generative AI',
    'LLMs',
    'TF-IDF',
    'Rule-based NLP',
    'Predictive Modeling',
    'Data Visualization',
    'Model Deployment',
    'Research Paper Analysis',
    'Excel Automation',
    'Prompt Engineering',
    'AI-powered Applications'
  ];

  return (
    <section
      id="skills"
      className="py-20 px-4 bg-slate-900/50 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full"></div>

      <div className="container mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical Skills
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full mb-6"></div>

          <p className="text-white/70 text-lg max-w-3xl mx-auto leading-relaxed">
            Technical expertise in Artificial Intelligence, Machine Learning,
            Data Science, and modern AI development tools.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: categoryIndex * 0.1
              }}
              whileHover={{
                y: -8,
                scale: 1.02
              }}
              className="group relative bg-slate-800/40 backdrop-blur-xl border border-blue-400/20 rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:border-blue-400/40 hover:shadow-2xl hover:shadow-blue-500/10"
            >

              {/* Card Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-500/5 to-cyan-500/5"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-blue-600/20 border border-blue-400/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <category.icon className="w-7 h-7 text-blue-400" />
                  </div>

                  <h3 className="text-2xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.05
                      }}
                      whileHover={{
                        scale: 1.08,
                        y: -3
                      }}
                      className="px-4 py-2 bg-blue-500/10 border border-blue-400/20 rounded-full text-blue-300 text-sm font-medium hover:bg-blue-500/20 hover:border-blue-400/40 transition-all cursor-default shadow-sm"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-slate-800/40 backdrop-blur-xl border border-blue-400/20 rounded-2xl p-8 overflow-hidden"
        >

          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5"></div>

          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Additional Expertise
            </h3>

            <div className="flex flex-wrap gap-4 justify-center">
              {additionalSkills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.04
                  }}
                  whileHover={{
                    scale: 1.08,
                    y: -3
                  }}
                  className="px-5 py-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-400/20 rounded-full text-blue-200 text-sm font-medium hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/10 transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
