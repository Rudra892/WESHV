import "./third.css";
import C from "../img/volvo.jpg";
import D from "../img/cup.jpg";
import E from "../img/drink.jpg";
import F from "../img/man.jpg";
import React from "react";
import { LottiePlayer } from "@lottiefiles/lottie-player";

const Third = () => {
  return <div className="t">
      <div className="rec">Recent <br /> Cases</div>
      <div className="rec-1">
          <h1 className="title-1">Volunteers Helping</h1>
          <p className="des-1"> in the Places that needs the most Help.</p>
          <div className="sub-rec-1">
              <img src={C} alt=""  className="picdrop"/>
          </div>
      </div>
      <div className="rec-2">
          <h1 className="title-1">Our Approach at Connecting</h1>
          <p className="des-1">An Interactive Website fit for all platforms.</p>
          <div className="sub-rec-1">
              <img src={D} alt=""  className="picdrop"/>
          </div>
      </div>
      <div className="rec-3">
          <h1 className="title-1">Our Working Model</h1>
          <p className="des-1">This is the idea our whole working model.</p>
          <div className="sub-rec-1">
              <img src={E} alt=""  className="picdrop"/>
          </div>
      </div>
      <div className="rec-4">
          <h1 className="title-1">Our Community Page</h1>
          <p className="des-1">A site that bridges the gap between the donors and to the people in need...</p>
          <div className="sub-rec-1">
              <img src={F} alt=""  className="picdrop"/>
          </div>
      </div>
      <div className="oval-2">
      <lottie-player
        autoplay
        loop
        mode="normal"
        src="https://assets2.lottiefiles.com/packages/lf20_avndu8kw.json"
        >
    </lottie-player>
    </div>
  </div>;
};

export default Third;
