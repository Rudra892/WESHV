import "./four.css";
import Z from "../img/agency.mp4";
import React from "react";

const Four = () => {
  return <div className="f">
      <h2 className="about-agency">
      We connect with our community on all levels. We assess and <br />
      challenge the status quo, think differently and innovatively. <br />
       With a focus on collaboration and impact, we find <br />
       transformative solutions. This leads not only to <br />
        impactful ideas - but to real change. <br />
    <br />
        We don’t just facilitate dialogue - we inspire it. <br />
        Only then can we foster a meaningful <br />
        conversation that ultimately achieves the goal. <br />
    <br />
    WESHV
</h2>

      <div className="agency">Drives</div>
      <div className="agen">
      <video loop muted autoPlay className="agency-vid">
        <source
          src={Z}
          type="video/mp4"
        />
       </video>
      </div>
      <div className="texxt-area">
      <a href="#" class="Button-pos">See open positions</a>
      <p className="about-text">
      Open, courageous and rousing. Without all-in or outdated views. Instead with <br />
      freedom and room to grow. With responsibility and inner drive. With diverse <br />
      teams and remarkable personalities. <br />
      <br />
      Our work aims to be special and to spring from the diversity of ideas of different <br />
      minds - regardless of gender, sexual orientation and age.
      </p>
      </div>
  </div>;
};

export default Four;


