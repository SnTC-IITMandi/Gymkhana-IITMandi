import React from 'react'
import InfoCard from './infoCard.component';
import Navbar from './navbar.component';

export default function Research() {
    return (
        <>
            <Navbar activeClass="research" />
            <section className="probootstrap-section probootstrap-section-colored">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-left section-heading probootstrap-animate fadeInUp probootstrap-animated">
                            <h2>Research</h2>
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
                                        <h3>Research Secretary</h3>
                                        <ul className="probootstrap-side-menu">
                                            <li>
                                                {/* <!-- Add here research secy --> */}
                                                <InfoCard
                                                    info={{
                                                        name: "Surendra Singh",
                                                        image: "",
                                                        position: "Technical Secretary",
                                                        facebook_id: "https://www.facebook.com/surendrasingh24",
                                                        email_id: "technical_secretary@students.iitmandi.ac.in",
                                                    }}
                                                />
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="probootstrap-teacher text-center probootstrap-animate fadeInUp probootstrap-animated">
                                        <a className="contacts-link" href="/contacts.html#research">Club Contacts</a>
                                    </div>
                                </div>
                                <div className="col-md-7 col-md-push-1  probootstrap-animate fadeInUp probootstrap-animated" id="probootstrap-content">
                                    <h2>Research Society</h2>
                                    <p>
                                        {/* <!-- Add research council info here --> */}
                                        The IIT Mandi Research Club (IITMRC) is an open club for students of IIT Mandi. It is involved in the
                                        research and innovative activities to make new contacts, catch up with junior students, develop new
                                        opportunities and keep up to date with the latest developments in science and technology. With events
                                        to be held in the near future, it is a way to meet with like-minded graduates and scholars with an
                                        opportunity to create and maintain professional and personal contacts all within an internal network.
                                        It consists of a committee of scholars from almost all the disciplines. This will help in a better
                                        communication between the scholars themselves and undergraduates. This committee forms the basis of
                                        research council of IIT Mandi headed by the research secretary.
                                    </p>
                                    Followings are the parts of Research Society:
                                    <ol>
                                        <li>SCRI</li>
                                        <li>IEEE Students</li>
                                        <li>ACM Students</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
