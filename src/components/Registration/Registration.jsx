import React from "react";
import s from "./Registration.module.css";
import imagecol from "./login_image.png";
import { NavLink } from "react-router-dom";

export default function Registration() {
    return (
        <div>
            <div className={s.row}>
                <div className={s.col_6}>
                    <li className={s.item}>
                       </li>
                    <h5 className={s.h5welcome}>Добро пожаловать в <span className={s.craftcuts_red}>Craft Cuts</span>
                        <h6 className = "mb-5">У вас уже есть аккаунт? Войдите <NavLink to="/login">здесь</NavLink></h6>
                    </h5>
                    <h1 className={s.login}>Зарегистрироваться</h1>
                    <div className={s.Login}>
                    <div className="mb-3">
                        <h4>Введите ваше имя</h4>
                        <input type="text" placeholder="name" /*onChange={(e)=>setEmail(e.target.value)}*/ className="w-75" />
                    </div>
                        <div className="mb-4">
                        <h4>Введите вашу почту</h4>
                            <input type="text" placeholder="mail" /*onChange={(e)=>setPassword(e.target.value)}*/ className="w-75" />
                        </div>  
                        <div className="mb-4">
                        <h4>Введите ваш номер телефона</h4>
                        <input type="phone" placeholder="phone" /*onChange={(e)=>setEmail(e.target.value)}*/ className="w-75" />
                    </div>
                    <div className="mb-4">
                        <h4>Придумайте свой пароль</h4>
                        <input type="phone" placeholder="password" /*onChange={(e)=>setEmail(e.target.value)}*/ className="w-75" />
                    </div>
                        <button /*onClick={myLogin}*/ className={s.btn_login}>Registration</button>
                        {/*<NavLink to = "/cabinet" block size="lg" className={s.btn_login}>*/}
                        {/*    Login*/}
                        {/*</NavLink>*/}

                    </div>
                </div>
                <div className={s.col_6}>
                    <div className={s.img_block}>
                        <img className={s.imagecol} src={imagecol} alt="image_left"></img></div>
                </div>
            </div>
        </div>
    );
}