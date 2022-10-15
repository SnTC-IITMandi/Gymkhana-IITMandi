import React from "react";

export default function Footer() {
  return (
    <footer className="probootstrap-footer probootstrap-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="probootstrap-footer-widget">
              <h3>About Student Gymkhana</h3>
              <p>
                Student Gymkhana -IIT Mandi was established in 2011 and since
                then it has been instrumental in the growth and development of
                the Institute and its students through its elected secretaries.
                Student Gymkhana-IIT Mandi consists of eight secretaries all
                organizing collective student activities in their respective
                spheres.
              </p>
              <h3>Social</h3>
              <ul className="probootstrap-footer-social">
                <li>
                  <a href="https://www.facebook.com/gymkhanaiitmandi/">
                    <i className="icon-facebook"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-md-push-1">
            <div className="probootstrap-footer-widget">
              <h3>Links</h3>
              <ul>
                <li>
                  <a href="http://www.iitmandi.ac.in/">IIT Mandi</a>
                </li>
                <li>
                  <a href="http://students.iitmandi.ac.in/">Students</a>
                </li>
                <li>
                  <a href="contacts">Contact</a>
                </li>
                <li>
                  <a href="https://github.com/KamandPrompt/Gymkhana-IITMandi">
                    Want to Contribute
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
