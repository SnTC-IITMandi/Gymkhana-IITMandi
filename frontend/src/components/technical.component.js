import React from 'react'
import InfoCard from './infoCard.component'
import Navbar from './navbar.component'

export default function Technical() {
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
                    <h3>Technical Secretary</h3>
                    <ul className="probootstrap-side-menu">
                      <li>
                        {/* <!-- Tech --> */}
                        {/* update with backend */}
                        <InfoCard
                          info={{
                            name: "Surendra Singh",
                            image: "",
                            position: "Technical Secretary",
                            facebook_id:
                              "https://www.facebook.com/surendrasingh24",
                            email_id:
                              "technical_secretary@students.iitmandi.ac.in",
                          }}
                        />
                      </li>
                    </ul>
                  </div>

                  <div className="probootstrap-teacher text-center probootstrap-animate fadeInUp probootstrap-animated fadeInUp probootstrap-animate fadeInUp probootstrap-animatedd fadeInUp probootstrap-animate fadeInUp probootstrap-animated fadeInUp probootstrap-animate fadeInUp probootstrap-animateddd fadeInUp probootstrap-animate fadeInUp probootstrap-animated fadeInUp probootstrap-animate fadeInUp probootstrap-animatedd fadeInUp probootstrap-animate fadeInUp probootstrap-animated fadeInUp probootstrap-animate fadeInUp probootstrap-animatedddd">
                    <a
                      className="contacts-link"
                      href="/contacts.html#technical"
                    >
                      Club Contacts
                    </a>
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
                  Each club is coordinated by two coordinators and comprises
                  of students of similar interest. Each club is advised by a
                  faculty advisor and a co-advisor. All the clubs are open for
                  all the students of IIT Mandi. However, a core team is
                  formed for efficient running of the club.
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
