import HTML from "../assets/html.png"
import CSS from "../assets/css.png"
import Bootstrap from "../assets/bootstrap.png"
import Js from "../assets/js.png"
import React from "../assets/react.png"
import Figma from "../assets/figma.png"
import VS from "../assets/visualstd.png"
import nodejs from '../assets/nodejs.png'
import mongodb from '../assets/mongodb.png'
import '../App.css'
export default function StaticSlide() {
    return (
        <>
            <div className="slide">
                <div className="slide_Cont">
                    <ul >
                        <li><div className="slideImg" id="floating" >
                            <img className="img-fluid" src={HTML} alt="img" />
                        </div>
                        </li>
                        <li><div className="slideImg" id="floating">
                            <img className="img-fluid" src={CSS} alt="img" />
                        </div>
                        </li>
                        <li><div className="slideImg" id="floating">
                            <img className="img-fluid" src={Bootstrap} alt="img" />
                        </div>
                        </li>
                        <li><div className="slideImg" id="floating">
                            <img className="img-fluid" src={Js} alt="img" />
                        </div>
                        </li>
                        <li><div className="slideImg" id="floating">
                            <img className="img-fluid" src={React} alt="img" />
                        </div>
                        </li>
                        <li><div className="slideImg" id="floating">
                            <img className="img-fluid" src={Figma} alt="img" />
                        </div>
                        </li>
                        <li><div className="slideImg" id="floating">
                            <img className="img-fluid" src={VS} alt="img" />
                        </div>
                        </li>
                        <li><div className="slideImg" id="floating">
                            <img className="img-fluid" src={nodejs} alt="img" />
                        </div>
                        </li>
                        <li><div className="slideImg" id="floating">
                            <img className="img-fluid" src={mongodb} alt="img" />
                        </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}