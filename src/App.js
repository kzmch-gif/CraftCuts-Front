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
import Booking from "./components/OnlineBooking/Booking";
import Specialists from "./components/OnlineBooking/Specialists/Specialists";
import EndBooking from "./components/OnlineBooking/EndBooking/EndBooking";
import About from "./components/About/About";
import Services from "./components/Services/Services";

const App = (props) => {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />

        <Route path="/main" render={() => <MainSlider />} />
        <Route path="/about" render={() => <About />} />
        <Route path="/services" render={() => <Services />} />
        <Route path="/post" render={() => <Posts />} 
          addpost={props.addpost} />
        <Route path="/dialogs" render={() => <Dialogs />} />
        <Route path="/login" render={() => <Login />} />
        
        <Route path="/AllPost" render={() => <AllPosts postsData={props.state.postsData} 
          dispatch={props.dispatch} 
        />} />
        <Route path="/cabinet" render={() => <Cabinet />} />
        <Route path="/online" render={() => <Booking/>} />
        <Route path="/specialists" render={() => <Specialists/>} />
        <Route path="/EndBooking" render={() => <EndBooking/>} />
        <Footer />
      </div>
    </BrowserRouter>
    
  );
};

export default App;
