import React from "react";
import s from "./Cabinet.module.css";
import { NavLink } from "react-router-dom";
import Header from "../Header_Footer/Header";
import usericon from "../UserCabinet/user_icon.png";
import starpic from "../UserCabinet/heart.png";

const Cabinet = () => {
  <Header />;
  return (
    <div className={s.cabinet_wrapper}>
      <div className={s.wrapper}>
        <h2 className={s.h2text}>Личный кабинет</h2>
        <div className={s.infouser_block}>
          <div className={s.row}>
            <h3 className={s.username}>James Roland</h3>
            <div className={s.btn_change}>
              <NavLink className={`me-3 ${s.change}`} to="/main">
                Изменить профиль
              </NavLink>
            </div>
          </div>

          <div className={s.row}>
            <div className={s.col_count}>
              <h5 className={s.h5_textcount}>Количество посещений</h5>
              <span>20</span>
            </div>
            <div className={s.col_count_promo}>
              <h5 className={s.h5_textcount}>Использовано промокодов</h5>
              <span>0</span>
            </div>
            <div className={s.col_promo}>
              <h5 className={s.h5_textpromo}>У вас есть промокод на скидку? Введите его здесь</h5>
              <form name="test" method="post">
                  <input type = "text" placeholder = "Промокод"  className = {s.input_promo}></input>
                  <button className = {s.promo_btn} type = "submit">Применить</button>
              </form>
            </div>
          </div>
        <div className = {s.receptions_block}>
            <div className = {s.row}>
                <h5 className = {s.h5_resept}>Ваши записи</h5>
                <NavLink to = "#" className = {s.h6_resept}>Посмотреть все</NavLink>
            </div>
            <div className = {s.near}><span>Ближайшие</span></div>
            <div className = "coming"><span></span></div>
            <div className={s.row}>
                <img className = {s.usericon_pic} src = {usericon} alt = "userpic"></img>
                <span className = {s.textspan}>Барбер Дима - </span>
                <span className = {s.textspan}>Стрижка - </span>
                <span className = {s.textspan}>12.06 16:00</span>
                <button className = {s.starpic}></button>
            </div>
            <div className = {s.near}><span>Предстоящие</span></div>
            <div className={`${s.row} ${s.row1}`}>
                <img className = {s.usericon_pic} src = {usericon} alt = "userpic"></img>
                <span className = {s.textspan}>Барбер Дима - </span>
                <span className = {s.textspan}>Стрижка - </span>
                <span className = {s.textspan}>15.08 16:00</span>
                <button className = {s.starpic}></button>
            </div>
            <NavLink
                  className={` ${s.btn_online}`}
                  to="/online"
                  activeClassName={s.active}
                >
                  Записаться онлайн
                </NavLink>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Cabinet;
