import React from "react";
import InfoCard from "./InfoCard";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function Literary() {
  const [sec, setsec] = useState(false);
  useEffect(() => {
    const fun = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKENDURL}/literary`
        );
        const data = await response.json();
        setsec(data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fun();
  }, []);
  return (
    <>
      <Navbar activeClass="literary" />
      <section className="probootstrap-section probootstrap-section-colored">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-left section-heading probootstrap-animate fadeInUp probootstrap-animated">
              <h2>Literary</h2>
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
                  <div className="probootstrap-sidebar-inner probootstrap-overlap probootstrap-animate fadeInUp probootstrap-animated">
                    <h3>Literary Secretary</h3>
                    <ul className="probootstrap-side-menu">
                      <li>
                        {sec && (
                          <InfoCard
                            info={{
                              name: `${sec.name}`,
                              image: `${sec.image}`,
                              position: `${sec.post}`,
                              facebook_id: `${sec.facebook}`,
                              email_id: `${sec.email}`,
                            }}
                          />
                        )}
                      </li>
                    </ul>
                  </div>

                  <div className="probootstrap-teacher text-center probootstrap-animate fadeInUp probootstrap-animated">
                    <Link
                      className="contacts-link"
                      to="/contacts?type=literary"
                    >
                      Club Contacts
                    </Link>
                  </div>
                </div>
                <div
                  className="col-md-7 col-md-push-1  probootstrap-animate fadeInUp probootstrap-animated"
                  id="probootstrap-content"
                >
                  <h2>Literary Society</h2>
                  <p>
                    The Literary Society is headed by Literary Secretary. It has
                    three clubs under it as of now. Each club has its own
                    activities and funding for giving students exposure to
                    various activities through events both within and outside
                    the Institute. This society publishes the institute magazine
                    "Vivaan" in every semester. Literary Society constitutes of
                    the following clubs:
                  </p>
                  <ul>
                    <li>Debating Club</li>
                    <li>Writing Club</li>
                    <li>Quizzing Club</li>
                    <li>Student Media Body</li>
                  </ul>
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
