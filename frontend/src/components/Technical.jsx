import React from "react";
import InfoCard from "./InfoCard";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Technical() {
  const [sec, setsec] = useState(false);
  useEffect(() => {
    const fun = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKENDURL}/technical`
        );
        const data = await response.json();
        setsec(data.data);
        console.log(data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fun();
  }, []);
  return (
    <>
      <Navbar activeClass="technical" />

      <section className="probootstrap-section probootstrap-section-colored">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-left section-heading probootstrap-animate fadeInUp probootstrap-animated fadeInUp probootstrap-animate fadeInUp probootstrap-animatedd fadeInUp probootstrap-animate fadeInUp probootstrap-animated fadeInUp probootstrap-animate fadeInUp probootstrap-animateddd">
              <h2>Technical</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="probootstrap-section probootstrap-section-sm">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row probootstrap-gutter0">
                <div className="col-md-4" id="probootstrap-sidebar">
                  <div className="probootstrap-sidebar-inner probootstrap-overlap probootstrap-animate fadeInUp probootstrap-animated fadeInUp probootstrap-animate fadeInUp probootstrap-animatedd fadeInUp probootstrap-animate fadeInUp probootstrap-animated fadeInUp probootstrap-animate fadeInUp probootstrap-animateddd">
                    <h3>Technical Affairs (SNTC)</h3>
                    <ul className="probootstrap-side-menu">
                      <li>
                        {sec && (
                          <InfoCard
                            info={{
                              name: `${sec.name}`,
                              image: sec.img,
                              position: `${sec.post}`,
                              facebook_id: `${sec.facebook}`,
                              email_id: `${sec.email}`,
                            }}
                          />
                        )}
                      </li>
                    </ul>
                  </div>

                  <div className="probootstrap-teacher text-center probootstrap-animate fadeInUp probootstrap-animated fadeInUp probootstrap-animate fadeInUp probootstrap-animatedd fadeInUp probootstrap-animate fadeInUp probootstrap-animated fadeInUp probootstrap-animate fadeInUp probootstrap-animateddd fadeInUp probootstrap-animate fadeInUp probootstrap-animated fadeInUp probootstrap-animate fadeInUp probootstrap-animatedd fadeInUp probootstrap-animate fadeInUp probootstrap-animated fadeInUp probootstrap-animate fadeInUp probootstrap-animatedddd">
                    <Link
                      className="contacts-link"
                      to="/contacts?type=technical"
                    >
                      Club Contacts
                    </Link>
                  </div>
                  <div className="probootstrap-teacher text-center probootstrap-animate fadeInUp probootstrap-animated fadeInUp probootstrap-animate fadeInUp probootstrap-animatedd fadeInUp probootstrap-animate fadeInUp probootstrap-animated fadeInUp probootstrap-animate fadeInUp probootstrap-animateddd fadeInUp probootstrap-animate fadeInUp probootstrap-animated fadeInUp probootstrap-animate fadeInUp probootstrap-animatedd fadeInUp probootstrap-animate fadeInUp probootstrap-animated fadeInUp probootstrap-animate fadeInUp probootstrap-animatedddd">
                    <a
                      className="contacts-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://iitmandi.co.in/"
                    >
                      Society Website
                    </a>
                  </div>
                </div>
                <div
                  className="col-md-7 col-md-push-1  probootstrap-animate fadeInUp probootstrap-animated fadeInUp probootstrap-animate fadeInUp probootstrap-animatedd fadeInUp probootstrap-animate fadeInUp probootstrap-animated fadeInUp probootstrap-animate fadeInUp probootstrap-animateddd"
                  id="probootstrap-content"
                >
                  <h2>Science and Technology Council</h2>
                  <p>
                    SnTC ,short for, Science and Technology Council is IIT
                    Mandi’s Technical Society. It is a body of students advised
                    by faculty. The major events for SnTC are Inter IIT Tech
                    Meet, Avishkar and Utkarsh. SnTC constitutes of following
                    clubs:
                  </p>
                  <ul>
                    <li>Robotronics Club</li>
                    <li>Space Technology and Astronomy Cell (STAC)</li>
                    <li>Yantrik Club</li>
                    <li>KamandPrompt - Programming Club</li>
                    <li>Nirmaan Club</li>
                    <li>SAE Collegiate</li>
                    <li>Entrepreneurship Cell</li>
                    <li>Kamand BioEngineering Group</li>
                  </ul>
                  Each club is coordinated by two coordinators and comprises of
                  students of similar interest. Each club is advised by a
                  faculty advisor and a co-advisor. All the clubs are open for
                  all the students of IIT Mandi. However, a core team is formed
                  for efficient running of the club.
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
