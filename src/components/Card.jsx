import React from "react";
import kota from "../pictures/kota.png";
import odyssey from "../pictures/odyssey.svg";
import cardimg from "../pictures/cardimg.svg";

function Card() {
  return (
    <>
      <div className="card-1">
        <div className="cont-1">
          <div>
            <img
              src={kota}
              width="65"
              height="65"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            &nbsp;&nbsp;
            <img
              src={odyssey}
              width="70"
              height="70"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </div>

          <h1>Odyssey</h1>
          <h3>The Official Literary Club</h3>
          <h5>Indian Institute of Information Technology Kota</h5>
          <btns>
            <button className="btn-1">About Us</button>
            <button className="btn-2">Our Team</button>
          </btns>
        </div>
        <div className="cont-2">
          <img
            src={cardimg}
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </div>
      </div>
    </>
  );
}

export default Card;
