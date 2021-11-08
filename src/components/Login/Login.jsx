import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import s from "./Login.module.css";
import imagecol from "./login_image.png";
import { NavLink } from "react-router-dom";
import Cabinet from "../UserCabinet/Cabinet";



export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

  
    return (
        <div className={s.row}>
            <div className={s.col_6}>
                <li className={s.item}>
                    <h5 className={s.logo}>
                        Craft Cuts</h5>  </li>
                <h5 className={s.h5welcome}>Добро пожаловать в <span className={s.craftcuts_red}>Craft Cuts</span>
                </h5>
                <h1 className={s.login}>Войти</h1>
                <div className={s.Login}>
                    <Form>
                        <Form.Group size="lg" controlId="email" >
                            <Form.Label>Email</Form.Label>
                            <Form.Control  width = "75%"
                                autoFocus
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} className={s.email_input}
                            />
                        </Form.Group>
                        <Form.Group size="lg" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control width = "75%"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} className={s.password_input}
                            />
                        </Form.Group>
                    
                        <NavLink to = "/cabinet" block size="lg" className={s.btn_login}>
                            Login
                        </NavLink>
                    </Form>
                </div>
            </div>
            <div className={s.col_6}>
                <div className={s.img_block}>
                    <img className = {s.imagecol} src={imagecol} alt="image_left"></img></div>
            </div> 
        </div>
    );
}
