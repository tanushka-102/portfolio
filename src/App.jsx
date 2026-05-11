import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <>
      <Helmet>
        <title>Tanushka Verma | Data Scientist & ML Engineer Portfolio</title>
        <meta name="description" content="Tanushka Verma's professional portfolio showcasing expertise in AI, Machine Learning, Data Analytics, and competitive programming. Explore projects, skills, and academic achievements." />
      </Helmet>
      <div className="min-h-screen bg-slate-950">
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <DataVisualization />
          <Education />
          <Skills />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;
