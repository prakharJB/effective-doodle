import React from "react";
import playerone from "../../images/playerone.png";
import playertwo from "../../images/playertwo.png";
import Table from "react-bootstrap/Table";

const Rosters = () => {
  return (
    <div id="main-roster">
      <div className="roster">
        <section className="sec-roster">
          <div className="txt-roster py-5">
            <h1 className="roster-head my-md-5">ROSTER</h1>
          </div>
        </section>
        <section className="gc-scthree container">
          <div className="gc-titles py-5">
            <div className="gc-table">
              <Table striped bordered hover size="sm">
                <thead className="gc-thead">
                  <tr>
                    <th>#</th>
                    <th>Player Photos</th>
                    <th>Player Positions</th>
                    <th>Player Bios</th>
                  </tr>
                </thead>
                <tbody className="rost-body">
                  <tr>
                    <td>1</td>
                    <td>
                      <img src={playerone} alt="playerone" />
                    </td>
                    <td>CORNERBACK</td>
                    <td>Currently a Senior playing 3rd year on Varsity</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>
                      <img src={playertwo} alt="playertwo" />
                    </td>
                    <td>DEFENSIVE TACKLE</td>
                    <td>
                      From Los Angeles California whose made All-league 2 years
                      in a row
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </section>
        <section className="cont-gc py-5 container">
          <div className="cont-div">
            <h1>We provide the following team rosters content:</h1>
            <ul>
              <li>
                {" "}
                <h4>Player Positions</h4>
              </li>
              <li>
                <h4>Player Positions</h4>
              </li>
              <li>
                {" "}
                <h4>Player Bios</h4>
              </li>
            </ul>
          </div>
        </section>
      
      </div>
    </div>
  );
};

export default Rosters;
