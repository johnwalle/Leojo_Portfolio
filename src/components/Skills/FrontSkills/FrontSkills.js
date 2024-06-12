import React, { useEffect } from 'react'
import './frontSkill.css'
import reactLogo from '../../../assets/icons8-react-100.png'
import NextLogo from '../../../assets/Next.js.png'
import HtmlLogo from '../../../assets/icons8-html-200.png'
import CssLogo from '../../../assets/icons8-css-200.png'
import JsLogo from '../../../assets/icons8-javascript-logo-200.png'
import TailwindLogo from '../../../assets/icons8-tailwind-css-200.png'
import reduxLogo from '../../../assets/icons8-redux-200.png'

const FrontSkills = () => {
    return (
        <div className="front_skill_top_container">
            <div className="front_skills_card">

                <div className="front">
                    <div className="card-border">
                        <div className="card-bg">
                            {/* <div className="container-logo">
                                <div className="logo"></div>
                                <div className="logo-inside">
                                    <div className="first">F</div>
                                    <div className="second"></div>
                                </div>
                            </div> */}
                            <div id="blur-area"></div>
                            <div className="marquee">
                                <div className="marquee__inner" aria-hidden="true">
                                    <span className="viper">
                                        <img src={HtmlLogo} alt="React Logo" />
                                        <img src={CssLogo} alt="React Logo" />
                                        <img src={JsLogo} alt="React Logo" />
                                        <img src={reactLogo} alt="React Logo" />
                                        <img src={NextLogo} alt="React Logo" />
                                        <img src={reduxLogo} alt="React Logo" />
                                        <img src={TailwindLogo} alt="React Logo" />

                                    </span>


                                </div>
                            </div>

                        </div>
                        <div className="mist-container">
                            <div className="mist"></div>
                        </div>
                        <strong id="text-ext">Frontend</strong>
                        <strong id="text-border">Frontend</strong>
                    </div>

                </div>


                <div className='back'>
                    <div className="front-skills-card">
                        <div className="code-editor">
                            <div className="header">
                            <span className="title">FRONTEND SKILLS</span>
                            </div>
                            <div className="editor-content">
                                <code className="code">
                                    <p className='flex'><span className="color-0">.frontend_skills</span> <pre className='pl-1'>{`{`}</pre><span></span></p>

                                    <p className="property flex">
                                        <span className="color-2">Html</span><span>: </span> 
                                        <span className="color-1 "><pre className='pl-1'>{`<div></div>`}</pre></span>;
                                    </p>
                                    <p className="property">
                                        <span className="color-2">Css</span><span>: </span>
                                          <span className="color-preview-1"></span><span className=""><span className="color-3">rgba(</span>0, 0, 0, 0.5<span className="color-3">)</span></span>;
                                    </p>
                                    <p className="property">
                                        <span className="color-2">JavaScript</span><span>: </span>
                                        <span className="color-1">Console.log()</span>;
                                    </p>
                                    <p className="property flex">
                                        <span className="color-2">React</span><span>: </span>
                                        <span className="color-1 flex pl-1 ">import  <pre className='pl-1'>{`{useEffect}`}</pre></span>;
                                    </p>
                                    <p className="property">
                                        <span className="color-2">Next</span><span>: </span>
                                        <span className="color-1">'use client'</span>;
                                    </p>
                                    <p className="property">
                                        <span className="color-2">Zustand</span><span>: </span>
                                        <span className="color-1">useStore</span>;
                                    </p>
                                    <p className="property">
                                        <span className="color-2">Tailwind</span><span>: </span>
                                        <span className="color-1"><span className="color-preview-1"></span>text-gray-600</span>;
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

export default FrontSkills

