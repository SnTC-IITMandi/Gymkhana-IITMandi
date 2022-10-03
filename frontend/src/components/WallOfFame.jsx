import React from "react";
import InfoCard from "./InfoCard";
import Navbar from "./Navbar";

export default function WallOfFame() {
  const accordionClick = (e) => {
    e.preventDefault();
    if (e.target.classList.contains('active')) {
      e.target.nextElementSibling.style.display = "none";
    } else {
      e.target.nextElementSibling.style.display = "block";
    }
    e.target.classList.toggle('active');
  }

  return (
    <>
      <Navbar activeClass="more" />
      <section className="probootstrap-section probootstrap-section-colored">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-left section-heading probootstrap-animate fadeInUp probootstrap-animated">
              <h2>Wall Of Fame</h2>
            </div>
          </div>
        </div>
      </section>
      {/* TODO: dynamically add secretaries of all years till now */}
      {/* <!-- Year 2021-22 --> */}
      <button className="accordion active above-part" onClick={accordionClick}>
        Academic Year 2021-22
      </button>
      <div className="panel" style={{ display: "block" }}>
        <section
          className="probootstrap-section secretaries"
          style={{ margin: 100 + "px" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 text-center section-heading probootstrap-animate fadeInUp probootstrap-animated">
                <h2>Academic Year 2020-21</h2>
              </div>
            </div>
            <div className="row">
              {/* update secretaries with backend */}
              <div className="col-md-3 col-sm-6">
                <InfoCard
                  info={{
                    name: "Surendra Singh",
                    image: "",
                    position: "Technical Secretary",
                    facebook_id: "https://www.facebook.com/surendrasingh24",
                    email_id: "technical_secretary@students.iitmandi.ac.in",
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
