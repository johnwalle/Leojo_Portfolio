import './Home.css'
import Leojo from '../../assets/leojo_photo.jpg'
import { FaTelegramPlane } from "react-icons/fa";


const Home = () => {
    return (
        <div className="Home-container  pt-36  grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-white flex flex-col pl-10 items-center justify-center">
                <div className='satisfy-regular flex items-center '>
                    <p className='p-2'> Hello There!</p>
                    <img className='wobble-hor-bottom' width="48" height="48" src="https://img.icons8.com/emoji/48/waving-hand-emoji.png" alt="waving-hand-emoji" />
                </div>
                <div className='text-shadow-pop-left  header-font  py-4  flex flex-col'>
                    <span>I am Yohannes</span>
                    <span> Web developer</span>
                </div>
                <div>
                    <p className='text-focus-in oleo-script-regular max-w-xs'>The combination of my passion for design code and interaction web design world.

                    </p>
                    <div class="share puff-in-center text-shadow-drop-center">
                        <a class="ln" target='_blank' href="https://www.linkedin.com/in/yohannes-walle-a872192a0/">
                            <svg className='linkdin' width="50"
                                height="85"
                                fill="#ffffff"
                                id="IconChangeColor"
                                viewBox="0 -2 44 44"
                                version="1.1" >
                                <g id="Icons" stroke="none" stroke-width="1">
                                    <g transform="translate(-702.000000, -265.000000)">
                                        <path d="M746,305 L736.2754,305 L736.2754,290.9384 C736.2754,287.257796 734.754233,284.74515 731.409219,284.74515 C728.850659,284.74515 727.427799,286.440738 726.765522,288.074854 C726.517168,288.661395 726.555974,289.478453 726.555974,290.295511 L726.555974,305 L716.921919,305 C716.921919,305 717.046096,280.091247 716.921919,277.827047 L726.555974,277.827047 L726.555974,282.091631 C727.125118,280.226996 730.203669,277.565794 735.116416,277.565794 C741.21143,277.565794 746,281.474355 746,289.890824 L746,305 L746,305 Z M707.17921,274.428187 L707.117121,274.428187 C704.0127,274.428187 702,272.350964 702,269.717936 C702,267.033681 704.072201,265 707.238711,265 C710.402634,265 712.348071,267.028559 712.41016,269.710252 C712.41016,272.34328 710.402634,274.428187 707.17921,274.428187 L707.17921,274.428187 L707.17921,274.428187 Z M703.109831,277.827047 L711.685795,277.827047 L711.685795,305 L703.109831,305 L703.109831,277.827047 L703.109831,277.827047 Z" id="LinkedIn">
                                        </path>
                                    </g>
                                </g>
                            </svg>
                        </a>
                        <a class="git" href="https://www.github.com/johnwalle/" target="_blank">
                            <svg
                                class="github"
                                width="50"
                                height="85"
                                fill="#ffffff"
                                viewBox="0 0 16 16"
                                id="IconChangeColor"
                            >
                                <path d="M9.464 17.178a4.506 4.506 0 0 1-2.013.317 4.29 4.29 0 0 1-2.007-.317.746.746 0 0 1-.277-.587c0-.22-.008-.798-.012-1.567-2.564.557-3.105-1.236-3.105-1.236a2.44 2.44 0 0 0-1.024-1.348c-.836-.572.063-.56.063-.56a1.937 1.937 0 0 1 1.412.95 1.962 1.962 0 0 0 2.682.765 1.971 1.971 0 0 1 .586-1.233c-2.046-.232-4.198-1.023-4.198-4.554a3.566 3.566 0 0 1 .948-2.474 3.313 3.313 0 0 1 .091-2.438s.773-.248 2.534.945a8.727 8.727 0 0 1 4.615 0c1.76-1.193 2.532-.945 2.532-.945a3.31 3.31 0 0 1 .092 2.438 3.562 3.562 0 0 1 .947 2.474c0 3.54-2.155 4.32-4.208 4.548a2.195 2.195 0 0 1 .625 1.706c0 1.232-.011 2.227-.011 2.529a.694.694 0 0 1-.272.587z"></path>                            </svg>
                        </a>
                        <a class="ins" href="https://www.instagram.com/_leojo_w/" target="_blank">
                            <svg
                                id="IconChangeColor"
                                viewBox="0 0 16 25"
                                class="instagram"
                                fill="currentColor"
                                height="70"
                                width="90"
                            >
                                <path
                                    fill="#ffffff"
                                    id="mainIconPathAttribute"
                                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                                ></path>
                            </svg>
                        </a>
                        <a class="tg" href="http://t.me/Leojo_W" target='_blank'>
                            <svg

                                width="45"
                                height="45"
                                class="telgram"
                                fill="white"
                                viewBox="0 0 16 16"
                            >
                                <FaTelegramPlane />


                            </svg>
                        </a>
                    </div>

                </div>
            </div>
            <div className="image-container flex items-center justify-center p-4">
                <img src={Leojo} alt='portfolio image' className='portfolio_image bounce-in-top waving-animation roll-in-right'
                />
            </div>
        </div>
    )
}

export default Home
