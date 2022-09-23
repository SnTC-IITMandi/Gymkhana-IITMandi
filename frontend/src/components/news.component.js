import React from "react";
import Navbar from "./navbar.component";

export default function News() {
  return (
    <>
      <Navbar activeClass="more" />
      <section class="probootstrap-section probootstrap-section-colored">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-left section-heading probootstrap-animate fadeInUp probootstrap-animated">
              <h2>News</h2>
            </div>
          </div>
        </div>
      </section>

      <section class="probootstrap-section">
        <div class="container">
          <div class="column">
            <div class="col-md-12">
              <div class="probootstrap-flex-block">
                <div class="probootstrap-text probootstrap-animate fadeInUp probootstrap-animated">
                  <div class="newsitem">
                    <div id="news-display">
                      {/* add news here (h3, p, br, br) */}
                      <h3>
                        Robotronics Club-IoT Weekend | <span>04/03/2019</span>
                      </h3>
                      <p>
                        This was a next level for the students after we had
                        conducted the 3 session series on Introduction to
                        Arduino and basics. Raspberry Pi, interfacing of it,
                        Internet of Things and its applications were the prime
                        topics we covered in this 3-day weekend workshop.
                        <br /> There were 3 sessions, each being of 1.5 - 2
                        hours, organized on 2nd, 3rd and 4th March, 2019 in
                        A1-NKN, as we got an extra holiday on Monday (Maha
                        Shivratri).
                        <br />
                        The three sessions were based respectively on
                        <br />
                        1. Raspberry Pi, its setup and interfacing with an LED
                        and other various sensors.
                        <br />
                        2. NodeMCU - ESP8266 module, its basics.
                        <br />
                        3. NodeMCU and post basics and interfacing for basic IoT
                        applications.
                        <br />
                        All the sessions were organized and managed by the
                        students - 2nd year core members and club coordinator
                        from 3rd year - Gaurav Kumar. Every session was planned
                        a day before and executed properly then.
                        <br />
                        Components for the same were mostly issued from within
                        the Institute and hence the cost for this workshop was
                        minimal. Following components have been bought after the
                        Workshop to provide them for various IoT based projects
                        to the IIT Mandi students.
                      </p>
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
