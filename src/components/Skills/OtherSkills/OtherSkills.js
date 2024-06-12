import React from 'react'
import '../FrontSkills/frontSkill.css'
import gitLogo from '../../../assets/icons8-git-logo-200.png'
import githubLogo from '../../../assets/icons8-github-squared-200.png'
import vsLogo from '../../../assets/icons8-visual-studio-code-2019-200.png'
import postmanLogo from '../../../assets/Postman API Platform.png'
import vercelLogo from '../../../assets/Vercel.png'


const OtherSkills = () => {
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
                                        <img src={gitLogo} alt="React Logo" />
                                        <img src={githubLogo} alt="React Logo" />
                                        <img src={vsLogo} alt="React Logo" />
                                        <img src={postmanLogo} alt="React Logo" />
                                        <img src={vercelLogo} alt="React Logo" />

                                    </span>


                                </div>
                            </div>

                        </div>
                        <div class="mist-container">
                            <div class="mist"></div>
                        </div>
                        <strong id="text-ext">Others</strong>
                        <strong id="text-border">Others</strong>
                    </div>

                </div>


                <div className='back'>
                    <div className="front-skills-card">
                        <div className="code-editor">
                            <div className="header">
                                <span className="title">OTHER SKILLS</span>
                            </div>
                            <div className="editor-content">
                                <code className="code">
                                    <p className='flex'><span className="color-0">.other_skills</span> <pre className='pl-1'>{`{`}</pre><span></span></p>

                                    <p className="property">
                                        <span className="color-2">Git</span><span>: </span>
                                        <span className="color-1">git init</span>;
                                    </p>
                                    <p className="property">
                                        <span className="color-2">Github</span><span>: </span>
                                        <span className="color-1">git add .</span> ;
                                    </p>
                                    <p className="property">
                                        <span className="color-2">VS</span><span>: </span>
                                        <span className="color-1">Run and Debug</span>;
                                    </p>
                                    <p className="property">
                                        <span className="color-2">Vercel</span><span>: </span>
                                        <span className="color-1">Continuous Deployment</span>;
                                    </p>
                                    <p className="property">
                                        <span className="color-2">Postman</span><span>: </span>
                                        <span className="color-1">PUT /users/register</span>;
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

export default OtherSkills

