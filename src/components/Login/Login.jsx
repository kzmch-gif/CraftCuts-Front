import React, {useEffect, useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import s from "./Login.module.css";
import imagecol from "./login_image.png";
import { NavLink } from "react-router-dom";
import Cabinet from "../UserCabinet/Cabinet";
import { useHistory } from 'react-router-dom';



export default function Login() {
  

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
   
    useEffect(() => {
        if(localStorage.getItem('user-info')){
           
            history.push("/cabinet");
         
        }

    })
    
    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    async function login(){
        let item = {email, password};
        debugger;
        let result = await fetch("craftcutstestapiproject20211011184405.azurewebsites.net/api/Customer/Auth", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept":  "application/json"
,               
            },
            body: JSON.stringify(item)
        });
        
        let res = await result.json();
       
        localStorage.setItem("user-info",JSON.stringify(res));
        history.push("/cabinet");
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
                    <input type="text" placeholder="email" onChange={(e)=>setEmail(e.target.value)} className="s.email_input"/>
                    <input type="text" placeholder="password" onChange={(e)=>setPassword(e.target.value)} className="s.password_input"/>
                        <button onClick={login} to = "/cabinet"className={s.btn_login}>Login</button>
                        {/*<NavLink to = "/cabinet" block size="lg" className={s.btn_login}>*/}
                        {/*    Login*/}
                        {/*</NavLink>*/}

                </div>
            </div>
            <div className={s.col_6}>
                <div className={s.img_block}>
                    <img className = {s.imagecol} src={imagecol} alt="image_left"></img></div>
            </div>
        </div>
    );
}