import React from 'react';
import './Skills.css';
import FrontSkills from './FrontSkills/FrontSkills';
import BackEndSkills from './BackEndSkills/backendSkills';
import OtherSkills from './OtherSkills/OtherSkills';
import softSkills from '../../assets/Soft skills.gif';

const Skills = () => {
    return (
        <div className="skills-main-container py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className='p-6'>
                    <h2 className="text-3xl font-bold text-white skill-heading">Skills</h2>
                </div>
                <div className="image-container">
                    <img  src={softSkills} alt='soft skills' />
                    
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div>
                        <FrontSkills />
                    </div>
                    <div>
                        <BackEndSkills />
                    </div>
                    <div>
                        <OtherSkills />
                    </div>
                </div>

            </div>
        </div >
    );
};

export default Skills;