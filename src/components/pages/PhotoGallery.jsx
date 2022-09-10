import React,{useState} from 'react'
import PGone from '../../images/pgimg.jpg'
import PGtwo from '../../images/pg2.jpg'
import PGthree from '../../images/pg3.jpg'
import PGfour from '../../images/pg4.jpg'
import PGfive from '../../images/pg5.jpg'
import PGsix from '../../images/pg1.jpg'
import Coachetwo from "../../images/coachetwo.png"
import Coacheone from "../../images/coaches.png"
import Playerone from "../../images/Roster.png"
import Carousel from "react-multi-carousel";

const PhotoGallery = () => {
  const data=[
    { id: 1, image: PGone },
    { id: 2, image: PGtwo },
    { id: 3, image: PGthree },
    { id: 4, image:  PGfour },
    { id: 5, image:  PGfive },
    { id: 6, image: PGsix  }

  ]
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
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
 
  return (
    <div id='photog-main'>
        <div className='photogallery'>
          <section className='sec-photogallery'>
            {/* <div className='txt-photo py-5'>
              <h1 className='photo-head my-5'>PHOTO <br />GALLERY</h1>
            </div> */}
          </section>
         
          <section className="cont-gc py-5 container">
        <div className="cont-div">
          <h1>We provide photo galleries for:</h1>
          <ul>

          <li>
          <h4>Game Photos</h4></li>
          <li>
          <h4>Practice Photos</h4>
          </li>
          <li>
          <h4>Training Photos</h4>
          </li>
          <li>
          <h4>Coaching Photos</h4>
          </li>
          <li>
          <h4>Fan Photos</h4>
          </li>
          </ul>

        </div>
      </section>
       <section className='photo-col'>
            <div className='photos container'>
              <h2 className='sec-headone mx-3 my-5'>PHOTOS GALLERY</h2>
              <div className='container'>
              <div className='row py-3'>
              {/* <Carousel
                  responsive={responsive}
                  infinite={true}
                  itemClass="carouselItem"
                  autoPlay={true}
                  autoPlaySpeed={1000}
                >
                  {data.map((user) => (
                    <div className="card-div mt-md-4">
                      <img width="100%" src={user.image} alt="Brett" />
                    </div>
                  ))}
                </Carousel> */}
              <div className='col-md-4'>
                  <div className='pgimg'>
                      <img src={PGone} alt="Pgone" />
                  </div>
                </div>
                
                <div className='col-md-4'>
                  <div className='pgimg'>
                      <img src={PGtwo} alt="Pgtwo" />
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='pgimg'>
                      <img src={PGthree} alt="Pgthree" />
                  </div>
                </div> 
              </div>
               <div className='row py-3'>
                <div className='col-md-4'>
                  <div className='pgimg'>
                      <img src={PGfour} alt="Pgfour" />
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='pgimg'>
                      <img src={PGfive} alt="Pgfive" />
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='pgimg'>
                      <img src={PGsix} alt="Pgsix" />
                  </div>
                </div>
               
                
                
              </div>
              </div>
             
            </div>

          </section>
          {/* <section className='photo-col'>
            <div className='photos container'>
              <h2 className='sec-headone mx-3 my-5'>COACHES PHOTOS</h2>
              <div className='container'>
               <div className='row py-3'>
                <div className='col-md-4'>
                  <div className='pgimg'>
                      <img src={Coacheone} alt="Coacheone" />
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='pgimg'>
                      <img src={Coachetwo} alt="Coachetwo" />
                  </div>
                </div>    
               </div>
              </div>
             
            </div>
            
          </section>
          <section className='photo-col'>
            <div className='photos container'>
              <h2 className='sec-headone mx-3 my-5'>PlAYERS PHOTOS</h2>
              <div className='container'>
              <div className='row py-3'>
                <div className='col-md-4'>
                  <div className='pgimg'>
                      <img src={Playerone} alt="Playereone" />
                  </div>
                </div>
              </div>
              </div>
             
            </div>
            
          </section> */}
        </div>
    </div>
  )
}

export default PhotoGallery