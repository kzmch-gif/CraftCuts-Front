import React from "react";
import s from "./EndBooking.module.css";
import { NavLink } from "react-router-dom";


export default function Cabinet () {
    return (
        <div className = {s.doneBlock}>
<h1 className = {s.we}>Вы успешно записались!</h1><div>
<NavLink className = {s.goback} to = "/cabinet">Вернуться в личный кабинет</NavLink>
        </div>
        </div>
    );
}