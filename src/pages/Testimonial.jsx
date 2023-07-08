import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "../index.css";

// import required modules
import { Navigation } from "swiper";

export default function TestiMonial() {
    return (
        <>
            <div className="testi_Slide">
                <div className="testi_Cont" data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom">
                    <header>Testimonial</header>
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                        <SwiperSlide><div className="tesTi">
                            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.</p>
                            <p>Celvin<br />
                                <b>@Desiner@xcompany</b>
                            </p>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide><div className="tesTi">
                            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.</p>
                            <p>Celvin<br />
                                <b>@Desiner@xcompany</b>
                            </p>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide><div className="tesTi">
                            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.</p>
                            <p>Celvin<br />
                                <b>@Desiner@xcompany</b>
                            </p>
                        </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    );
}
