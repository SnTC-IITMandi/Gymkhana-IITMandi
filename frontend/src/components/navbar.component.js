import React, { useEffect, useState } from 'react'

export default function Navbar(props) {
    let isActive = {
        home: "",
        technical: "",
        research: "",
        cultural: "",
        sports: "",
        literary: "",
        hostel: "",
        senate: "",
        more: "" 
    };
    isActive[props.activeClass] = "active";
    
  return (
    <nav className="navbar navbar-default probootstrap-navbar">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar-collapse"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="index.html" title="Gymkhana">
            StudentGymkhana-IITMandi
          </a>
        </div>

        <div id="navbar-collapse" className="navbar-collapse collapse">
          <ul className="nav navbar-nav navbar-right">
            <li className={isActive.home}>
              <a href="index.html">Home</a>
            </li>
            <li className={isActive.technical}>
              <a href="technical.html">Technical</a>
            </li>
            <li className={isActive.research}>
              <a href="research.html">Research</a>
            </li>
            <li className={isActive.cultural}>
              <a href="cultural.html">Cultural</a>
            </li>
            <li className={isActive.sports}>
              <a href="sports.html">Sports</a>
            </li>
            <li className={isActive.literary}>
              <a href="literary.html">Literary</a>
            </li>
            <li className={isActive.hostel}>
              <a href="hostel.html">Hostel</a>
            </li>
            <li className={isActive.senate}>
              <a href="senate.html">Senate</a>
            </li>
            <li className={`dropdown2 ${isActive.more}`}>
              <a href="/#">More</a>
              <div className="dropdown-content">
                <a href="wall_of_fame.html">Wall of Fame</a>
                ---
                <a href="contributors.html">Contributors</a>
                ---
                <a href="contacts.html">Contacts</a>
                ---
                <a href="news.html">News</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
