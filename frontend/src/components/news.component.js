import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./navbar.component";

export default function News() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKENDURL}/news`)
      .then((result) => 
      {console.log(result.data)
      setNews(result.data)})
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Navbar activeClass="more" />
      <section class="probootstrap-section probootstrap-section-colored">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-left section-heading probootstrap-animate fadeInUp probootstrap-animated">
              <h2>News</h2>
            </div>
          </div>
        </div>
      </section>

      <section class="probootstrap-section">
        <div class="container">
          <div class="column">
            <div class="col-md-12">
              <div class="probootstrap-flex-block">
                <div class="probootstrap-text probootstrap-animate fadeInUp probootstrap-animated">
                  <div class="newsitem">
                    {news.map(element=>{
                      return<div id="news-display" key={element._id}>
                      {/* add news here (h3, p, br, br) */}
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
