import React from "react";
// import logoone from "../../images/tmlogoone.png";
// import logotwo from "../../images/tmlogotwo.png";
// import logothree from "../../images/tmlogothree.png";
// import Table from "react-bootstrap/Table";

const GameContent = () => {
  return (
    <div className="gamecontent-main">
      <section className="game-bg scone">
        {/* <div className="bg-content py-5">
          <h1>GAME</h1>
          <h3>CONTENT</h3>
        </div> */}
      </section>
      <section className="cont-gc py-5 container">
        <div className="cont-div">
          <h1>We provide the following game content:</h1>
          <ul>

          <li>
          <h4>Game Scores</h4></li>
          <li>
          <h4>Team Schedules</h4>
          </li>
          <li>
          <h4>Box Scores</h4>
          </li>
          <li>
          <h4>League Standings</h4>
          </li>
          </ul>

        </div>
      </section>


      {/* <section className="roster-tab-sec container py-5">
          <div className="player-tab">
            <div>
              <table className="table py-5">
                <tbody>
                <tr>
                  <th>S.NO</th>
                  <th>TEAM SCHEDULES</th>
                  <th>BOX SCORES</th>
                  <th>LEAGUE STANDINGS</th>
                </tr>
                <tr>
                  <td><h3>1</h3></td>
                  <td>MONDAY</td>
                  <td>25/32</td>
                  <td>FIRST</td>
                </tr>
                <tr>
                <td><h3>2</h3></td>
                  <td>FRIDAY</td>
                  <td>19/11</td>
                  <td>SECOND</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section> */}
      {/* <section className="gc-sctwo py-5">
        <div className="gc-row">
          <div className="row">
            <div className="col-md-6">
              <div className="col-wrap-right px-4 py-5">
                <section className="score-one">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="team-scoreone">
                        <div className="row">
                          <div className="tmscore-flex">
                            <div className="team-logo">
                              <img src={logoone} alt="logoone" />
                            </div>
                            <div className="gcteam-score">
                              <h3>32</h3>
                              <p>South Carolina</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="center-txt">
                        <div className="row-center py-3">
                          <h5>VS</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="team-scoretwo">
                        <div className="row">
                          <div className="tmscore-flex">
                            <div className="gcteam-score">
                              <h3>30</h3>
                              <p>California</p>
                            </div>
                            <div className="team-logo">
                              <img src={logotwo} alt="logotwo" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <div className="score-divider my-3">
                  <span className="divider"></span>
                </div>
                <section className="score-one py-3">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="team-scoreone">
                        <div className="row">
                          <div className="tmscore-flex">
                            <div className="team-logo">
                              <img src={logothree} alt="logothree" />
                            </div>
                            <div className="gcteam-score">
                              <h3>19</h3>
                              <p>South Carolina</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="center-txt">
                        <div className="row-center py-3">
                          <h5>VS</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="team-scoretwo">
                        <div className="row">
                          <div className="tmscore-flex">
                            <div className="gcteam-score">
                              <h3>23</h3>
                              <p>California</p>
                            </div>
                            <div className="team-logo">
                              <img src={logotwo} alt="logotwo" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <div className="score-divider my-3">
                  <span className="divider"></span>
                </div>
                <section className="score-one py-3">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="team-scoreone">
                        <div className="row">
                          <div className="tmscore-flex">
                            <div className="team-logo">
                              <img src={logoone} alt="logoone" />
                            </div>
                            <div className="gcteam-score">
                              <h3>21</h3>
                              <p>South Carolina</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="center-txt">
                        <div className="row-center py-3">
                          <h5>VS</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="team-scoretwo">
                        <div className="row">
                          <div className="tmscore-flex">
                            <div className="gcteam-score">
                              <h3>16</h3>
                              <p>California</p>
                            </div>
                            <div className="team-logo">
                              <img src={logothree} alt="logothree" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div className="col-md-6">
              <div className="leadboard-score">
                <div className="leaderboard py-4">
                  <div className="lead-head px-3">
                    <span>LEADERBOARD</span>

                    <h6>2021/2022</h6>
                    <div className="lead-divider"></div>
                  </div>

                  <section className="point-table">
                    <div className="team-ranking px-3 py-4">
                      <div className="row">
                        <div className="rank-row py-2">
                          <div className="col-md-6 py-2">
                            <div className="rank-teamimg">
                              <div className="row">
                                <div className="rank-flex">
                                  <img src={logoone} alt="logoone" />
                                  <h4>South Carolina</h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-2">
                            <div className="lead-wins">
                              <h5>23</h5>
                              <span>WINS</span>
                            </div>
                          </div>
                          <div className="col-md-2">
                            <div className="leads-loss">
                              <h5>10</h5>
                              <span>LOSS</span>
                            </div>
                          </div>
                          <div className="col-md-2">
                            <div className="leads-points">
                              <h5>134</h5>
                              <span>PTS</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="team-ranking  px-3 py-4">
                      <div className="row">
                        <div className="rank-row py-2">
                          <div className="col-md-6 py-2">
                            <div className="rank-teamimg">
                              <div className="row">
                                <div className="rank-flex">
                                  <img src={logotwo} alt="logotwo" />
                                  <h4>South Carolina</h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-2">
                            <div className="lead-wins">
                              <h5>19</h5>
                              <span>WINS</span>
                            </div>
                          </div>
                          <div className="col-md-2">
                            <div className="leads-loss">
                              <h5>9</h5>
                              <span>LOSS</span>
                            </div>
                          </div>
                          <div className="col-md-2">
                            <div className="leads-points">
                              <h5>110</h5>
                              <span>PTS</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="team-ranking  px-3 py-4">
                      <div className="row">
                        <div className="rank-row py-2">
                          <div className="col-md-6 py-2">
                            <div className="rank-teamimg">
                              <div className="row">
                                <div className="rank-flex">
                                  <img src={logothree} alt="logothree" />
                                  <h4>South Carolina</h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-2">
                            <div className="lead-wins">
                              <h5>15</h5>
                              <span>WINS</span>
                            </div>
                          </div>
                          <div className="col-md-2">
                            <div className="leads-loss">
                              <h5>6</h5>
                              <span>LOSS</span>
                            </div>
                          </div>
                          <div className="col-md-2">
                            <div className="leads-points">
                              <h5>90</h5>
                              <span>PTS</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section className="gc-scthree container">
        <div className="gc-titles px-5 py-5">
          <div className="gc-table">
            <Table striped bordered hover size="sm">
              <thead className="gc-thead">
                <tr>
                  <th>#</th>
                  <th>Game Score</th>
                  <th>Team Schedules</th>
                  <th>BoxScores</th>
                  <th>League Standings</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>32-15</td>
                  <td>12:00 / Friday</td>
                  <td>35</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>22-19</td>
                  <td>1:00 / Monday</td>
                  <td>21</td>
                  <td>2</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default GameContent;
