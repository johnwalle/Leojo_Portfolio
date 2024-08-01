import React, { useRef } from 'react';
import './Skills.css';
import FrontSkills from './FrontSkills/FrontSkills';
import BackEndSkills from './BackEndSkills/backendSkills';
import OtherSkills from './OtherSkills/OtherSkills';
import softSkills from '../../assets/Soft skills-rafiki (2).png';

const Skills = () => {
    const skillsContainerRef = useRef(null);

    const handleSkillsScroll = () => {
        if (skillsContainerRef.current) {
            skillsContainerRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return (
        <div id="skills" className="skills-main-container pt-7 pb-24 " ref={skillsContainerRef}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="pt-36 pb-16">
                    <h2 className="text-3xl font-bold text-white skill-heading">Skills</h2>
                </div>



                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className='tilt-in-left-1 '>
                        <FrontSkills />
                    </div>
                    <div className='tilt-in-top-1'>
                        <BackEndSkills />
                    </div>
                    <div className='tilt-in-right-1'>
                        <OtherSkills />
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="image-container w-full max-w-[500px]">
                        <img src={softSkills} alt="soft skills" className="w-full h-auto" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;