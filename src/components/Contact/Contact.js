import './Contact.css'
import ContactForm from './ContactForm/ContactForm';
import { Link } from 'react-router-dom'
import profile from '../../assets/leojo_photo.jpg'

const ContactPage = () => {
    return (



        <div id='contact' className='relative'>

            <div className="py-16 top-container">
                <svg className='animated_background' version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMax slice">
                    <defs>
                        <linearGradient id="bg">
                            <stop offset="0%" style={{ stopColor: 'rgba(130, 158, 249, 0.06)' }}></stop>
                            <stop offset="50%" style={{ stopColor: 'rgba(76, 190, 255, 0.6)' }}></stop>
                            <stop offset="100%" style={{ stopColor: 'rgba(115, 209, 72, 0.2)' }}></stop>
                        </linearGradient>
                        <path id="wave" fill="url(#bg)" d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
      s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z" />
                    </defs>
                    <g>
                        <use href='#wave' style={{ opacity: 0.3 }}>
                            <animateTransform
                                attributeName="transform"
                                attributeType="XML"
                                type="translate"
                                dur="10s"
                                calcMode="spline"
                                values="270 230; -334 180; 270 230"
                                keyTimes="0; .5; 1"
                                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                                repeatCount="indefinite" />
                        </use>
                        <use href='#wave' style={{ opacity: 0.6 }}>
                            <animateTransform
                                attributeName="transform"
                                attributeType="XML"
                                type="translate"
                                dur="8s"
                                calcMode="spline"
                                values="-270 230;243 220;-270 230"
                                keyTimes="0; .6; 1"
                                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                                repeatCount="indefinite" />
                        </use>
                        <use href='#wave' style={{ opacity: 0.9 }}>
                            <animateTransform
                                attributeName="transform"
                                attributeType="XML"
                                type="translate"
                                dur="6s"
                                calcMode="spline"
                                values="0 230;-140 200;0 230"
                                keyTimes="0; .4; 1"
                                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                                repeatCount="indefinite" />
                        </use>
                    </g>
                </svg>


                <div className="contact_container -top-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-60 ">
                    <div className='py-12'>
                        <button class="Projects-Button">
                            <span class="text">Contact me</span>
                        </button>
                    </div>
                    <ContactForm />
                </div>

                <div className='getin_touch_container flex flex-col justify-center items-start absolute bottom-0 w-full py-4 '>

                    <div class="contact-card">
                        <div class="card-photo">
                            <img src={profile} alt='leojo pp' />
                        </div>
                        <div class="card-title fles flex-col">JOHN WALE <br />
                            <span>Fullstack dev</span>

                        </div>
                        <div class="card-socials">

                            <button class="card-socials-btn telegram1">
                                <Link to='http://t.me/Leojo_W' target="_blank">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.6651 3.40642L3.43309 10.7938C2.64309 11.1238 2.65609 11.6938 3.32009 11.9138L8.18609 13.4938L17.7771 6.41842C18.0871 6.16842 18.3761 6.27642 18.1471 6.54042L9.67009 14.5824H9.66809L9.67009 14.5834L9.11009 19.4984C9.49209 19.4984 9.67509 19.2994 9.88209 19.1014L12.3351 16.6684L17.1301 20.5924C17.7241 20.9234 18.1531 20.7704 18.3001 20.0284L21.9661 4.46642C22.1731 3.59942 21.5671 3.17342 20.6651 3.40642Z" fill="currentColor" />
                                    </svg></Link>
                            </button>
                            <button class="card-socials-btn github1">
                                <Link to='https://github.com/johnwalle' target="_blank">
                                    <svg viewBox="0 0 24 24" height="33" width="33" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                                </Link>
                            </button>
                            <button class="card-socials-btn linkedin1">
                                <Link to='https://www.linkedin.com/in/yohannes-walle-a872192a0/' target="_blank">

                                    <svg height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m51.326 185.85h90.011v270.872h-90.011zm45.608-130.572c-30.807 0-50.934 20.225-50.934 46.771 0 26 19.538 46.813 49.756 46.813h.574c31.396 0 50.948-20.814 50.948-46.813-.589-26.546-19.551-46.771-50.344-46.771zm265.405 124.209c-47.779 0-69.184 26.28-81.125 44.71v-38.347h-90.038c1.192 25.411 0 270.872 0 270.872h90.038v-151.274c0-8.102.589-16.174 2.958-21.978 6.519-16.174 21.333-32.923 46.182-32.923 32.602 0 45.622 24.851 45.622 61.248v144.926h90.024v-155.323c0-83.199-44.402-121.911-103.661-121.911z"></path></svg>
                                </Link>
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-center text-center text-white mt-4 w-full">
                        &copy; 2024. Made by <span className='text-black pl-2'>Leojo</span>
                    </div>


                </div>

            </div>

        </div>









    );
};

export default ContactPage;




{/* <div className="flex flex-col items-center  pt-24 left-0 -bottom-12 absolute">

</div> */}