
import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ title, subtitle, centered = false, className = '' }) => {
    return (
        <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
            {subtitle && (
                <motion.span
                    className="inline-flex items-center px-4 py-2 mb-4 text-xs font-bold tracking-wider uppercase rounded-full bg-[#121212] border border-white/10 shadow-lg text-white"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    {subtitle}
                </motion.span>
            )}
            <motion.h2
                className="text-4xl md:text-5xl font-bold tracking-tight"
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
