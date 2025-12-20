import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Trophy, Star } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology in CSE (AI & ML)',
      institution: 'KIET Group of Institutions, AKTU',
      location: 'Ghaziabad, UP',
      period: 'Nov 2022 - Aug 2026',
      gpa: '8.62 CGPA'
    },
    {
      degree: 'Senior Secondary School',
      institution: 'Sherwood College, CBSE',
      location: 'Jhansi, UP',
      period: 'April 2020 - July 2021',
      gpa: '95.2%'
    },
    {
      degree: 'High School',
      institution: 'Sherwood College, CBSE',
      location: 'Jhansi, UP',
      period: 'April 2018 - May 2019',
      gpa: '94.8%'
    }
  ];

  const certifications = [
    'Cybersecurity Foundations - Palo Alto Networks Cybersecurity Academy',
    'Deloitte Data Analytics Virtual Job Simulation - Forage',
    'Machine Learning - Model Development',
    'Data Preprocessing using scikit-learn, Pandas & NumPy'
  ];

  const achievements = [
    { text: 'Secured 1st place in the Department-level CodeChef Contest, demonstrating strong problem-solving and competitive programming skills.', icon: Trophy },
    { text: 'Achieved a 2 star CodeChef rating', icon: Star },
    { text: 'Attained a LeetCode Contest Rank of 1394 with 300+ problems solved in Java', icon: Award }
  ];

  return (
    <section id="education" className="py-20 px-4 bg-slate-950">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Education & Achievements</h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            My academic journey and competitive programming milestones
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <GraduationCap className="w-8 h-8 text-blue-400" />
              <h3 className="text-2xl font-bold text-white">Academic Degrees</h3>
            </motion.div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-blue-400/20 rounded-xl p-6 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full blur-3xl group-hover:bg-blue-600/10 transition-colors"></div>
                  
                  <div className="relative">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                      <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                      <span className="text-blue-400 text-sm font-medium px-3 py-1 bg-blue-400/10 rounded-full mt-2 sm:mt-0 self-start">
                        {edu.gpa}
                      </span>
                    </div>
                    
                    <p className="text-blue-300 font-medium mb-1">{edu.institution}</p>
                    <p className="text-white/60 text-sm mb-2">{edu.location}</p>
                    <p className="text-white/50 text-sm mb-3">{edu.period}</p>
                    <p className="text-white/70 text-sm leading-relaxed">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <Award className="w-8 h-8 text-blue-400" />
              <h3 className="text-2xl font-bold text-white">Certifications & Awards</h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-blue-400/20 rounded-xl p-6 mb-8"
            >
              <h4 className="text-lg font-bold text-white mb-4 border-b border-white/10 pb-2">Certifications</h4>
              <div className="grid gap-4 mb-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-slate-900/30 border border-blue-400/10 hover:border-blue-400/30 transition-all"
                  >
                    <div className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0"></div>
                    <span className="text-white/80 text-sm">{cert}</span>
                  </motion.div>
                ))}
              </div>

               <h4 className="text-lg font-bold text-white mb-4 border-b border-white/10 pb-2">Key Achievements</h4>
               <div className="grid gap-4">
                  {achievements.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      whileHover={{ x: 10 }}
                      className="flex items-start gap-3 p-3 rounded-lg bg-slate-900/30 border border-blue-400/10 hover:border-blue-400/30 transition-all"
                    >
                      <item.icon className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                      <span className="text-white/80 text-sm">{item.text}</span>
                    </motion.div>
                  ))}
               </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
