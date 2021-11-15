import React, { useEffect, useState } from "react";
import s from "./Review.module.css";
import pic1 from "./pic1.png";
import hotline from "./Shape.png";
import hotlig from "./Path.png";




export default function Review() {
    return (
        <div className={s.review}>
            <h1 className={s.h1}>Отзывы про барбершоп</h1>
            <div className={s.row}>
                <div className={s.col6}>
                    <div className={s.blockleft}>
                        <div className={s.lefttop}>
                            <div className={s.row1}>
                                <img className={s.userpic} src={pic1}></img>
                                <h6 className={s.namerewiew}>Иван</h6>
                                <div className={s.rowhot}>
                                    <img className={s.hotline} src={hotlig}></img>
                                    <img className={s.hotline} src={hotlig}></img>
                                    <img className={s.hotline} src={hotlig}></img>
                                    <img className={s.hotline} src={hotline}></img>
                                </div>
                            </div>
                            <h6 className={s.textreview}>Отличный барбершоп, мне такую прическу сделали что просто вау, я в восторге. Мастер Дима самый лучший всем советую! Прийду сюда еще миллион раз и позову всех друзей!</h6>
                        </div>
                        <div className={s.lefttop}>
                            <div className={s.row1}>
                                <img className={s.userpic} src={pic1}></img>
                                <h6 className={s.namerewiew}>Николай</h6>
                                <div className={s.rowhot}>
                                    <img className={s.hotline} src={hotlig}></img>
                                    <img className={s.hotline} src={hotlig}></img>
                                    <img className={s.hotline} src={hotlig}></img>
                                    <img className={s.hotline} src={hotlig}></img>
                                </div>
                            </div>
                            <h6 className={s.textreview}>Обслуживание на уровне, цены демократичные, не зря называются лучшим. Особенно мне понравился их сайт, очень удобный и легко можно записаться и никуда не звонить.</h6>
                        </div>
                    </div>
                </div>
                <div className={s.col6}>
                    <div className={s.blockright}>
                        <h3 className={s.getreview}>Оставьте свой отзыв здесь!</h3>
                        <h6 className = {s.}>Чтобы оставить свой отзыв вы должны войти в аккаунт</h6>
                        <div>
                            <input className = {s.inputlogin} type="text" value="login" /></div>
                        <div>
                            <input className = {s.inputpassword}  type="text" value="password" /></div>
                        <div>
                            <input className = {s.inputtext}  type="text" value="text of review" />
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}