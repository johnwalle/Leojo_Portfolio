import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import './Skills.css';
import FrontSkills from './FrontSkills/FrontSkills';
import BackEndSkills from './BackEndSkills/backendSkills';
import OtherSkills from './OtherSkills/OtherSkills';
import softSkills from '../../assets/Soft skills-rafiki (2).png';

const Skills = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.5,
            },
        },
    };

    const frontItem = {
        hidden: { opacity: 0, x: -50 },
        show: { opacity: 1, x: 0, transition: { delay: 0.3, type: 'spring', damping: 10, stiffness: 100 } },
    };

    const backItem = {
        hidden: { opacity: 0, y: -50 },
        show: { opacity: 1, y: 0, transition: { delay: 0.9, type: 'spring', damping: 10, stiffness: 100 } },
    };

    const otherItem = {
        hidden: { opacity: 0, x: 50 },
        show: { opacity: 1, x: 0, transition: { delay: 0.6, type: 'spring', damping: 10, stiffness: 100 } },
    };

    const image = {
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0, transition: { delay: 1.2, type: 'spring', damping: 10, stiffness: 100 } },
    };

    return (
        <div id="skills" className="skills-main-container  max-w-full overflow-x-hidden pt-7 pb-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="pt-36 pb-16">
                    <h2 className="text-3xl font-bold text-white skill-heading">Skills</h2>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    <motion.div variants={frontItem} custom={1}>
                        <FrontSkills />
                    </motion.div>
                    <motion.div variants={backItem} custom={2}>
                        <BackEndSkills />
                    </motion.div>
                    <motion.div variants={otherItem} custom={3}>
                        <OtherSkills />
                    </motion.div>
                </motion.div>
                <motion.div
                    className="flex justify-center items-center"
                    variants={image}
                    initial="hidden"
                    animate="show"
                >
                    <div className="image-container w-full max-w-[500px]">
                        <img src={softSkills} alt="soft skills" className="w-full h-auto" />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Skills;