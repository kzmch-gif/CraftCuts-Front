import React, {useEffect, useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import s from "./Login.module.css";
import imagecol from "./login_image.png";
import { NavLink } from "react-router-dom";
import Cabinet from "../UserCabinet/Cabinet";
import { useHistory } from 'react-router-dom';




export default function Login({setIsLoggedIn, isLoggedIn}) {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const history = useHistory();
    useEffect(() => {
        if(localStorage.getItem('user-info') && isLoggedIn == true){

            history.push("/cabinet")
        }
    }, [])


    function validateForm() {
        return Email.length > 0 && Password.length > 0;
    }

    async function myLogin(){

        let item = {Email, Password};
        let result = await fetch("https://craftcutstestapiproject20211011184405.azurewebsites.net/api/Customer/Auth", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",

            },
            body: JSON.stringify({item})
        });
        result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result));
        localStorage.setItem("isLoggedIn", true);
        // setIsLoggedIn(true);

                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({item})
        });
      
        result = await result.json();
        debugger;
        localStorage.setItem("user-info",JSON.stringify(result));

        history.push("/cabinet")
    }

    async function myLoginAPI(e) {
        e.preventDefault();
        let item = {Password, Email};
        let result = await fetch("https://craftcutstestapiproject20211011184405.azurewebsites.net/api/Customer/Auth", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({Email: Email, Password: Password}),
        });
        console.log({Email, Password});
        result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result));
        localStorage.setItem('isLoggedIn', true);
        setIsLoggedIn(true);
        history.push("/cabinet")
        console.log(result);
    }

    async function myLoginAPI2(e) {

        let item = {Email, Password};
        fetch("https://craftcutstestapiproject20211011184405.azurewebsites.net/api/Customer/Auth", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({Email, Password}),
        }).then((response) => response.json()
            .then((responseJson) => {localStorage.setItem('user-info', JSON.stringify(responseJson))} )
                .then(() => {localStorage.setItem('isLoggedIn', true)})
                .then(() => {setIsLoggedIn(true)})
                .then(() => {history.push("/cabinet")})
            )
            .catch(error => console.error('Error', error));
    }


    const handleLogin = (e)=> {
        e.preventDefault()
        localStorage.setItem('isLoggedIn', true);
        setIsLoggedIn(true);
        history.push('/cabinet');
    }


    return (
        <form onSubmit={myLoginAPI}>
        <div className={s.row}>
            <div className={s.col_6}>
                <li className={s.item}>
                    <h5 className={s.logo}>
                        Craft Cuts</h5>  </li>
                <h5 className={s.h5welcome}>Добро пожаловать в <span className={s.craftcuts_red}>Craft Cuts</span>
                </h5>
                <h1 className={s.login}>Войти</h1>
                <div className={s.Login}>
                    <input type="test" placeholder="email" onChange={(e)=>setEmail(e.target.value)} className="s.email_input"/>
                    <input type="text" placeholder="password" onChange={(e)=>setPassword(e.target.value)} className="s.password_input"/>

                    <button type="submit" className={s.btn_login}>Login </button>
                    {/*<button onClick={myLoginAPI} className={s.btn_login}>Login</button>*/}
                    {/*<NavLink to = "/cabinet" block size="lg" className={s.btn_login}>*/}
                    {/*    Login*/}
                    {/*</NavLink>*/}

{/*  <button onClick={myLogin} className={s.btn_login}>Login</button>*/}
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
        </form>
    );
}