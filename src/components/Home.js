import React from "react";
import "../index.css";
import Video from "../videos/F1.mp4";
import Ogg from "../videos/F1.ogg";
export function Home() {
  return (
    <div>
      <div>
        <video className="videoF1" autoPlay muted loop>
          <source src={Video} type="video/mp4"></source>
          <source src={Ogg} type="video/ogg"></source>
        </video>
      </div>
    </div>
  );
}
