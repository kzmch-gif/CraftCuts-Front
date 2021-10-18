import React from "react";
import Header from "./components/Header_Footer/Header";
import "./App.css";
import Footer from "./components/Header_Footer/Footer";
import MainSlider from "./components/MainSlider/MainSlider";
import Posts from "./components/Post/Posts";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Cabinet from "./components/UserCabinet/Cabinet";
import Login from "./components/Login/Login";
import AllPosts from "./components/Post/AllPost";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Route path = "/main" component={MainSlider} />
        <Route path = "/post" component={Posts} />
        <Route path = "/dialogs" component={Dialogs} />
        <Route path = "/login" component = {Login}/>
        <Route path = "/AllPost" component = {AllPosts}/>
        {/* <MyPosts/> 
      <Dialogs/> */}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
