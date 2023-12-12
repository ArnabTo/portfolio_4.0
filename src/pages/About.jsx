import { motion } from "framer-motion"
export default function AboutMe() {
    return (
        <>
            <div className="abt" id="abtme">
                <div className="abt_Cont" data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom">
                    <header>About Me.</header>
                    <div className="abtS">
                        <div className="abt_Me">
                            <h1>Hello, <br /></h1>
                            <p>
                                I am a Junior MERN stack developer with expertise in building dynamic web applications. Proficient in technologies such as React, Express, Node, MongoDB, and Tailwind CSS, I bring a comprehensive skill set to the development landscape.
                                Driven by a commitment to continuous improvement, I am currently expanding my skill set by delving into advanced technologies like Next.js. This strategic initiative is geared towards enhancing the performance and user experience of my projects, showcasing a proactive approach to staying abreast of industry trends.
                                As a developer, I am dedicated to leveraging my knowledge to create robust, scalable, and high-performance solutions. My familiarity with the MERN stack, coupled with an ongoing pursuit of learning and mastery, positions me as a dynamic contributor to the field of web development.
                            </p>

                        </div>
                        <div className="skLs">
                            <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: "100%" }}
                                exit={{ x: window.innerHeight }}
                                className="skills" id="skill">
                                <div className="container">
                                    <div className="row">
                                        <motion.div
                                            initial={{ opacity: 0, x: -100 }}
                                            animate={{ opacity: 1, x: 0, borderRadius: 15 }}
                                            exit={{ opacity: 0, x: 100, transition: { duration: 0.4 } }}
                                            className="container-wraper-skill">
                                            <div className="bar-container">
                                                <motion.div whileHover={{ scale: 1.1 }} className="skill">
                                                    <div className="skill-name">Javascript</div>
                                                    <div className="skill-bar">
                                                        <div className="skill-per" per="65%" style={{ maxWidth: "65%" }}></div>
                                                    </div>
                                                </motion.div>
                                                <motion.div whileHover={{ scale: 1.1 }} className="skill">
                                                    <div className="skill-name">React Js</div>
                                                    <div className="skill-bar">
                                                        <div className="skill-per" per="80%" style={{ maxWidth: "80%" }}></div>
                                                    </div>
                                                </motion.div>
                                                <motion.div whileHover={{ scale: 1.1 }} className="skill">
                                                    <div className="skill-name">Node JS</div>
                                                    <div className="skill-bar">
                                                        <div className="skill-per" per="70%" style={{ maxWidth: "70%" }}></div>
                                                    </div>
                                                </motion.div>
                                                <motion.div whileHover={{ scale: 1.1 }} className="skill">
                                                    <div className="skill-name">Express JS</div>
                                                    <div className="skill-bar">
                                                        <div className="skill-per" per="70%" style={{ maxWidth: "70%" }}></div>
                                                    </div>
                                                </motion.div>

                                                <motion.div whileHover={{ scale: 1.1 }} className="skill">
                                                    <div className="skill-name">Bootstrap</div>
                                                    <div className="skill-bar">
                                                        <div className="skill-per" per="80%" style={{ maxWidth: "80%" }}></div>
                                                    </div>
                                                </motion.div>
                                                <motion.div whileHover={{ scale: 1.1 }} className="skill">
                                                    <div className="skill-name">Tailwind CSS</div>
                                                    <div className="skill-bar">
                                                        <div className="skill-per" per="90%" style={{ maxWidth: "90%" }}></div>
                                                    </div>
                                                </motion.div>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}