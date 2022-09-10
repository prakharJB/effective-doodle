import React from 'react'
import Table from 'react-bootstrap/Table';

const SignUp = () => {
  return (
    <div id='signup-main'>
        <div className='signup'>
          <section className='sec-signup'>
            {/* <div className='txt-signup py-5'>
                <h1 className='signup-head my-5' >SIGNUP</h1>
            </div> */}
          </section>
          {/* <section className="gc-scthree container">
        <div className="gc-titles px-5 py-5">
          <div className="gc-table">
          <Table striped bordered hover size="sm">
      <thead className="gc-thead">
        <tr>
          <th>#</th>
          <th>Sign-up dates & times</th>
          <th>Sign-up process</th>
          <th>Sign-up location</th>
          <th>Tryout locations</th>
        </tr>
      </thead>
      <tbody className='gc-body'>
        <tr>
          <td>1</td>
          <td>22-08-2022 / 12:00</td>
          <td>Complete</td>
          <td>L.A.</td>
          <td>USA</td>
        </tr>
        <tr>
        <td>2</td>
          <td>25-08-2022 / 4:00</td>
          <td>Complete</td>
          <td>NewYork</td>
          <td>USA</td>
        </tr>
      </tbody>
    </Table>
          </div>
         

        </div>

      </section> */}
      <section className="cont-gc py-5 container">
        <div className="cont-div">
          <h1>We provide the following Sign Up content:</h1>
          <ul>
            <li> <h4>
          Sign-up dates & times

          </h4></li>
          <li> <h4>Sign-up process</h4></li>
          <li> <h4>Sign-up location</h4></li>
          <li><h4>Tryout locations</h4></li>
          </ul>
         
         
         
          
        

        </div>
      </section>
        </div>

    </div>
  )
}

export default SignUp