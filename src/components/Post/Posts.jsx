import React from "react";
import { Col } from "react-bootstrap";
import s from "./Posts.module.css";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";



// import s from "..style/Posts.module.css";




const Posts = (props) => {
    return (
        <div className={s.blog}>
            <h1 className={s.blogh1}>Блог</h1>
            <div className = {s.container}>
            <div className = {s.row}>
                <div className = {s.col_4} >
                    <div>
                        <img className = {s.img1} src = {img1} alt = "cut1"></img>
                    </div>
                    <div className = {s.textcard}>
                        <h4 className = {s.h4_cut}>Топ стрижек 2022</h4>
                        <h6 className = {s.h6text}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....</h6>
                        <div className = {s.row}>
                            <h6 className = {s.date}>May 20th 2020</h6>
                        </div>
                    </div>
                </div>
                <div className = {s.col_4} >
                    <div>
                        <img className = {s.img1} src = {img1} alt = "cut1"></img>
                    </div>
                    <div className = {s.textcard}>
                        <h4 className = {s.h4_cut}>Топ стрижек 2022</h4>
                        <h6 className = {s.h6text}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....</h6>
                        <div className = {s.row}>
                            <h6 className = {s.date}>May 20th 2020</h6>
                        </div>
                    </div>
                </div> 
                <div className = {s.col_4} >
                    <div>
                        <img className = {s.img1} src = {img1} alt = "cut1"></img>
                    </div>
                    <div className = {s.textcard}>
                        <h4 className = {s.h4_cut}>Топ стрижек 2022</h4>
                        <h6 className = {s.h6text}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....</h6>
                        <div className = {s.row}>
                            <h6 className = {s.date}>May 20th 2020</h6>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}
export default Posts;
