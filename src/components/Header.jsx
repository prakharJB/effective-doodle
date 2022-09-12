import React from "react";
import logo from "../images/finallogo.png";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { useEffect, useState } from "react";
// import { ThreeDots } from "react-loader-spinner";
const Header = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  useEffect(() => {
    const url = "https://132.148.76.108:8000/api/topslides";
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.log(error));
  }, []);
  const [data, setData] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   if (data.length !== 0)
  //     setTimeout(() => {
  //       setIsLoading(false);
  //     }, 1000);
  //   console.log(data);
  // }, [data]);
  return (
    <div id="head" className="imp-body">
      <div className="container py-md-2">
        <div className="row">
          <div className="col-md-2 header-col">
            <div className="logo-img">
              <a href="/">
                <img src={logo} alt="header-logo" />
              </a>
            </div>
          </div>
          <div className="col-md-10 slider-col">
            {/* <div>{isLoading ?}</div> */}
            {/* <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="Yellow"
              ariaLabel="three-dots-loading"
              type="ThreeDots"
              timeout={1000}
            /> */}
            <Carousel
              responsive={responsive}
              infinite={true}
              itemClass="carouselItem"
              autoPlay={true}
            >
              {data.map((user) => (
                <div className="slide">
                  <div className="slider-one">
                    <div className="slide-date">{user.date}</div>
                    <div className="slide-logos">
                      <div className="slide-scorebord">
                        {/* <img src={user.image1} alt='team1' /> */}
                        <div className="team-name">
                          <span>{user.title1}</span>
                        </div>
                        <div className="team-score">
                          <span>{user.score1 }</span>
                        </div>
                      </div>
                      <div className="slide-scorebord">
                        {/* <img src={user.image2} alt='team2' /> */}
                        <div className="team-name">
                          <span>{user.title2}</span>
                        </div>
                        <div className="team-score">
                          <span>{user.score2}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
