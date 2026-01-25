
import { motion } from 'framer-motion';
import Hero from '../components/sections/Hero';
import Experience from '../components/sections/Experience';
import Projects from '../components/sections/Projects';
import Skills from '../components/sections/Skills';
import Certifications from '../components/sections/Certifications';
import Contact from '../components/sections/Contact';

const Home = () => {
  return (
    <div className="flex flex-col gap-0 pb-20">
      <Hero />
      <Experience />
      <Skills />
      <Certifications />
      <Projects />
      <Contact />
    </div>
  );
};


export default Home;
