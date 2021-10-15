import React from "react";
import s from "./Posts.module.css";
import Post from "./Posts";
import Posts from "./Posts";


<Posts/>
const MyPosts = () => {
    return (
        <div>
            <h3>My Posts</h3>
            <div>
                <textarea></textarea>
                <button>Add Posts</button>
            </div>
            <div className = {s.posts}>
                <Post message = "Hi how are you"/>
                <Post message = "First post"/>
            </div>
        </div>
    );
}

export default MyPosts;