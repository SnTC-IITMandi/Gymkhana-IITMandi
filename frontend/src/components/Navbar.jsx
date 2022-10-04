import React from "react";
import { Link } from "react-router-dom";

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
    more: "",
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
          <Link className="navbar-brand" to="/" title="Gymkhana">
            StudentGymkhana-IITMandi
          </Link>
        </div>

        <div id="navbar-collapse" className="navbar-collapse collapse">
          <ul className="nav navbar-nav navbar-right" id="navlist">
            <li className={isActive.home}>
              <Link to="/">Home</Link>
            </li>
            <li className={isActive.technical}>
              <Link to="/technical">Technical</Link>
            </li>
            <li className={isActive.research}>
              <Link to="/research">Research</Link>
            </li>
            <li className={isActive.cultural}>
              <Link to="/cultural">Cultural</Link>
            </li>
            <li className={isActive.sports}>
              <Link to="/sports">Sports</Link>
            </li>
            <li className={isActive.literary}>
              <Link to="/literary">Literary</Link>
            </li>
            <li className={isActive.hostel}>
              <Link to="/hostel">Hostel</Link>
            </li>
            <li className={isActive.senate}>
              <Link to="/senate">Senate</Link>
            </li>
            <li className={`dropdown2 ${isActive.more}`} id="sidelist">
              <Link>More</Link>
              <div className="dropdown-content">
                <Link to="/wall_of_fame" id="color">Wall of Fame</Link>
                ---
                <Link to="/contributors" id="color">Contributors</Link>
                ---
                <Link to="/contacts" id="color">Contacts</Link>
                ---
                <Link to="/news" id="color">News</Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
