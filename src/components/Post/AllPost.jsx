import React from "react";
import Posts from "./Posts";
import s from "./Posts.module.css";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import App from "../../App";
const PostItem = (props) => {

    return (
        <div className={s.col_4} >
            <div>
                <img className={s.img1} src={img1} alt="cut1"></img>
            </div>
            <div className={s.textcard}>
                <h4 className={s.h4_cut}>{props.texthead}</h4>
                <h6 className={s.h6text}>{props.textmain}</h6>
                <div className={s.row}>
                    <h6 className={s.date}>{props.date}</h6>
                    <h5 className={s.read}><a href="#">Read more</a></h5>
                </div>
            </div>
        </div>
    );
}


const AllPosts = (props) => {

   

    let postsElement = props.postsData.map(item => <PostItem texthead={item.texthead} textmain={item.textmain} />);
//Выводит массив данных с постс дата поочереди и потом мы только его вызываем в скобках

    return (
        <div className={s.blog}>
            <h1 className={s.blogh1}>Блог</h1>
            <div className={s.container}>
                <div className={s.row}>
                    {postsElement}
                </div>
                <div className={s.row}>
                    {postsElement}
                </div>
                <div className={s.row}>
                    {postsElement} 
                </div>
            </div>
        </div>
    );
}

export default AllPosts;