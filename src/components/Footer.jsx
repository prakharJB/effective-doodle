import React from "react";

const Footer = () => {
  return (
    <div id="footer">
      <div className="container py-5">
        <div className="foot-para">
          <div className="rows">
            <div className="foot-head">
              <div className="text-white foot-right">
                <span> Email</span> : ulamin@highschoolfootball.co
              </div>
            </div>
            {/* <div className="col-md-6">
              <div className="foot-social">
                <i class="fa fa-facebook-official" aria-hidden="true"></i>
                <i class="fa fa-twitter" aria-hidden="true"></i>
                <i class="fa fa-instagram" aria-hidden="true"></i>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="copyright py-2">
        <span>Copyright © High School Football Network.</span>
      </div>
    </div>
  );
};

export default Footer;
