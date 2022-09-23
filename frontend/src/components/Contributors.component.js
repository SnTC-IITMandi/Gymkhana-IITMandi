import React, { useEffect, useState } from "react";
import axios from 'axios';
import Navbar from "./navbar.component";

const Git = function (props) {
  const user = props.user;
  return (
    <>
      <div className="col-sm-3">
        <div className="probootstrap-teacher text-center">
          <figure className="media">
            <img
              src={user.avatar_url}
              alt=""
              className="img-responsive"
            />
          </figure>
          <div className="text">
            <h3> {user.login} </h3>
            <p> {`${user.contributions} commits`}</p>

            <ul className="probootstrap-footer-social">
              <li className="facebook">
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default function Contributors() {
  const [contributors, setContributors] = useState([]);
  
  useEffect(()=>{
    axios.get(
      "https://api.github.com/repos/KamandPrompt/Gymkhana-IITMandi/contributors"
    ).then(result=>{
      setContributors(result.data);
    });
  },[])
  return (
    <>
      <Navbar activeClass="more" />
      <section class="probootstrap-section probootstrap-section-colored">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-left section-heading probootstrap-animate fadeInUp probootstrap-animated">
              <h2>Contributions</h2>
            </div>
          </div>
        </div>
      </section>
      <section class="probootstrap-section probootstrap-section-sm">
        <div class="container">
          {/* <!-- Contributors list --> */}
          <div class="row" id="contributors-container">
            {contributors.map(user=>{
              return <Git key={user.id} user={user}/>
            })}
            {/* add list of contributors fetched from github */}
          </div>
        </div>
      </section>
      <section class="probootstrap-section">
        <div class=" text-center">
          <h2>Willing to contribute?</h2>
        </div>
        <div class="probootstrap-teacher text-center probootstrap-animate fadeInUp probootstrap-animated contributing-button">
          <a class="" href="https://github.com/KamandPrompt/Gymkhana-IITMandi">
            Contribute Now
          </a>
        </div>
      </section>
    </>
  );
}
