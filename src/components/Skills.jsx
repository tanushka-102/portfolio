import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Monitor, Layout } from 'lucide-react'; // Removed Database as it's not directly used for an icon

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      skills: ['C', 'Java', 'Python', 'SQL', 'HTML/CSS', 'Macros']
    },
    {
      title: 'Tools & Environments',
      icon: Monitor,
      skills: ['MS Excel', 'VS Code', 'PyCharm', 'Jupyter Notebook']
    },
    {
      title: 'Technologies & Frameworks',
      icon: Layout,
      skills: ['Linux', 'Kali Linux', 'GitHub', 'Power BI', 'Tableau', 'NumPy', 'Pandas', 'OpenCV']
    },
    {
      title: 'Domain Expertise',
      icon: Brain,
      skills: ['Data Analytics', 'Machine Learning - Model Development', 'Evaluation', 'Data Preprocessing using scikit-learn', 'Pandas', 'NumPy']
    }
  ];

  const additionalSkills = [
    'Rule-based NLP',
    'Streamlit',
    'HuggingFace Transformers',
    'TF-IDF',
    'Excel Rubric Processing',
    'YOLO',
    'Scikit-learn',
    'Computer Vision'
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-slate-900/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Comprehensive technical skillset in Data Science and Machine Learning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-blue-400/20 rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-blue-600/20 flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 bg-blue-400/10 border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium hover:bg-blue-400/20 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-slate-800/50 backdrop-blur-sm border border-blue-400/20 rounded-xl p-6"
        >
          <h3 className="text-xl font-bold text-white mb-6 text-center">Additional Technologies</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {additionalSkills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 bg-blue-400/10 border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium hover:bg-blue-400/20 transition-all cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;