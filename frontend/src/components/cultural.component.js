import React from 'react';
import InfoCard from './infoCard.component';
import Navbar from './navbar.component';

export default function Cultural() {
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
                        {/* <!-- Add cult secy here --> */}
                        <InfoCard
                          info={{
                            name: 'Surendra Singh',
                            image: '',
                            position: 'Technical Secretary',
                            facebook_id:
                              'https://www.facebook.com/surendrasingh24',
                            email_id:
                              'technical_secretary@students.iitmandi.ac.in',
                          }}
                        />
                      </li>
                    </ul>
                  </div>

                  <div className="probootstrap-teacher text-center probootstrap-animate fadeInUp probootstrap-animated">
                    <a className="contacts-link" href="/contacts.html#cultural">
                      Club Contacts
                    </a>
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
                  activities the other clubs typically represents various
                  forms of fine arts and are responsible for the overall
                  development of the institute and individuals as well. One
                  unique feature of the Institute's Cultural Society is that
                  all the clubs support open participation i.e. all the
                  students are free to join a club at any point of time. Of
                  course, dedicated students are rewarded accordingly.
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
