import React from 'react'
import InfoCard from './infoCard.component';

export default function Home() {
  return (
    <>
      <section className="probootstrap-section probootstrap-section-colored">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-left section-heading probootstrap-animate  fadeInUp probootstrap-animated">
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
                <div className="probootstrap-text probootstrap-animate  fadeInUp probootstrap-animated">
                  <h3>About Student Gymkhana</h3>
                  <p>
                    Students are the life and soul of all educational
                    enterprise. At the IIT Mandi, Students have the unique
                    opportunity of not just witnessing an Institution in the
                    making but participating in the making as well. Winston
                    Churchill once said that we shape our Institution and these
                    in turn shape our lives. The heady experience of joining
                    hands with the Director, the faculty and staff in deciding
                    almost all aspects of campus life and in evolving a culture
                    so unique to the IIT of the Shivaliks is part of what makes
                    our life at IIT Mandi unique!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="probootstrap-section secretaries">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 text-center section-heading probootstrap-animate  fadeInUp probootstrap-animated">
              <h2>Meet Our Secretaries</h2>
            </div>
          </div>

          <div className="row">
            {/* TODO: render InfoCard with backend data */}
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
      </section>
    </>
  );
}
