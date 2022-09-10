import React from 'react'
import teamlogoone from '../../images/tmlogoone.png'
import teamlogotwo from '../../images/tmlogotwo.png'

const GameInformation = () => {
  return (
    <div id='gameinfo'>
      <div className='gameinformation '>
        <section className='sec-gameday'>
            {/* <div className='txt-gameday py-5'>
              <h1 className='gameday-head my-5'>
                GAMEDAY <br />
                INFORMATION
              </h1>

            </div> */}
        </section>
        <section className='sec-gdinfo py-5'>
          <div className='info-match container'>
            <div className='next-match'>
              <div className='match-col'>
                <div className='teamimg'>
                    <img src={teamlogoone} alt="teamlogoone" />
                </div>
                <div className='team-title'>
                    <h2>Roethlon</h2>

                    <h3>South America</h3>
                </div>

              </div>
              <div className='cent-col'>
                <div className='vs-tit'>
                  <div className='cent-head'>
                    <h2>VS</h2> <br />
                    <h5>20:00, 25 May 2022</h5>
                    <h3>Deer Valley High School</h3>
                  </div>
                </div>
              </div>
              <div className='match-col'>
                <div className='teamimg'>
                    <img src={teamlogotwo} alt="teamlogotwo" />
                </div>
                <div className='team-title'>
                    <h2>Roethlon</h2>

                    <h3>South America</h3>
                </div>

              </div>
            </div>

          </div>

        </section>
        <section className='sec-ticket container pt-5'>
            <div className='ticket-head'>
               <h1>TICKETS</h1>
            </div>
            <div className='ticket-row'>
              <div className='row'>
                  <div className='col-md-6 py-5'>
                    <div className='inside-row '>
                      <div className='row px-2 py-2'>
                            <div className="col-md-6">
                              <div className='ticket-price'>
                                  <h1>$54</h1>
                                  <span>GENERAL</span>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className='ticket-opt'>
                                <div className='opt-list py-2'>
                                  <ul>
                                    <li className='list py-2'>Regular Seating</li>
                                    <li className='list py-2'>2 Snacks & Drinks</li>
                                    <li className='list py-2'>Photo With Player</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                      </div>


                    </div>

                  </div>
                  <div className='col-md-6 py-5'>
                    <div className='inside-row '>
                      <div className='row px-2 py-2'>
                            <div className="col-md-6">
                              <div className='ticket-price'>
                                  <h1>$70</h1>
                                  <span>SPECIAL</span>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className='ticket-opt'>
                                <div className='opt-list py-2'>
                                  <ul>
                                    <li className='list py-2'>Regular Seating</li>
                                    <li className='list py-2'>2 Snacks & Drinks</li>
                                    <li className='list py-2'>Photo With Player</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                      </div>


                    </div>

                  </div>
              </div>
              <div className='row'>
                  <div className='col-md-6 py-5'>
                    <div className='inside-row '>
                      <div className='row px-2 py-2'>
                            <div className="col-md-6">
                              <div className='ticket-price'>
                                  <h1>$90</h1>
                                  <span>VIP</span>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className='ticket-opt'>
                                <div className='opt-list py-2'>
                                  <ul>
                                    <li className='list py-2'>Regular Seating</li>
                                    <li className='list py-2'>2 Snacks & Drinks</li>
                                    <li className='list py-2'>Photo With Player</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                      </div>


                    </div>

                  </div>
                  <div className='col-md-6 py-5'>
                    <div className='inside-row '>
                      <div className='row px-2 py-2'>
                            <div className="col-md-6">
                              <div className='ticket-price'>
                                  <h1>$100</h1>
                                  <span>VIP</span>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className='ticket-opt'>
                                <div className='opt-list py-2'>
                                  <ul>
                                    <li className='list py-2'>Regular Seating</li>
                                    <li className='list py-2'>2 Snacks & Drinks</li>
                                    <li className='list py-2'>Photo With Player</li>
                                  </ul>
                                </div>
                              </div>
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

export default GameInformation