import React, { useState, useEffect } from "react";
import InfoCard from "./InfoCard";
import Navbar from "./Navbar";

export default function WallOfFame() {
  const [secretariesRender, setSecretariesRender] = useState([]);

  useEffect(() => {
    const fun = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKENDURL}/`);
        const data = await response.json();
        // make secretaries html
        const groupByYear = data.data.reduce(function (memo, x) {
          if (!memo[x["year"]]) {
            memo[x["year"]] = [];
          }
          memo[x["year"]].push(x);
          return memo;
        }, {});
        // ordering by year in desc and creating html
        const render = Object.keys(groupByYear)
          .sort()
          .reverse()
          .map((key, index) => {
            if (index === 0) return <React.Fragment key={index}></React.Fragment>;
            return (
              <React.Fragment key={key}>
                <button
                  className={`accordion ${index === 1 && "active"} ${
                    index === 1 && "above-part"
                  }`}
                  onClick={accordionClick}
                >
                  {`Academic Year ${key}-${(Number(key) % 2000) + 1}`}
                </button>
                <div
                  className="panel"
                  style={{ display: index === 1 ? "block" : "none" }}
                >
                  <section
                    className="probootstrap-section secretaries"
                    style={{ margin: 100 + "px" }}
                  >
                    <div className="container">
                      <div className="row">
                        <div className="col-md-6 col-md-offset-3 text-center section-heading probootstrap-animate fadeInUp probootstrap-animated">
                          <h2>{`Academic Year ${key}-${
                            (Number(key) % 2000) + 1
                          }`}</h2>
                        </div>
                      </div>
                      <div className="row">
                        {groupByYear[key].map((sec) => {
                          return (
                            <div key={sec._id} className="col-md-3 col-sm-6">
                              <InfoCard
                                info={{
                                  name: sec.name,
                                  image: sec.img,
                                  position: sec.post,
                                  facebook_id: sec.facebook,
                                  email_id: sec.email,
                                }}
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </section>
                </div>
              </React.Fragment>
            );
          });
        setSecretariesRender(render);
      } catch (err) {
        console.log(err);
      }
    };
    fun();
  }, []);

  const accordionClick = (e) => {
    e.preventDefault();
    if (e.target.classList.contains("active")) {
      e.target.nextElementSibling.style.display = "none";
    } else {
      e.target.nextElementSibling.style.display = "block";
    }
    e.target.classList.toggle("active");
  };

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
      {secretariesRender}
    </>
  );
}
