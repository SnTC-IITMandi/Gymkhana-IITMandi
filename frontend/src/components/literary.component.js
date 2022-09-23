import React from 'react'
import InfoCard from './infoCard.component';
import Navbar from './navbar.component';

export default function Literary() {
    return (
        <>
            <Navbar activeclassName="literary" />
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
                                                {/* <!-- Add lit secy here --> */}
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
                                        <a className="contacts-link" href="/contacts.html#literary">Club Contacts</a>
                                    </div>
                                </div>
                                <div className="col-md-7 col-md-push-1  probootstrap-animate fadeInUp probootstrap-animated" id="probootstrap-content">
                                    <h2>Literary Society</h2>
                                    <p>The Literary Society is headed by Literary Secretary. It has three clubs under it as of now. Each
                                        club has its own activities and funding for giving students exposure to various activities through
                                        events both within and outside the Institute. This society publishes the institute magazine "Vivaan"
                                        in every semester. Literary Society constitutes of the following clubs:
                                        <ul>
                                            <li>Debating Club</li>
                                            <li>Writing Club</li>
                                            <li>Quizzing Club</li>
                                            <li>Student Media Body</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
