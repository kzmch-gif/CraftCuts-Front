import React, { Component, useEffect, useState } from "react";
import "./Kastom.css";
import man from "./man.png";
import Slider from "react-slick";


function Kastom() {
   
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div className="kastom">
                <h1 className="ms-5 mt-3 mb-5">Подеберите себе кастомную стрижку онлайн!</h1>
                <div className="picmanBlock">
                    <img className="picman" src={man}></img>
                </div>
                <div>
                    <Slider {...settings}>
                        <div>
                            <h3>1</h3>
                        </div>
                        <div>
                            <h3>2</h3>
                        </div>
                        <div>
                            <h3>3</h3>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>
                        <div>
                            <h3>5</h3>
                        </div>
                        <div>
                            <h3>6</h3>
                        </div>

                    </Slider>
                </div>
            </div>
        );
    }

export default Kastom;