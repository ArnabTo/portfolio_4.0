import { motion } from "framer-motion";
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
                          </h1><br/>
                            <div className="d_Cv"><button onClick={downlaodResume}>Resume</button></div>
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}