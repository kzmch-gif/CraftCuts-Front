import React from "react";
import { Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <div className="header">
        <Container>
          <Row>
            <ul>
              <li className={s.item}>
                <NavLink
                  className={`nav`}
                  to="/about"
                  activeClassName={s.active}
                >
                  О нас
                </NavLink>
              </li>
              <li className={s.item}>
                <NavLink
                  className={`nav`}
                  to="/services"
                  activeClassName={s.active}
                >
                  Услуги
                </NavLink>
              </li>
              <li className={s.item}>
                
              </li>

              <li className={s.item}>
                <NavLink
                  className={`nav`}
                  to="/review"
                  activeClassName={s.active}
                >
                  Отзывы
                </NavLink>
              </li>
              <li className={s.item}>
                <NavLink className={`logo me-3 nav`} to="/main">
                  Craft Cuts
                </NavLink>
              </li>
              <li className={s.item}>
                <NavLink
                  className={` nav`}
                  to="/post"
                  activeClassName={s.active}
                >
                  Блог
                </NavLink>
              </li>
              <li className={s.item}>
                <NavLink
                  className={` ${s.btn_online}`}
                  to="/online"
                  activeClassName={s.active}
                >
                  Записаться онлайн
                </NavLink>
              </li>
              <li className={s.item}>
                <NavLink
                  className={` ${s.btn_join}`}
                  to="/login"
                  activeClassName={s.active}
                >
                  Войти
                </NavLink>
              </li>
            </ul>
          </Row>
        </Container>
      </div>
    </header>
  );
};

export default Header;
