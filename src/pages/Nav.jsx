import { useState } from "react";
import { motion } from "framer-motion";
import "../index.css";
import menuBar from "../assets/menu.png"
export default function NavBar() {
    const [showNav, SetShowNav] = useState(false);
    return (
        <>
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0, borderRadius: 15 }}
                exit={{ opacity: 0, x: 100, transition: { duration: 0.4 } }}
                className="nav m-auto">
                <div className="container m-auto d-flex p-2" id="nav_Container">
                    <span className="nav_logo mx-3"><a className="text-white" href="#">ARSDEV.</a></span>
                    <ul className="nav_Menu nav_links d-flex p-0" id={showNav ? "showNav" : "nav_Menu"}>
                        <li className="text-uppercase list-unstyled mx-2 p-1"><a href="#">Home</a></li>
                        <li className="text-uppercase list-unstyled mx-2 p-1"><a href="#">About</a></li>
                        <li className="text-uppercase list-unstyled mx-2 p-1"><a href="#">Skils</a></li>
                        <li className="text-uppercase list-unstyled mx-2 p-1"><a href="#">Projects</a></li>
                        <li className="text-uppercase list-unstyled mx-2 p-1"><a href="#">Portfolio</a></li>
                        <li className="text-uppercase list-unstyled mx-2 p-1"><a href="#">Contact</a></li>
                    </ul>
                    <div onClick={() => SetShowNav(!showNav)} className="hamburgerMenuToggler">
                        <img src={menuBar} />
                    </div>
                </div>

            </motion.div>
        </>
    )
}