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

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        
        <Route path = "/main" render = { () => <MainSlider /> }/>
        <Route path = "/post" render = { () => <Posts /> }/>
        <Route path = "/dialogs" render = { () => <Dialogs /> }/>
        <Route path = "/login" render = { () => <Login /> }/>
        <Route path = "/AllPost" render = { () => <AllPosts postsData = {props.appState.postsData}  /> }/>
        <Route path = "/cabinet" render = { () => <Cabinet /> }/>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
