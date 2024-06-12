import React from 'react'
import '../FrontSkills/frontSkill.css'
import mongoLogo from '../../../assets/icons8-mongodb-200.png'
import expressLogo from '../../../assets/icons8-express-js-200.png'
import nodeLogo from '../../../assets/icons8-node-js-200.png'
import mysqlLogo from '../../../assets/icons8-mysql-logo-200.png'

const BackEndSkills = () => {
    return (
        <div class="front_skill_top_container ">
            <div class="front_skills_card">

                <div class="front">
                    <div class="card-border">
                        <div class="card-bg">
                            {/* <div class="container-logo">
                                <div class="logo"></div>
                                <div class="logo-inside">
                                    <div class="first">F</div>
                                    <div class="second"></div>
                                </div>
                            </div> */}
                            <div id="blur-area"></div>
                            <div class="marquee">
                                <div class="marquee__inner" aria-hidden="true">
                                    <span class="viper">
                                        <img src={nodeLogo} alt='nodo js logo' />
                                        <img src={expressLogo} alt='express logo' />
                                        <img src={mongoLogo} alt='mongodb logo' />
                                        <img src={mysqlLogo} alt='mysql logo' />
                                    </span>


                                </div>
                            </div>

                        </div>
                        <div class="mist-container">
                            <div class="mist"></div>
                        </div>
                        <strong id="text-ext">Backend</strong>
                        <strong id="text-border">Backend</strong>
                    </div>

                </div>

                <div className='back'>
                    <div className="front-skills-card">
                        <div className="code-editor">
                            <div className="header">
                                <span className="title">BACKEND SKILLS</span>
                            </div>
                            <div className="editor-content">
                                <code className="code">
                                    <p className='flex'><span className="color-0">.backend_skills</span> <pre className='pl-1'>{`{`}</pre><span></span></p>

                                    <p className="property">
                                        <span className="color-2">Node</span><span>: </span>
                                        <span className="color-1 "> res.json(users)</span>;
                                    </p>
                                    <p className="property">
                                        <span className="color-2">Express</span><span>: </span>
                                        <span className="color-1">require(express)</span>;
                                    </p>
                                    <p className="property">
                                        <span className="color-2">Mongodb</span><span>: </span>
                                        <span className="color-1">mongoose.connect</span>;
                                    </p>
                                    <p className="property">
                                        <span className="color-2">MySql</span><span>: </span>
                                        <span className="color-1">'SELECT * FROM users'</span>;
                                    </p>
                                   
                                    <span><pre className='pl-1'>{`}`}</pre></span>
                                </code>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>

    )
}

export default BackEndSkills

