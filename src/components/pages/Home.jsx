import React from 'react';
import '../../css/Style.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 767 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    },
  };
  const [data, setData] = useState([]);

  const Linkto = 'http://132.148.76.108:8000';

  useEffect(() => {
    const url = 'http://132.148.76.108:8000/api/midslides';
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.log(error));
  }, []);

  const [description, setDescription] = useState([]);
  useEffect(() => {
    const url = 'http://132.148.76.108:8000/api/descriptions';
    fetch(url)
      .then((response) => response.json())
      .then((json) => setDescription(json))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className='main-body'>
      <div className='imp-body'>
        <div id='main-body'>
          <div className='full-bg'>
            <div
              className='post-13 page type-page status-publish hentry'
              id='post-13'
            >
              <div className='home-bnr container-fluid'>
                <div className='countdown row'>
                  <div className=' col-md-6'>
                    <div className='wow'>
                      <h2 className=' main-title py-3'>
                        {' '}
                        High School Football Network
                      </h2>
                      <h5 className=' text-white para-one py-2'>
                        The Network that partners with High Schools to provide a
                        professional sports website
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='horizontal-line'></div>
            </div>
            <div className='yt-section container'>
              <div className='player-head mx-md-5 my-md-4  '>
                <h1 className='section-2 slid-one text-white'>
                  High School Football Services
                </h1>
              </div>
              <div className='container py-5'>
                <div className='row'>
                  {description.map((desc) => (
                    <div className='col-md-3 desc-div'>
                      {/* <NavLink to={desc.link}> */}
                      <img
                        width='100%'
                        height='180'
                        src={Linkto + '/' + desc.image}
                        alt='descimages'
                      />
                      {/* </NavLink> */}
                      <h3 className='text-white py-4'>{desc.title}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className='slider-section container slid-two py-5'>
              <div className='player-head mx-md-5'>
                <h1 className='section-2  text-white'>
                  {' '}
                  High School Football Gallery
                </h1>
              </div>

              <div className='container py-5 gallery-slider'>
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  itemClass='carouselItem'
                  autoPlay={true}
                >
                  {data.map((user) => (
                    <div className='card-div mt-md-4'>
                      <img
                        width='100%'
                        src={Linkto + '/' + user.image}
                        alt='Brett'
                      />
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
