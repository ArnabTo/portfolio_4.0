import "../index.css";
import Proj_1 from "../assets/proj1.png"
import Proj_2 from "../assets/proj2.png"
import Proj_3 from "../assets/proj3.png"
import Proj_4 from "../assets/proj4.png"
import Proj_5 from "../assets/proj5.png"
import Proj_6 from "../assets/proj6.png"
import Proj_7 from "../assets/proj7.png"
import Proj_8 from "../assets/proj8.png"
import Proj_9 from "../assets/proj9.png"
import Proj_10 from "../assets/proj10.png"
import Proj_11 from "../assets/proj11.png"
import Proj_12 from "../assets/proj12.png"
import { useState } from "react";
export default function MyWorks() {
    const [show, setShow] = useState(false);
    return (
        <div id="projs">
            <div className="work">
                <div className="work_Cont">
                    <header>My Works.</header>
                    <div className="works">
                        <div className="work_div" data-aos="zoom-out-up">
                            <img className="img-fluid" src={Proj_1} alt="nature" />
                            <div className="info">
                                <h3>Portfolio_Site 1.0</h3>
                                <p>
                                    Portfolio Site using HTML, CSS, Bootstrap, Javascript.
                                </p>
                                <a href="https://arnabto.github.io/portfolio1.0.github.io/" className="bg-[#252525] text-white px-4 py-2 rounded font-medium">Preview</a>
                            </div>
                        </div>
                        <div className="work_div" data-aos="zoom-out-up">
                            <img className="img-fluid" src={Proj_2} alt="nature" />
                            <div className="info">
                                <h3>Portfolio_Site 2.0</h3>
                                <p>
                                Portfolio Site using HTML, CSS, Bootstrap, JavaScript.
                                </p>
                                <a href="https://arnabto.github.io/portfolio2.0.github.io/" className="bg-[#252525] text-white px-4 py-2 rounded font-medium">Preview.</a>
                            </div>
                        </div>
                        {
                        show && <span className="works">
                            <div className="work_div" data-aos="zoom-out-up">
                            <img className="img-fluid" src={Proj_3} alt="nature" />
                            <div className="info">
                                <h3>Portfolio_Site 3.0</h3>
                                <p>
                                    Portfolio Site with Reactjs, Framer-Motion, React-router etc.
                                </p>
                                <a href="https://github.com/ArnabTo/portfolio3.0" className="bg-[#252525] text-white px-4 py-2 rounded font-medium">Preview.</a>
                            </div>
                        </div>
                        <div className="work_div" data-aos="zoom-out-up">
                            <img className="img-fluid" src={Proj_4} alt="nature" />
                            <div className="info">
                                <h3>DOOP</h3>
                                <p>
                                    Agency Website using HTML, CSS, Bootstrap, JavaScript
                                </p>
                                <a href="https://arnabto.github.io/doop-psd-to-html/" className="bg-[#252525] text-white px-4 py-2 rounded font-medium">Preview.</a>
                            </div>
                        </div>
                        <div className="work_div" data-aos="zoom-out-up">
                            <img className="img-fluid" src={Proj_5} alt="nature" />
                            <div className="info">
                                <h3>Simple Image Slider</h3>
                                <p>
                                    Image Slider with HTML, CSS, JavaScript
                                </p>
                                <a href="https://arnabto.github.io/slider.github.io/" className="bg-[#252525] text-white px-4 py-2 rounded font-medium">Preview.</a>
                            </div>
                        </div>
                        <div className="work_div" data-aos="zoom-out-up">
                            <img className="img-fluid" src={Proj_12} alt="nature" />
                            <div className="info">
                                <h3>SkillNest</h3>
                                <p>
                                    Student and Class Management site with React, Node, Express, MongoDB, Mongoose, TailwindCSS, Vercel etc.
                                </p>
                                <a href="https://skill-nest.netlify.app/" className="bg-[#252525] text-white px-4 py-2 rounded font-medium">Preview.</a>
                            </div>
                        </div>
                        <div className="work_div" data-aos="zoom-out-up">
                            <img className="img-fluid" src={Proj_11} alt="nature" />
                            <div className="info">
                                <h3>SharePlate</h3>
                                <p>
                                   Food Sharing site  with React, Node, Express, MongoDB, TailwindCSS, Vercel etc.
                                </p>
                                <a href="https://arsdev-food-share.netlify.app/" className="bg-[#252525] text-white px-4 py-2 rounded font-medium">Preview.</a>
                            </div>
                        </div>
                        <div className="work_div" data-aos="zoom-out-up">
                            <img className="img-fluid" src={Proj_6} alt="nature" />
                            <div className="info">
                                <h3>Calculator</h3>
                                <p>
                                    Simple Calculator using HTMl, CSS, JavaScript.
                                </p>
                                <a href="https://arnabto.github.io/calcualtor.github.io/" className="bg-[#252525] text-white px-4 py-2 rounded font-medium">Preview.</a>
                            </div>
                        </div>
                        <div className="work_div" data-aos="zoom-out-up">
                            <img className="img-fluid" src={Proj_7} alt="nature" />
                            <div className="info">
                                <h3>Product-Preview-Card-Component</h3>
                                <p>
                                Frontend Mentor - Product preview card component Project.
                                </p>
                                <a href="https://arnabto.github.io/product-preview-card-component-main/" className="bg-[#252525] text-white px-4 py-2 rounded font-medium">Preview.</a>
                            </div>
                        </div>
                        <div className="work_div" data-aos="zoom-out-up">
                            <img className="img-fluid" src={Proj_8} alt="nature" />
                            <div className="info">
                                <h3>FOOD4YOU</h3>
                                <p>
                                 Italian Food Shop Website using Reactjs, Swiper-Slider, Bootstrap5, Framer-motion, Aos-animation.
                                </p>
                                <a href="https://italian-food-shop.netlify.app/" className="bg-[#252525] text-white px-4 py-2 rounded font-medium">Preview.</a>
                            </div>
                        </div>
                        <div className="work_div" data-aos="zoom-out-up">
                            <img className="img-fluid" src={Proj_9} alt="nature" />
                            <div className="info">
                                <h3>ARSDEV.</h3>
                                <p>
                                 React Portfolio Site with React, Swiper-Slider, Bootstrap5, Framer-motion, React-custom-cursor
                                </p>
                                <a href="https://github.com/ArnabTo/Portfolio_4.0" className="bg-[#252525] text-white px-4 py-2 rounded font-medium">Preview.</a>
                            </div>
                        </div>
                        <div className="work_div"  data-aos="zoom-out-up">
                            <img className="img-fluid" src={Proj_10} alt="nature" />
                            <div className="info">
                                <h3>FOOD4YOU</h3>
                                <p>
                                 Italian Food Shop Website using Reactjs, Swiper-Slider, Bootstrap5, Framer-motion, Aos-animation.
                                </p>
                                <a href="https://arnabto.github.io/Netflix-UI-Clone/" className="bg-[#252525] text-white px-4 py-2 rounded font-medium">Preview.</a>
                            </div>
                        </div>
                        </span>
                        }
                      
                    </div>
                    <button className="shHide" type="button" onClick={()=>setShow(!show)}>{show === true ? 'Hide' : 'Show More..' }</button>
                </div>
            </div>
        </div>
    )
}