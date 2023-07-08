import { motion } from "framer-motion"
export default function Service() {
    return (
        <>
            <motion.div className="services"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0, borderRadius: 15 }}
                exit={{ opacity: 0, x: 100, transition: { duration: 0.4 } }}>
                <div className="serv_Cont">
                    <header>Services.</header>
                    <div className="servs" data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom">
                        <div className="div1" data-aos="zoom-in-up">
                            <lebel>
                                <i className="fa-solid fa-code"></i><br />
                               Web Design</lebel><br />
                            <p>Understand First. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className="div1" data-aos="zoom-in-up">
                            <lebel>
                                <i className="fa-solid fa-code"></i><br />
                               PSD TO HTML</lebel><br />
                            <p>Understand First. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className="div1" data-aos="zoom-in-up">
                            <lebel>
                                <i className="fa-solid fa-code"></i><br />
                                Front-end Development</lebel><br />
                            <p>Understand First. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className="div1" data-aos="zoom-in-up">
                            <lebel>
                                <i className="fa-solid fa-code"></i><br />
                                Strategy & Direction</lebel><br />
                            <p>Understand First. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}