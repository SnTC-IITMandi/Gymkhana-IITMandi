import React, { Component } from 'react';

export default class Main extends Component {
    render() {
        return (
            <div>
                <div className="probootstrap-page-wrapper">
                    <nav className="navbar navbar-default probootstrap-navbar">
                        <div className="container">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse"
                                    aria-expanded="false" aria-controls="navbar">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <a className="navbar-brand" href="index.html" title="Gymkhana">StudentGymkhana-IITMandi</a>
                            </div>

                            <div id="navbar-collapse" className="navbar-collapse collapse">
                                <ul className="nav navbar-nav navbar-right">
                                    <li className="active"><a href="index.html">Home</a></li>
                                    <li><a href="technical.html">Technical</a></li>
                                    <li><a href="research.html">Research</a></li>
                                    <li><a href="cultural.html">Cultural</a></li>
                                    <li><a href="sports.html">Sports</a></li>
                                    <li><a href="literary.html">Literary</a></li>
                                    <li><a href="hostel.html">Hostel</a></li>
                                    <li><a href="senate.html">Senate</a></li>
                                    <li className="dropdown2">

                                        <a href="#">More</a>
                                        <div className="dropdown-content">
                                            <a href="wall_of_fame.html">Wall of Fame</a>
                                            ---
                                            <a href="contributors.html">Contributors</a>
                                            ---
                                            <a href="contacts.html">Contacts</a>
                                            ---
                                            <a href="news.html">News</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                    <section className="probootstrap-section probootstrap-section-colored">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-left section-heading probootstrap-animate">
                                    <h2>Home</h2>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="probootstrap-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="probootstrap-flex-block">
                                        <div className="probootstrap-text probootstrap-animate">
                                            <h3>About Student Gymkhana</h3>
                                            <p>Students are the life and soul of all educational enterprise. At the IIT Mandi, Students have the
                                                unique opportunity of not just witnessing an Institution in the making but participating in the making
                                                as well. Winston Churchill once said
                                                that we shape our Institution and these in turn shape our lives. The heady experience of joining hands
                                                with the Director, the faculty and staff in deciding almost all aspects of campus life and in evolving
                                                a culture so unique to the IIT of
                                                the Shivaliks is part of what makes our life at IIT Mandi unique!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="probootstrap-section secretaries">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 col-md-offset-3 text-center section-heading probootstrap-animate">
                                    <h2>Meet Our Secretaries</h2>
                                </div>
                            </div>

                            <div className="row">

                                <div className="col-md-3 col-sm-6">
                                    <div className="probootstrap-teacher text-center probootstrap-animate">
                                        <figure className="media">
                                            <img src="img/Hiya_Jain.jpg" alt="" className="img-responsive" />
                                        </figure>
                                        <div className="text">
                                            <h3>Hiya Jain</h3>
                                            <p>General Secretary</p>
                                            <ul className="probootstrap-footer-social">
                                                <li className="facebook"><a href="https://www.facebook.com/hiya.jain.90410"><i
                                                    className="icon-facebook2"></i></a></li>
                                                <li className="facebook"><a href="mailto:general_secretary@students.iitmandi.ac.in"><i
                                                    className="icon-email"></i></a></li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-3 col-sm-6">
                                    <div className="probootstrap-teacher text-center probootstrap-animate">
                                        <figure className="media">
                                            <img src="img/Surendra_Singh.jpeg" alt="" className="img-responsive" />
                                        </figure>
                                        <div className="text">
                                            <h3>Surendra Singh</h3>
                                            <p>Technical Secretary</p>
                                            <ul className="probootstrap-footer-social">
                                                <li className="facebook"><a href="https://www.facebook.com/surendrasingh24"><i className="icon-facebook2"></i></a>
                                                </li>
                                                <li className="facebook"><a href="mailto:technical_secretary@students.iitmandi.ac.in"><i
                                                    className="icon-email"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-3 col-sm-6">
                                    <div className="probootstrap-teacher text-center probootstrap-animate">
                                        <figure className="media">
                                            <img src="img/Shubham_Ranjan.JPG" alt="" className="img-responsive" />
                                        </figure>
                                        <div className="text">
                                            <h3>Shubham Ranjan</h3>
                                            <p>Research Secretary</p>
                                            <ul className="probootstrap-footer-social">
                                                <li className="facebook"><a href="https://www.facebook.com/drshubhamranjan"><i className="icon-facebook2"></i></a>
                                                </li>
                                                <li className="facebook"><a href="mailto:research_secretary@students.iitmandi.ac.in"><i
                                                    className="icon-email"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-3 col-sm-6">
                                    <div className="probootstrap-teacher text-center probootstrap-animate">
                                        <figure className="media">
                                            <img src="img/Kanak_Dubey.jpg" alt="" className="img-responsive" />
                                        </figure>
                                        <div className="text">
                                            <h3>Kanak Dubey</h3>
                                            <p>Cultural Secretary</p>
                                            <ul className="probootstrap-footer-social">
                                                <li className="facebook"><a href="https://www.facebook.com/profile.php?id=100074381510376"><i
                                                    className="icon-facebook2"></i></a></li>
                                                <li className="facebook"><a href="mailto:cultural_secretary@students.iitmandi.ac.in"><i
                                                    className="icon-email"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-3 col-sm-6">
                                    <div className="probootstrap-teacher text-center probootstrap-animate">
                                        <figure className="media">
                                            <img src="img/Siddharth_Pandi.jpg" alt="" className="img-responsive" />
                                        </figure>
                                        <div className="text">
                                            <h3>Siddharth Pandi</h3>
                                            <p>Sports Secretary</p>
                                            <ul className="probootstrap-footer-social">
                                                <li className="facebook"><a href="https://www.facebook.com/siddhu8101"><i
                                                    className="icon-facebook2"></i></a></li>
                                                <li className="facebook"><a href="mailto:sports_secretary@students.iitmandi.ac.in"><i
                                                    className="icon-email"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-3 col-sm-6">
                                    <div className="probootstrap-teacher text-center probootstrap-animate">
                                        <figure className="media">
                                            <img src="img/Titiksha_Behal.jpeg" alt="" className="img-responsive" />
                                        </figure>
                                        <div className="text">
                                            <h3>Titiksha Behal</h3>
                                            <p>Literary Secretary</p>
                                            <ul className="probootstrap-footer-social">
                                                <li className="facebook"><a href="https://www.facebook.com/titiksha.behal/"><i
                                                    className="icon-facebook2"></i></a></li>
                                                <li className="facebook"><a href="mailto:literary_secretary@students.iitmandi.ac.in"><i
                                                    className="icon-email"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-3 col-sm-6">
                                    <div className="probootstrap-teacher text-center probootstrap-animate">
                                        <figure className="media">
                                            <img src="img/Sahas_Goyal.jpg" alt="" className="img-responsive" />
                                        </figure>
                                        <div className="text">
                                            <h3>Sahas Goyal</h3>
                                            <p>Hostel Affairs Secretary</p>
                                            <ul className="probootstrap-footer-social">
                                                <li className="facebook"><a href="https://www.facebook.com/sahas.goyal"><i
                                                    className="icon-facebook2"></i></a></li>
                                                <li className="facebook"><a href="mailto:hostelaffairs_secretary@students.iitmandi.ac.in"><i
                                                    className="icon-email"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-3 col-sm-6">
                                    <div className="probootstrap-teacher text-center probootstrap-animate">
                                        <figure className="media">
                                            <img src="img/Naveen.jpg" alt="" className="img-responsive" />
                                        </figure>
                                        <div className="text">
                                            <h3>Naveen Sai</h3>
                                            <p>Academic Secretary</p>
                                            <ul className="probootstrap-footer-social">
                                                <li className="facebook"><a href="https://www.facebook.com/naveen.sai.929/"><i
                                                    className="icon-facebook2"></i></a></li>
                                                <li className="facebook"><a href="mailto:academic_secretary@students.iitmandi.ac.in"><i
                                                    className="icon-email"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </section>

                    <footer className="probootstrap-footer probootstrap-bg">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="probootstrap-footer-widget">
                                        <h3>About Student Gymkhana</h3>
                                        <p>Student Gymkhana -IIT Mandi was established in 2011 and since then it has been instrumental in the
                                            growth and development of the Institute and its students through its elected secretaries. Student
                                            Gymkhana-IIT Mandi consists of eight
                                            secretaries all organizing collective student activities in their respective spheres.</p>
                                        <h3>Social</h3>
                                        <ul className="probootstrap-footer-social">
                                            <li><a href="https://www.facebook.com/gymkhanaiitmandi/"><i className="icon-facebook"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-3 col-md-push-1">
                                    <div className="probootstrap-footer-widget">
                                        <h3>Links</h3>
                                        <ul>
                                            <li><a href="http://www.iitmandi.ac.in/">IIT Mandi</a></li>
                                            <li><a href="http://students.iitmandi.ac.in/">Students</a></li>
                                            <li><a href="contacts.html">Contact</a></li>
                                            <li><a href="https://github.com/KamandPrompt/Gymkhana-IITMandi">Want to Contribute</a></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </footer>

                </div>

            </div>
        );
    }
}