import React from "react";
import "./StreamCard.css";
import paperclip from "/paperclip.svg";
import eye from "/eye.svg";

function StreamCard({ crewName, content, time }) {
  return (
    <div className="streamCard">
      <p className="streamCardContent">
        <strong>{crewName}</strong> {content}
      </p>

      <p className="streamCardTime">
        <strong>{time}</strong>
      </p>
    </div>
  );
}

export default StreamCard;
