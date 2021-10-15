import React from "react";
import { NavLink } from "react-bootstrap";
import s from "./Login.module.css";

const Login = () => {
    return (
        <div className = {s.row}>
            <div className = {s.col-6}>
            <li className={s.item}>
              <h5 className = {s.logo}>
                  Craft Cuts</h5>
              <h5 className = {s.h5welcome}>Добро пожаловать в <span>Craft Cuts</span></h5>
              </li>
            </div>
            <div className = {s.col-6}></div>
        </div>
    );
}

export default Login;