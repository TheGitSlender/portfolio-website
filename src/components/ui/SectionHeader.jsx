
import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ title, subtitle, centered = false, className = '' }) => {
    return (
        <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
            {subtitle && (
                <motion.span
                    className="inline-flex items-center px-4 py-1.5 mb-4 text-[10px] font-black tracking-[0.2em] uppercase rounded-full bg-[#121212] border border-white/10 shadow-lg text-white font-sans"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    {subtitle}
                </motion.span>
            )}
            <motion.h2
                className="text-5xl md:text-7xl font-black italic tracking-tighter leading-[0.85] font-serif"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
            >
                {title}
            </motion.h2>
        </div>
    );
};

export default SectionHeader;
