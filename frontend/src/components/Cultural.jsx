import React from "react";
import InfoCard from "./InfoCard";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function Cultural() {
  const [sec, setsec] = useState(false);
  useEffect(() => {
    const fun = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKENDURL}/cultural`
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
      <Navbar activeClass="cultural" />
      <section className="probootstrap-section probootstrap-section-colored">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-left section-heading probootstrap-animate fadeInUp probootstrap-animated">
              <h2>Cultural</h2>
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
                    <h3>Cultural Secretary</h3>
                    <ul className="probootstrap-side-menu">
                      <li>
                        {sec && (
                          <InfoCard
                            info={{
                              name: `${sec.name}`,
                              image: `${sec.img}`,
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
                      to="/contacts?type=cultural"
                    >
                      Club Contacts
                    </Link>
                  </div>
                </div>
                <div
                  className="col-md-7 col-md-push-1  probootstrap-animate fadeInUp probootstrap-animated"
                  id="probootstrap-content"
                >
                  <h2>Cultural Society</h2>
                  <p>
                    The cultural society basically, consists of the following
                    cultural clubs
                  </p>
                  <ul>
                    <li>Music Club</li>
                    <li>Dance Club</li>
                    <li>Dramatics Club</li>
                    <li>Art Geeks</li>
                    <li>Photography Club - Shutterbugs</li>
                    <li>Movie Making Club - Perception</li>
                    <li>Designauts</li>
                  </ul>
                  While the Program Management forms the backbone of the
                  cultural society, managing all sorts of odds and backstage
                  activities the other clubs typically represents various forms
                  of fine arts and are responsible for the overall development
                  of the institute and individuals as well. One unique feature
                  of the Institute's Cultural Society is that all the clubs
                  support open participation i.e. all the students are free to
                  join a club at any point of time. Of course, dedicated
                  students are rewarded accordingly.
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
