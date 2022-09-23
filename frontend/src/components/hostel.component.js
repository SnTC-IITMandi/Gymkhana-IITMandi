import React from "react";
import InfoCard from "./infoCard.component";
import Navbar from "./navbar.component";

export default function Hostel() {
  return (
    <>
    <Navbar activeClass="hostel"/>
      <section className="probootstrap-section probootstrap-section-colored">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-left section-heading probootstrap-animate fadeInUp probootstrap-animated">
              <h2>Hostel</h2>
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
                    <h3>Hostel Affairs Secretary</h3>
                    <ul className="probootstrap-side-menu">
                      <li>
                        {/* <!-- Add hostel secy here --> */}
                        {/* TODO: update with backend */}
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

                  <div className="probootstrap-teacher text-center probootstrap-animate fadeInUp probootstrap-animated">
                    <a className="contacts-link" href="/contacts.html#hostel">
                      Club Contacts
                    </a>
                  </div>
                </div>
                <div
                  className="col-md-7 col-md-push-1  probootstrap-animate fadeInUp probootstrap-animated"
                  id="probootstrap-content"
                >
                  <h2>Hostels</h2>
                  <p>
                    {/* <!-- Add hostel info here --> */}
                    Currently, there are six hostels spread over the South
                    Campus (four) and the North Campus (two) Each hostel is
                    managed by a Warden, ably assisted by an Assistant Warden,
                    faculty members, a caretaker and a dedicated team of support
                    staff and guards. There are two Girls's Hostels, Chandrataal
                    in South Campus and Gauri Kund in North Campus. Four Boys
                    Hostels, Suvalsar, Parashar, and Nako in South Campus and
                    Beaskund in North Campus. Students play an important role in
                    the management of the hostels. They are represented by
                    elected secretaries who help the Wardens in the day smooth
                    running of the hostels. Messes catering to different hostels
                    provide homely food. Common room is equipped with LCD TVs,
                    table tennis facilities.
                  </p>
                  The south campus has the following hostels-
                  <ul>
                    <li>Nako</li>
                    <li>Prashar</li>
                    <li>Suvalsar</li>
                    <li>Chandrataal</li>
                  </ul>
                  The north campus has the following hostels-
                  <ul>
                    <li>Beaskund</li>
                    <li>Gaurikund</li>
                    <li>Suraj Tal</li>
                    <li>Dashir</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
