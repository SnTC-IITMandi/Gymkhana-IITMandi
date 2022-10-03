import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

export default function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fun = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKENDURL}/news`
        );
        const data = await response.json();
        setNews(data.data);
      } catch (err) {
        console.log(err);
      }

    };
    fun();
  }, []);
  return (
    <>
      <Navbar activeClass="more" />
      <section className="probootstrap-section probootstrap-section-colored">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-left section-heading probootstrap-animate fadeInUp probootstrap-animated">
              <h2>News</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="probootstrap-section">
        <div className="container">
          <div className="column">
            <div className="col-md-12">
              <div className="probootstrap-flex-block">
                <div className="probootstrap-text probootstrap-animate fadeInUp probootstrap-animated">
                  <div className="newsitem">
                    {news.map((element)=>{
                      return<div id="news-display" key={element._id}>
                      <h3>
                        {element.title } | <span>{new Date(element.date).toLocaleDateString()}</span>
                      </h3>
                      <p>
                        {element.description}
                      </p>
                      <br />
                      <br />
                    </div>

                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
