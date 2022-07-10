import React from 'react';
import Profile from './Header/Header';
import Footer from  "./Profile/Profile";
import Header from  "./Footer/Footer";
import "./Home.css";

 function Home(props){
    return (
    <div className="home-container">
        <Header />
        <Profile />
        <Footer />
    </div>
    );
}

export default Home;
