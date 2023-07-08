import { motion } from "framer-motion"
import "../index.css"
export default function Contact() {
    return (
        <>
            <div className="cont_aCt" data-aos="fade-up"
                data-aos-anchor-placement="top-bottom">
                <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ x: window.innerHeight }}
                    className="contact_wrapper">
                    <h2 className="contact_header">Contact.</h2>
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0, borderRadius: 10 }}
                        exit={{ opacity: 0, x: -100, transition: { duration: 0.4 } }}
                        className="form_Container">
                        <div className="col-md-9 mb-md-0 mb-5 form">
                            <p>Have any questions? Send Message. I will reply in several hours.</p>
                            <form id="contact-form" name="contact-form" action="https://formsubmit.co/8bc4ff6954b326513bbdb16ff4edf310" method="POST">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="md-form mb-0">
                                            <motion.input whileHover={{ scale: 1.1 }} whileFocus={{ scale: 1.1 }} type="text" id="name" placeholder="Your Name" name="name" className="form-control" required />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="md-form mb-0">
                                            <motion.input whileHover={{ scale: 1.1 }} whileFocus={{ scale: 1.1 }} type="text" id="email" placeholder="Enter Your Mail" name="email" className="form-control" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="md-form">
                                            <motion.textarea whileHover={{ scale: 1.1 }} whileFocus={{ scale: 1.1 }} type="text" id="message" placeholder="Enter Your Message" name="message" rows="2" className="form-control md-textarea" required></motion.textarea>
                                        </div>

                                    </div>
                                </div>

                                <div className="text-center text-md-left">
                                    <button className="sub_Btn" type="submit">Submit</button>
                                </div>
                            </form>

                        </div>
                    </motion.div>
                    <motion.div animate={{ borderRadius: 10 }} className="col-md-3 text-center det">
                        <ul className="list-unstyled mb-0 d-block d-md-flex">
                            <li><i className="fas fa-map-marker-alt fa-2x text-white"></i>
                                <p className="text-white">Dhaka, Bangladesh</p>
                            </li>

                            <li><i className="fas fa-phone mt-4 fa-2x text-white"></i>
                                <p className="text-white">+ 01 234 567 89</p>
                            </li>

                            <li><i className="fas fa-envelope mt-4 fa-2x text-white"></i>
                                <p className="text-white">arnabsaha566@gmail.com</p>
                            </li>
                        </ul>
                    </motion.div>
                </motion.div>
            </div>
        </>
    )
}