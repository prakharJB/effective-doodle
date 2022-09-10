import React from 'react'
import Coachetwo from "../../images/coachetwo.png"
// import Coacheone from "../../images/coaches.png"

const Coaches = () => {
  return (
    <div id='Coaches-main'>
      <div className='coaches'>
        <section className='sec-coaches'>
            <div className='txt-coaches py-5'>
              {/* <h1 className="roster-head my-5">COACHES</h1> */}

            </div>
        </section>
        <section className='photo-col'>
            <div className='photos container'>
              <h2 className='sec-headone mx-3 my-5'>COACHES DETAILS</h2>
              <div className='container'>
               <div className='row py-3'>
                <div className='col-md-4'>
                  <div className='pgimg'>
                      <img src={Coachetwo} alt="Coachetwo" />
                      <div>
                        <h3>Defensive Coordinator</h3>
                      </div>
                  </div>
                </div>
               </div>
              </div>
             
            </div>
            
          </section>
      </div>

    </div>
  )
}

export default Coaches