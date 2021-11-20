import React from "react";
import s from "./Booking.module.css";
import { NavLink } from "react-router-dom";
import Header from "../Header_Footer/Header";
import pic1 from "./master.png";
import pic2 from "./services.png";


export default function Booking () {
    return (
        <div className = {s.container}>
            <h1 className = {s.h1Online}>Онлайн запись</h1>
            <h3 className = {s.h3Choose}>Выберите необходимый вариант:</h3>
            <div className = {s.servicesblock}>
            <NavLink className = {s.specialist} to = "/specialists">
                <h4  className = {s.specialisth4}>Специалисты</h4>
                <img className = {s.pic1} src = {pic1}></img>
            </NavLink>
            <NavLink className = {s.services} to = "/services">
                <h4  className = {s.specialisth4}>Услуги</h4>
                <img className = {s.pic1} src = {pic2}></img>
            </NavLink>
</div>
        </div>
    );
}