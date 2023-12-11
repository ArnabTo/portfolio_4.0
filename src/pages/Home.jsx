import { motion } from "framer-motion";
import MyIMg from "../assets/about2.jpg";
export default function Home() {
    return (
        <div id="hme">
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0, borderRadius: 15 }}
                exit={{ opacity: 0, x: 100, transition: { duration: 0.4 } }}
                className="home">
                <div className="home_Container d-flex justify-content-center m-auto align-items-center">
                    <div className="myImg">
                        <img className="img-fluid" src={MyIMg} />
                    </div>
                    <div className="home_Text">
                        <p><h1>I'm Arnab.<br />
                            <span data-text="Web Developer"> Web Developer</span></h1><br />
                            <div className="d_Cv"><a href="#">Resume</a></div>
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}