import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ title, subtitle, centered = false, className = '' }) => {
    return (
        <motion.div
            className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.15 }
                }
            }}
        >
            {subtitle && (
                <motion.span
                    className="inline-flex items-center px-4 py-1.5 mb-4 text-[10px] font-black tracking-[0.2em] uppercase rounded-full bg-[#121212] border border-white/10 shadow-lg text-white font-sans"
                    variants={{
                        hidden: { opacity: 0, y: 20, scale: 0.9 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
                        }
                    }}
                >
                    {subtitle}
                </motion.span>
            )}
            <div className="overflow-hidden">
                <motion.h2
                    className="text-5xl md:text-7xl font-black italic tracking-tighter leading-[0.85] font-serif"
                    variants={{
                        hidden: { y: "100%" },
                        visible: {
                            y: 0,
                            transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] }
                        }
                    }}
                >
                    {title}
                </motion.h2>
            </div>
        </motion.div>
    );
};

export default SectionHeader;
