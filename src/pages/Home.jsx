import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import MyIMg from "../assets/about2.jpg";
export default function Home() {
    const downlaodResume = () => {
        const resumeFileId = '1M9PWOBh6DIYnqRAqD5sNPav8eu3pHFpD';
        const fileURL = `https://drive.google.com/uc?id=${resumeFileId}`;
        const fileLInk = document.createElement('a');
        fileLInk.href = fileURL
        fileLInk.download = 'resume.pdf';
        document.body.appendChild(fileLInk);
        fileLInk.click();
        document.body.removeChild(fileLInk);
    };
    return (
        <div id="hme">
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0, borderRadius: 15 }}
                exit={{ opacity: 0, x: 100, transition: { duration: 0.4 } }}
                className="home">
                <div className="home_Container d-flex justify-content-center m-auto align-items-center">
                    <div className="myImg" id="floating">
                        <img className="img-fluid" src={MyIMg} />
                    </div>
                    <div className="home_Text">
                        <p><h1>I'm Arnab.<br />
                            <TypeAnimation
                                sequence={[
                                    'Web Developer', 1000,
                                    'MERN Stack Developer', 2000,
                                    'Front-End Developer'
                                ]}
                                wrapper='span'
                                repeat={Infinity}
                            />
                        </h1><br />
                            <button className="resmBtn bg-white px-4 py-2 rounded text-[#242424] text-center text-xl font-bold" onClick={downlaodResume}>Resume</button>
                        </p>
                        <span className="flex gap-2 my-4">
                            <a href="https://github.com/ArnabTo"><Github size={30}/></a>
                            <a href="https://www.linkedin.com/in/itsarnab/"><Linkedin size={30} /></a>
                            <a href="mailto:arnabs929@gmail.com"><Mail size={30}/></a>
                        </span>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}