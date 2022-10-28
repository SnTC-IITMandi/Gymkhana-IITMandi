import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Pagination } from "@mui/material";

export default function News() {
  const elementsPerPage = 3;
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPages] = useState(1);

  useEffect(() => {
    const fun = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKENDURL}/news`
        );
        const data = await response.json();

        setNews(data.data);
        setTotalPages(1 + parseInt(data.data.length / elementsPerPage));
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
                    {news
                      .slice(
                        elementsPerPage * (page - 1),
                        elementsPerPage * page
                      )
                      .map((element) => {
                        return (
                          <div id="news-display" key={element._id}>
                            <h3>
                              {element.title} |{" "}
                              <span>
                                {new Date(element.date).toLocaleDateString()}
                              </span>
                            </h3>
                            <p
                              dangerouslySetInnerHTML={{
                                __html: element.description,
                              }}
                            ></p>
                            <br />
                            <br />
                          </div>
                        );
                      })}
                  </div>
                  <br />
                  <div>
                    <Pagination
                      style={{ display: "flex", justifyContent: "center" }}
                      count={totalPage}
                      color="secondary"
                      variant="outlined"
                      onChange={(e, value) => setPage(value)}
                    />
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
