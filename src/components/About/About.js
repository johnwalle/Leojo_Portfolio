import './About.css'

import React from 'react'

const About = () => {
    return (
        <div id='about' className="outer">
            <div class="dot"></div>
            <div class="card">
                <div class="text">About Me</div>
                <div class="line topl"></div>
                <div class="line leftl"></div>
                <div class="line bottoml"></div>
                <div class="line rightl"></div>
            </div>
            <div className='about-me-card text-white'>


                <div class="notification">
                    <div class="notiglow"></div>
                    <div class="notiborderglow"></div>
                    <div class="notititle">Get to know me!
                    </div>
                    <div class="notibody">
                        I'm a versatile Full-Stack Web Developer, experienced in building and managing both the front-end and back-end of websites and web applications. This allows me to ensure the overall success and seamless integration of the complete product. You can check out some of my work in the Projects section.

                        In addition to my development work, I also enjoy sharing the knowledge and insights I've gained over the years with the broader developer community. Feel free to connect with me on LinkedIn and Instagram, where I regularly post helpful content related to web development and programming.

                        I'm always open to new job opportunities where I can contribute my skills, continue learning, and grow as a developer. If you have a role that aligns with my experience, please don't hesitate to get in touch.
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About
