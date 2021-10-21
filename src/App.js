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

  let postsData = [{
    id: 1, texthead: 'Топ стрижек 2021', textmain: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....'
}, {
    id: 2, texthead: 'Выбор кресла для барберов', textmain: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....'
}, {
    id: 3, texthead: 'Как выбрать “своего” мастера', textmain: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....'
}];

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Route path = "/main" render = { () => <MainSlider /> }/>
        <Route path = "/post" render = { () => <Posts /> }/>
        <Route path = "/dialogs" render = { () => <Dialogs /> }/>
        <Route path = "/login" render = { () => <Login /> }/>
        <Route path = "/AllPost" render = { () => <AllPosts postsData = {postsData}  /> }/>
        <Route path = "/cabinet" render = { () => <Cabinet /> }/>
      
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
