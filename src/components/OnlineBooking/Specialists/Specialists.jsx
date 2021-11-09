import React from "react";
import s from "./Specialists.module.css";
import { NavLink } from "react-router-dom";


export default function Cabinet () {
    return (
        <div>
<h1 className = {s.masterh1}>Выберите мастера:</h1>
<div className = {s.master1}>
    <h3 className = {s.name}>Иван</h3>
    <h6 className = {s.type}>- Стрижка</h6>
    <h5 className = {s.type}>17:00</h5>
    <NavLink to = "/EndBooking" className = {s.end}>Записаться</NavLink>
</div>
<div className = {s.master1}>
    <h3 className = {s.name}>Дима</h3>
    <h6 className = {s.type}>- Покраска</h6>
    <h5 className = {s.type}>10:00</h5>
    <NavLink to = "/EndBooking" className = {s.end}>Записаться</NavLink>
</div>
<div className = {s.master1}>
    <h3 className = {s.name}>Егор</h3>
    <h6 className = {s.type}>- Кастом</h6>
    <h5 className = {s.type}>14:00</h5>
    <NavLink to = "/EndBooking" className = {s.end}>Записаться</NavLink>
</div>
<div className = {s.master1}>
    <h3 className = {s.name}>Сережа</h3>
    <h6 className = {s.type}>- Стрижка, покраска</h6>
    <h5 className = {s.type}>13:00</h5>
    <NavLink to = "/EndBooking" className = {s.end}>Записаться</NavLink>
</div>
        </div>
    );
}