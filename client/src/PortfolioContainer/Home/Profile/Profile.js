import React from 'react'
import Typical from 'react-typical';
import './Profile.css';


export default function Profile() {
  return (
    <div className="profile-container">
        <div className="profile-parent">
            <div className="profile-detail">
                <div className="colz">
                  <div className="colz-icon">
                   <a href="https://www.linkedin.com/in/eshikasingha">
                    <i className="fa fa-linkedin"></i>
                   </a>
                   <a href="https://github.com/Eshika234">
                    <i className="fa fa-github-square"></i>
                   </a>
                   <a href="https://www.instagram.com/e_s_h_i___/">
                    <i className="fa fa-instagram"></i>
                   </a>
                  </div>
                </div>
            
            <div className="profile-details-name">
              <span className="primary-text">
                {" "}
                Hello, I'M <span className="highlighted-text">Eshika</span>
              </span>
            </div>
            <div className='profile-details-role'>
              <span className='primary-text'>
                {" "}
                <h1>
                 {" "}
                 <Typical
                  loop={Infinity}
                  steps={[
                    "Frontend Developer💻",
                    1000,
                    "Enthusiastic Dev & Coder🔴",
                    1000,
                    "Full Stack Developer ❤",
                    1000,
                    "MERN Stack Developer😎",
                    1000,
                    "Trader📈📉",
                    1000,
                    "Passionate Programmer📗🖌",
                    1000,
                  ]}
                  />
                </h1>
                <span className='profile-role-tagline'>
                 Knack of building applications with Front-end and Back-end 
                operations.
                </span>
              </span>
            </div>
            <div className='profile-options'>
              <button className='btn primary-btn'>
                {" "}
                Hire Me{" "}
              </button>
              <a href="Eshika singha.pdf" download="Eshika singha.pdf">
                 <button className="btn highlighted-btn">Download Resume</button>
              </a>
            </div>
           </div>
           <div className="profile-picture">
            <div className="profile-picture-background">
            </div>
        </div>
    </div>
  </div>
  );
}


