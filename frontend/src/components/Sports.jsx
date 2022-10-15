import React from "react";
import InfoCard from "./InfoCard";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function Sports() {
  const [sec, setsec] = useState(false);
  useEffect(() => {
    const fun = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKENDURL}/sports`
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
      <Navbar activeClass="sports" />

      <section className="probootstrap-section probootstrap-section-colored">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-left section-heading probootstrap-animate fadeInUp probootstrap-animated">
              <h2>Sports</h2>
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
                    <h3>Sport Secretary</h3>
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
                    <Link className="contacts-link" to="/contacts?type=sports">
                      Contact Coordinators
                    </Link>
                  </div>
                </div>
                <div
                  className="col-md-7 col-md-push-1  probootstrap-animate fadeInUp probootstrap-animated fadeInUp probootstrap-animate fadeInUp probootstrap-animatedd fadeInUp probootstrap-animate fadeInUp probootstrap-animated fadeInUp probootstrap-animate fadeInUp probootstrap-animateddd"
                  id="probootstrap-content"
                >
                  <h2>Sports Society</h2>
                  <p>
                    IIT Mandi has a sports council to coordinate all the sports
                    activities and lays special attention on players by
                    providing them with well-experienced coaches and adequate
                    facilities. Sportsmen are trained very systematically and
                    are encouraged to participate in various tournaments like
                    Inter-IIT, Sangram, and other inter-college and
                    intra-college tournaments. IIT Mandi has participated in the
                    Inter-IIT sports tournament since 2010 and has won 2 medals
                    in team games i.e. bronze in TT women 2014 and bronze in
                    Cricket 2019 and 7 medals in individual Athletics events in
                    2018 and 2019. The Sports Society organizes the annual
                    sports fest of IIT Mandi - Rann-Neeti.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
