import { useState } from "react";
import { motion } from "framer-motion";
import "../index.css";
import menuBar from "../assets/menu.png"
import { HashLink } from "react-router-hash-link";
import logo from '../assets/logo.png'
export default function NavBar() {
    const [showNav, SetShowNav] = useState(false);
    return (
        <>
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0, borderRadius: 15 }}
                exit={{ opacity: 0, x: 100, transition: { duration: 0.4 } }}
                className="nav mx-auto mb-8">
                <div className="container m-auto d-flex p-2 items-center" id="nav_Container">
                    <span className="nav_logo flex flex-col justify-center items-center mx-3 text-white font-extrabold">
                    <img className="logo" src={logo}/>
                    ARSDEV.
                    </span>
                    <ul className="nav_Menu nav_links d-flex p-0" id={showNav ? "showNav" : "nav_Menu"}>
                        <li className="text-uppercase list-unstyled mx-2 p-1"><HashLink to="/#hme">Home</HashLink></li>
                        <li className="text-uppercase list-unstyled mx-2 p-1"><HashLink to='/#abtme'>About</HashLink></li>
                        <li className="text-uppercase list-unstyled mx-2 p-1"><HashLink to="/#abtme">Skills</HashLink></li>
                        <li className="text-uppercase list-unstyled mx-2 p-1"><HashLink to="/#projs">Projects</HashLink></li>
                        <li className="text-uppercase list-unstyled mx-2 p-1"><HashLink to="/#cont">Contact</HashLink></li>
                    </ul>
                    <div onClick={() => SetShowNav(!showNav)} className="hamburgerMenuToggler">
                        <img src={menuBar} />
                    </div>
                </div>

            </motion.div>
        </>
    )
}