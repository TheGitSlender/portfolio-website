
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[var(--color-bg-primary)]">
      <div className="container-main">
        <div className="relative rounded-[2.5rem] bg-[var(--color-accent-primary)] overflow-hidden px-8 py-20 md:px-20 md:py-32 text-center text-white">

          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-black rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
              Let's build the <br />
              future together.
            </h2>
            <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl">
              Currently open to internship opportunities and specialized freelance technical consultations.
            </p>

            <Button
              to="mailto:elatlassi.hany@gmail.com"
              className="bg-white text-[var(--color-accent-primary)] hover:bg-white/90 px-8 py-4 text-lg border-none"
            >
              Start a Project <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
