import React from "react";
import s from "./EndBooking.module.css";
import { NavLink } from "react-router-dom";


export default function Cabinet () {
    return (
        <div className = {s.doneBlock}>
<h1 className = {s.we}>Вы успешно записались!</h1><div>
<div className = {s.table}>
<div className = {s.headtable}>
<h4 className = {s.ht_text}>Процедура</h4>
<h4 className = {s.ht_text}>Мастер</h4>
<h4 className = {s.ht_text}>Время</h4>
</div>
<div className = {s.data}>
    <h5 className = {s.type}>Стрижка</h5>
    <h5 className = {s.name}>Женя</h5>
    <h5 className = {s.time}>18:00</h5>
    </div>
</div>
<div className = {s.goback_block}>
<NavLink className = {s.goback} to = "/cabinet">Вернуться в личный кабинет</NavLink>
        </div>
        </div>
        </div>
    );
}