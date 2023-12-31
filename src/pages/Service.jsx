import { motion } from "framer-motion"
import { MonitorSmartphone, Layers, FileCode2 } from "lucide-react"
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
                            <div>
                            <Layers size={50} /><br/>
                               <h2 className="text-3xl font-bold font-[Montserrat]">Comprehensive Web Solutions with MERN Expertise</h2></div><br />
                            <p>Elevate your online presence with end-to-end web development services. Leveraging the power of the MERN stack (MongoDB, Express.js, React.js, Node.js), I craft dynamic, responsive, and scalable web applications. From intuitive user interfaces to robust server-side logic, I ensure a seamless user experience from start to finish.</p>
                        </div>
                        <div className="div1" data-aos="zoom-in-up">
                            <div>
                            <MonitorSmartphone size={50}/><br/>
                               <h2 className="text-3xl font-bold font-[Montserrat]"> Responsive Front-End Design</h2></div><br />
                            <p>Transform ideas into visually stunning and user-friendly interfaces. With expertise in HTML, CSS, and React.js, I create responsive web designs that adapt seamlessly to diverse devices and screen sizes. Elevate your user engagement with captivating front-end experiences that leave a lasting impression.</p>
                        </div>
                        <div className="div1" data-aos="zoom-in-up">
                            <div>
                            <FileCode2 size={50}/><br/>
                               <h2 className="text-3xl font-bold font-[Montserrat]"> Pixel-Perfect PSD to HTML</h2></div><br />
                            <p>Transform your design concepts into reality with precision and attention to detail. I specialize in converting PSD (Photoshop) designs into high-quality, hand-coded HTML/CSS. Each element is meticulously translated, ensuring a seamless transition from design to development.</p>
                        </div>
                        <div className="div1" data-aos="zoom-in-up">
                            <div>
                            <FileCode2 size={50}/><br/>
                               <h2 className="text-3xl font-bold font-[Montserrat]">Harnessing the Power of Front-End Frameworks</h2></div><br />
                            <p>Leverage the capabilities of modern front-end frameworks to build dynamic and interactive user interfaces. Whether it's React for component-based architectures, Vue for simplicity and flexibility, or Angular for robust applications, I bring expertise in utilizing these frameworks to enhance your web projects.

                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}