import React from 'react';
import InfoCard from './infoCard.component';
import Navbar from './navbar.component';

export default function Sports() {
  return (
    <>
      <Navbar activeClassName="sports" />
      <section ClassName="probootstrap-section probootstrap-section-colored">
        <div ClassName="container">
          <div ClassName="row">
            <div ClassName="col-md-12 text-left section-heading probootstrap-animate fadeInUp probootstrap-animated">
              <h2>Sports</h2>
            </div>
          </div>
        </div>
      </section>

      <section ClassName="probootstrap-section probootstrap-section-sm">
        <div ClassName="container">
          <div ClassName="row">
            <div ClassName="col-md-12">
              <div ClassName="row probootstrap-gutter0">
                <div ClassName="col-md-4" id="probootstrap-sidebar">
                  <div ClassName="probootstrap-sidebar-inner probootstrap-overlap probootstrap-animate fadeInUp probootstrap-animated">
                    <h3>Sports Secretary</h3>
                    <ul ClassName="probootstrap-side-menu">
                      <li>
                        {/* <!-- Add here sports --> */}
                        <div className="col-md-3 col-sm-6">
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
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div ClassName="probootstrap-teacher text-center probootstrap-animate fadeInUp probootstrap-animated">
                    <a ClassName="contacts-link" href="/contacts.html#sports">
                      Contact Coordinators
                    </a>
                  </div>
                </div>
                <div
                  ClassName="col-md-7 col-md-push-1  probootstrap-animate fadeInUp probootstrap-animated"
                  id="probootstrap-content"
                >
                  <h2>Sports Society</h2>
                  <p>
                    {/* <!-- Add research council info here --> */}
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
