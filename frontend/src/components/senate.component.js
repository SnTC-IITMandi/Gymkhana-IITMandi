import React, { useState, useEffect } from "react";
import InfoCard from "./infoCard.component";
import Navbar from "./navbar.component";

export default function Senate() {
  const [senate, setSenate] = useState([]);
  const [sec, setSec] = useState(false);

  useEffect(() => {
    const fun1 = async () => {
      try {
        // TODO: add senate_members get link in backend
        const response = await fetch(
          `${process.env.REACT_APP_BACKENDURL}/senate_members`
        );
        const data = await response.json();
        data.sort((a, b) => (a.rollno > b.rollno ? 1 : -1));
        setSenate(data);
      } catch (err) {
        console.log(err);
      }
    };
    const fun2 = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKENDURL}/senate`
        );
        const data = await response.json();
        setSec(data);
      } catch (err) {
        console.log(err);
      }
    };
    fun1();
    fun2();
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
                        {/* <!-- Add here Academic secretary --> */}
                        {sec && (
                          <InfoCard
                            info={{
                              name: sec.name,
                              image: sec.img,
                              position: sec.post,
                              facebook_id: sec.facebook,
                              email_id: sec.email,
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
                      {/* Seniors to Juniors */}
                      {senate.map((member) => {
                        return (
                          <tr key={member._id}>
                            <td data-label="Name">{member.name}</td>
                            <td data-label="Roll">{member.rollno}</td>
                            <td data-label="Branch">{member.branch}</td>
                            <td data-label="Phone">{member.phoneno}</td>
                          </tr>
                        );
                      })}
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
