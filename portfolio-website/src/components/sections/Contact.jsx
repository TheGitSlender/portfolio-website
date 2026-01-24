
import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Phone, Gamepad2, ArrowRight, GithubIcon } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      id: 'linkedin',
      name: 'LinkedIn',
      value: 'Hany El Atlassi',
      link: 'https://linkedin.com/in/el-atlassi-hany',
      icon: Linkedin,
      color: '#0077b5',
      bg: 'bg-[#0077b5]/10',
    },
    {
      id: 'email',
      name: 'Email',
      value: 'elatlassi.hany@gmail.com',
      link: 'mailto:elatlassi.hany@gmail.com',
      icon: Mail,
      color: '#EA4335',
      bg: 'bg-[#EA4335]/10',
    },
    {
      id: 'github',
      name: 'Github',
      value: 'TheGitSlender',
      link: 'https://github.com/TheGitSlender',
      icon: GithubIcon,
      color: '#5865F2',
      bg: 'bg-[#5865F2]/10',
    },
    {
      id: 'discord',
      name: 'Discord',
      value: 'TheGitSlender',
      link: 'https://discord.com/users/.theslender',
      icon: Gamepad2,
      color: '#5865F2',
      bg: 'bg-[#5865F2]/10',
    }
  ];

  return (
    <section id="contact" className="py-24 bg-[var(--color-bg-primary)]">
      <div className="container-main">

        {/* Container matching the Framer reference style */}
        <div className="bg-[var(--color-accent-primary)] rounded-[40px] p-8 md:p-12 lg:p-16 overflow-hidden relative">

          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Left: Heading & Intro */}
            <div className="flex flex-col gap-8">
              {/* Contact Badge (like the snippet) */}
              <div className="inline-flex items-center gap-3 bg-[#212121] rounded-full px-5 py-2 w-fit border border-white/5">
                <span className="text-[var(--color-accent-primary)] font-bold">//</span>
                <span className="text-white font-medium">Contact</span>
                <span className="text-[var(--color-accent-primary)] font-bold">//</span>
              </div>

              <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-tight">
                Let's talk.
              </h2>

              <p className="text-white/80 text-lg max-w-md">
                Got questions or ready to start your next project? Reach out and let's bring your ideas to life.
              </p>
            </div>

            {/* Right: Contact Cards Grid */}
            <div className="grid sm:grid-cols-2 gap-4 w-full">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.id}
                  href={method.link || '#'}
                  target={method.link ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="bg-white p-6 rounded-3xl border border-black/5 group hover:shadow-xl transition-all relative overflow-hidden"
                  whileHover={{ y: -5 }}
                >
                  {/* Progressive Dot Indicator */}
                  <div className="absolute top-6 right-6 flex gap-1.5">
                    {[0, 1, 2, 3].map((dotIndex) => (
                      <div
                        key={dotIndex}
                        className={`h-1.5 w-4 rounded-full transition-colors duration-300 ${dotIndex <= index
                            ? 'bg-[var(--color-accent-primary)]'
                            : 'bg-[#e5e5e5]'
                          }`}
                      />
                    ))}
                  </div>

                  <div className={`w-12 h-12 rounded-xl ${method.bg} flex items-center justify-center mb-6`} style={{ color: method.color }}>
                    <method.icon size={24} />
                  </div>

                  <h4 className="text-[#121212] font-bold text-lg mb-1">{method.name}</h4>
                  <p className="text-gray-500 text-sm font-medium truncate">{method.value}</p>
                </motion.a>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
