import React, { useEffect, useState } from "react";
import s from "./Services.module.css";
import pic1 from "./woodoo-crop-300x300.jpg";
import pic2 from "./bd676c9e9c2f4213e21ffb367de77e93.jpg";
import pic3 from "./crop3.jpg";
import { NavLink } from "react-router-dom";
import Booking from "../OnlineBooking/Booking";

const Services = (props) => {
    return (
        <div className={s.services}>
            <h1 className={s.our}>Наши услуги</h1>
            <div className={s.row}>
                <div className={s.col3}>
                    <img className={s.pic} src={pic1}></img>
                    <h4 className = {s.h4}>Стрижка</h4>
                    <h6 className = "text-center text-white">Мужские прически, которые создают мастера Craft-Cuts, прорабатываются до мелочей. Мастера при этом учитывают такие детали, как пропорции лица, форму и черты.</h6>
                    <div className = {s.btn_online}>
                    <NavLink to = "/online"  className = {s.button}>Записаться на прием</NavLink>
                </div></div>
                <div className={s.col3}>
                    <img className={s.pic} src={pic2}></img>
                    <h4 className = {s.h4}>Покраска</h4>
                    <h6 className = "text-center text-white">Мужская покраска волос может преобразить внешность самым кардинальным образом.</h6>
                    <div className = {s.btn_online}>
                    <NavLink to = "/online"  className = {s.button}>Записаться на прием</NavLink>
                </div></div>
                <div className={s.col3}>
                    <img className={s.pic} src={pic3}></img>
                    <h4 className = {s.h4}>Дизайн</h4>
                    <h6 className = "text-center text-white">Дизайн бороды лучше доверить специалисту, стильная мужская борода выравнивает пропорции лица, подчеркивая достоинства. </h6>
                    <div className = {s.btn_online}>
                    <NavLink to = "/online" className = {s.button}>Записаться на прием</NavLink>
                </div></div>
            </div>
           
        </div>
    );
}

export default Services;