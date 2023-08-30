import React from "react";
import "./Home.css";
import check from "../assests/Check.svg";
import video from "../assests/video.mp4";
import mobilevideo from "../assests/mobilevideo.mp4";
import logo from "../assests/logo.svg";
import base from "../assests/base.svg";
import twitter from "../assests/twitter.svg";
import telegram from "../assests/telegram.svg";
import discord from "../assests/discord.svg";
import arrow from "../assests/arrow.svg";

const Home = () => {
  return (
    <div className="main">
      <div className="background">
        <video autoPlay loop muted className="video-background-desktop">
          <source src={video} type="video/mp4" />
        </video>
        <video autoPlay loop muted className="video-background-mobile">
          <source src={mobilevideo} type="video/mp4" />
        </video>
        <div className="content">
          <div className="company">
            <div className="logo-img">
              <img src={logo} alt="logo" />
            </div>
          </div>
          <div className="social-media">
            <img src={twitter} alt="twitter" />
            <img src={telegram} alt="telegram" />
            <img src={discord} alt="discord" />
          </div>
          <button className="launch-button">Launch App</button>
        </div>
        <div className="main-text">
          <h1 className="redesign-heading">
            <span className="redesign-text">Redesigning</span> Perpetual Trades
          </h1>
          <p className="body-info">Seamless & Limitless Trades</p>
        </div>
        <div className="ben">
          <div className="benefits">
            <img src={check} alt="Check" />
            <span className="benefit-text">0% Trading Fee</span>
          </div>
          <div className="benefits">
            <img src={check} alt="Check" />
            <span className="benefit-text">Socialized Profit Model</span>
          </div>
          <div className="benefits">
            <img src={check} alt="Check" />
            <span className="benefit-text">Low Funding Fees</span>
          </div>
        </div>
        <div className="news">
          <span>Stay Informed</span>
          <p>Stay Updated with Oseidon</p>
          <div className="email-container">
            <div className="email-box">
              <input
                type="email"
                className="email-input"
                placeholder="Email id"
              />
            </div>
            <div className="blue-ball">
              <img src={arrow} alt="go" />
            </div>
          </div>
        </div>
        <div className="powered">
          Powered by <img src={base} alt="base" />
        </div>
        <div className="social-media-phone">
        <a href=""><img src={twitter} alt="twitter" 
          
          /></a>
          
          <img src={telegram} alt="telegram" />
          <img src={discord} alt="discord" />
        </div>
      </div>
    </div>
  );
};

export default Home;
