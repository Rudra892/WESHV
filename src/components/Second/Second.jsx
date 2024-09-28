import "./second.css";
import React from "react";
import { LottiePlayer } from "@lottiefiles/lottie-player";

const Second = () => {
  return <div className="s">
      <div className="mani">Manifesto</div>
      <div className="text-way">
          <p className="about">
          We don't just manage food. We identify the need, sort <br />
          through solutions, and find a way. With heart and  <br />
          purpose, we see the people behind the cause, shape<br />
          messages, and turn them into actions and experiences. 
          </p>
          <p className="about-2"> We don't manage food waste. We identify needs, sort <br /> 
          through the possibilities, and find solutions. With heart and <br /> 
          purpose, we see the communities behind the cause, craft <br /> 
          plans, and turn them into impactful actions. <br /> 
          <br /> We don't manage food waste. We identify needs, sort <br /> 
          through the possibilities, and find solutions. With heart and <br /> 
          </p>
      </div>
      <div className="oval">
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

export default Second;
