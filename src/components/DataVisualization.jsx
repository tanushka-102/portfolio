import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, LineChart, PieChart, TrendingUp } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const DataVisualization = () => {
  const [activeTab, setActiveTab] = useState('performance');

  const visualizations = [
    {
      id: 'performance',
      title: 'Model Performance Metrics',
      icon: BarChart3,
      description:
        'Comparison of classification models using accuracy, precision, recall, and F1-score.',
      tools: ['Python', 'Scikit-learn', 'Matplotlib'],
      link: 'https://github.com/tanushka-10/model-performance-analysis'
    },
    {
      id: 'trends',
      title: 'Time Series Trend Analysis',
      icon: LineChart,
      description:
        'Time series analysis highlighting trends and seasonality patterns in real-world datasets.',
      tools: ['Python', 'Pandas', 'Seaborn'],
      link: 'https://github.com/tanushka-10/time-series-analysis'
    },
    {
      id: 'distribution',
      title: 'Feature Distribution Analysis',
      icon: PieChart,
      description:
        'Exploration of feature distributions to identify skewness, outliers, and data imbalance.',
      tools: ['Python', 'Plotly'],
      link: 'https://github.com/tanushka-10/feature-distribution'
    },
    {
      id: 'predictions',
      title: 'Prediction Confidence Monitoring',
      icon: TrendingUp,
      description:
        'Visualization of model confidence scores and prediction stability across samples.',
      tools: ['Python', 'Plotly', 'Streamlit'],
      link: 'https://github.com/tanushka-10/prediction-monitoring'
    }
  ];

  return (
    <section id="visualizations" className="py-20 px-4 bg-slate-900/50">
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
            Data Visualizations
          </h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Interactive visualizations showcasing analytical insights and model performance
          </p>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-slate-800/50 border border-blue-400/20 mb-8">
            {visualizations.map((viz) => (
              <TabsTrigger
                key={viz.id}
                value={viz.id}
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                <viz.icon className="w-4 h-4 mr-2" />
                <span className="hidden md:inline">
                  {viz.title.split(' ')[0]}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>

          {visualizations.map((viz) => (
            <TabsContent key={viz.id} value={viz.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-blue-400/20 rounded-xl p-6"
              >

                {/* Title + Description */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-blue-600/20 flex items-center justify-center">
                    <viz.icon className="w-6 h-6 text-blue-400" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {viz.title}
                    </h3>
                    <p className="text-white/70 mb-3">{viz.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {viz.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1 bg-blue-400/10 border border-blue-400/30 rounded-full text-blue-300 text-xs"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Visualization Image */}
                <div className="relative aspect-video rounded-lg overflow-hidden bg-slate-900/50 border border-blue-400/10">
                  <img
                    className="w-full h-full object-cover"
                    alt={viz.title}
                    src="https://images.unsplash.com/photo-1516383274235-5f42d6c6426d"
                  />
                </div>

                {/* Link */}
                <div className="mt-6 text-right">
                  <a
                    href={viz.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                  >
                    View code / dashboard →
                  </a>
                </div>

              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default DataVisualization;
