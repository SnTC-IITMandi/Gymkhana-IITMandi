import React from 'react'

export default function Navbar() {
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
            <li className="active">
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="technical.html">Technical</a>
            </li>
            <li>
              <a href="research.html">Research</a>
            </li>
            <li>
              <a href="cultural.html">Cultural</a>
            </li>
            <li>
              <a href="sports.html">Sports</a>
            </li>
            <li>
              <a href="literary.html">Literary</a>
            </li>
            <li>
              <a href="hostel.html">Hostel</a>
            </li>
            <li>
              <a href="senate.html">Senate</a>
            </li>
            <li className="dropdown2">
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
