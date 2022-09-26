import React from "react";
import InfoCard from "./infoCard.component";
import Navbar from "./navbar.component";
import { useState, useEffect } from "react";
export default function Senate() {
  const [sec, setsec] = useState(false);
  useEffect(() => {
    const fun = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKENDURL}/senate`
        );
        const data = await response.json();
        console.log(data);
        setsec(data);
      } catch (err) {
        console.log(err);
      }
    };
    fun();
  }, []);

  return (
    <>
      <Navbar activeClass="senate" />
      <section className="probootstrap-section probootstrap-section-colored">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-left section-heading probootstrap-animate fadeInUp probootstrap-animated">
              <h2>Senate</h2>
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
                    <h3>Academic Secretary</h3>
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
                    <a
                      className="contacts-link"
                      target="_blank"
                      href="https://wiki.iitmandi.co.in/p/UG_Academic_Council"
                      rel="noopener noreferrer"
                    >
                      Society Website
                    </a>
                  </div>
                </div>
                <div
                  className="col-md-7 col-md-push-1  probootstrap-animate fadeInUp probootstrap-animated"
                  id="probootstrap-content"
                >
                  <h2>Senate</h2>
                  <p>
                    {/* <!-- Add senate info here --> */}
                    The Senate is the topmost decision making body of the
                    institute, having student representatives as a few of its
                    members. All the important decisions concerning the
                    institute matters are implemented only after the approval of
                    the Senate. The Director of the institute acts as the
                    ex-officio Chairman of the Senate. The student members in
                    the Senate are the Academic Affairs Secretary, the General
                    Secretary and the Research Secretary.
                  </p>
                  <p>
                    Also, the Academic Secretary works in association with a
                    small informal group, which accounts for the smooth
                    communication between the Secretary and other students.
                    Though not a formal body, together with the Secretary they
                    are on a path of making Academics@IIT-Mandi more and more
                    glorious. It would be therefore obligatory to showcase their
                    names:
                  </p>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Roll Number</th>
                        <th>Branch</th>
                        <th>Phone Number</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* <!-- Seniors to Juniors --> */}
                      <tr>
                        <td data-label="Name">Jatin Nimawat</td>
                        <td data-label="Roll">B17014</td>
                        <td data-label="Branch">CE</td>
                        <td data-label="Phone">93511 16924</td>
                      </tr>
                      <tr>
                        <td data-label="Name">Saurabh Bansal</td>
                        <td data-label="Roll">B17059</td>
                        <td data-label="Branch">CSE</td>
                        <td data-label="Phone">78381 82490</td>
                      </tr>
                      <tr>
                        <td data-label="Name">Piyush Bafna</td>
                        <td data-label="Roll">B17020</td>
                        <td data-label="Branch">EE</td>
                        <td data-label="Phone">83173 45090</td>
                      </tr>
                      <tr>
                        <td data-label="Name">Shreya Lanjewar</td>
                        <td data-label="Roll">B17142</td>
                        <td data-label="Branch">ME</td>
                        <td data-label="Phone">98343 40089</td>
                      </tr>

                      <tr>
                        <td data-label="Name">Amit Kumar Jatav</td>
                        <td data-label="Roll">B18005</td>
                        <td data-label="Branch">CE</td>
                        <td data-label="Phone">78774 34200</td>
                      </tr>
                      <tr>
                        <td data-label="Name">Mohib Qureshi</td>
                        <td data-label="Roll">B18070</td>
                        <td data-label="Branch">CSE</td>
                        <td data-label="Phone">85804 12113</td>
                      </tr>
                      <tr>
                        <td data-label="Name">Adarsh Raj</td>
                        <td data-label="Roll">B18100</td>
                        <td data-label="Branch">EE</td>
                        <td data-label="Phone">62049 39583</td>
                      </tr>
                      <tr>
                        <td data-label="Name">Rachit Katewa</td>
                        <td data-label="Roll">B18021</td>
                        <td data-label="Branch">ME</td>
                        <td data-label="Phone">86199 98692</td>
                      </tr>

                      <tr>
                        <td data-label="Name">Aarushi Gajri</td>
                        <td data-label="Roll">B19001</td>
                        <td data-label="Branch">BioE</td>
                        <td data-label="Phone">96198 31521</td>
                      </tr>
                      <tr>
                        <td data-label="Name">Sumit Meel</td>
                        <td data-label="Roll">B19060</td>
                        <td data-label="Branch">CE</td>
                        <td data-label="Phone">70238 27650</td>
                      </tr>
                      <tr>
                        <td data-label="Name">Naveen Sai</td>
                        <td data-label="Roll">B19096</td>
                        <td data-label="Branch">CSE</td>
                        <td data-label="Phone">62303 26108</td>
                      </tr>
                      <tr>
                        <td data-label="Name">Sagar Kumar</td>
                        <td data-label="Roll">B19138</td>
                        <td data-label="Branch">DSE</td>
                        <td data-label="Phone">85291 76868</td>
                      </tr>
                      <tr>
                        <td data-label="Name">Yuvraj Singh Bishnoi</td>
                        <td data-label="Roll">B19063</td>
                        <td data-label="Branch">EE</td>
                        <td data-label="Phone">87007 61867</td>
                      </tr>
                      <tr>
                        <td data-label="Name">Aniruddha Prakash</td>
                        <td data-label="Roll">B19206</td>
                        <td data-label="Branch">EP</td>
                        <td data-label="Phone">99992 64455</td>
                      </tr>
                      <tr>
                        <td data-label="Name">Tanisha Gautam</td>
                        <td data-label="Roll">B19269</td>
                        <td data-label="Branch">ME</td>
                        <td data-label="Phone">80917 64728</td>
                      </tr>
                      <tr>
                        <td data-label="Name">Ravneet Kaur</td>
                        <td data-label="Roll">B20018</td>
                        <td data-label="Branch">BioE</td>
                        <td data-label="Phone">82848 60761</td>
                      </tr>
                      <tr>
                        <td data-label="Name">Ravina Chirania</td>
                        <td data-label="Roll">B20062</td>
                        <td data-label="Branch">CE</td>
                        <td data-label="Phone">83024 19118</td>
                      </tr>
                      <tr>
                        <td data-label="Name">Himakshi Gupta</td>
                        <td data-label="Roll">B20104</td>
                        <td data-label="Branch">CSE</td>
                        <td data-label="Phone">83608 83168</td>
                      </tr>
                      <tr>
                        <td data-label="Name">Chaetanya Sharma</td>
                        <td data-label="Roll">B20152</td>
                        <td data-label="Branch">DSE</td>
                        <td data-label="Phone">77172 35885</td>
                      </tr>
                      <tr>
                        <td data-label="Name">Shri Janani Senthil</td>
                        <td data-label="Roll">B20232</td>
                        <td data-label="Branch">EE</td>
                        <td data-label="Phone">90030 91225</td>
                      </tr>
                      <tr>
                        <td data-label="Name">Ravi Suthar</td>
                        <td data-label="Roll">B20262</td>
                        <td data-label="Branch">EP</td>
                        <td data-label="Phone">93517 84683</td>
                      </tr>
                      <tr>
                        <td data-label="Name">Harshit Agarwar</td>
                        <td data-label="Roll">B20287</td>
                        <td data-label="Branch">ME</td>
                        <td data-label="Phone">95697 31862</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
