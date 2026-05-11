import React from 'react';
import { motion } from 'framer-motion';
import { Database, TrendingUp, Award, Code } from 'lucide-react';

const About = () => {
  const stats = [
    { Icon: Database, value: '6+', label: 'AI/ML Projects' },
    { Icon: Code, value: '350+', label: 'DSA Problems Solved' },
    { Icon: Award, value: '8.7+', label: 'Current CGPA' },
    { Icon: TrendingUp, value: '2★', label: 'CodeChef Rating' }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-slate-900/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              className="rounded-2xl shadow-2xl border border-blue-400/20"
              alt="Tanushka Verma - About Me"
              src="https://images.unsplash.com/photo-1591206246224-04b4624adef4"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-white/80 text-lg leading-relaxed">
  I am <span className="font-medium text-white">Tanushka Verma</span>, a B.Tech student in
  Computer Science Engineering (AI & ML) with a strong interest in
  <span className="text-blue-400"> Data Science, Machine Learning, and Artificial Intelligence</span>.
  I enjoy transforming raw data into meaningful insights and building
  intelligent systems that solve real-world problems using data-driven approaches.
</p>

<p className="text-white/80 text-lg leading-relaxed">
  I have hands-on experience working on projects involving
  <span className="text-blue-400"> Natural Language Processing, Computer Vision,
  predictive analytics, and AI-powered applications</span>, using technologies such as
  Python, Scikit-learn, TensorFlow, OpenCV, Streamlit, and Pandas.
  My work focuses on developing end-to-end ML solutions — from data preprocessing
  and feature engineering to model training, evaluation, and deployment.
</p>

<p className="text-white/80 text-lg leading-relaxed">
  Alongside AI/ML development, I actively practice competitive programming and
  problem solving, which strengthens my analytical thinking and coding skills.
  I am continuously exploring emerging technologies including
  <span className="text-blue-400"> Generative AI, LLMs, and advanced data analytics</span>,
  while seeking opportunities to contribute to impactful and innovative projects.
</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(({ Icon, value, label }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-blue-400/20 rounded-xl p-6 text-center"
            >
              <Icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">{value}</div>
              <div className="text-white/60 text-sm">{label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
