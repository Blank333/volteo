import React from "react";
import "./CrewInfoCard.css";
import wave from "/wave.png";
import secondOfficer from "/secondOfficer.png";

function CrewInfoCard() {
  let watchTiming = "1200-1600";
  return (
    <div className="crewCard infoCard card">
      <div className="infoCardHead">
        <img
          src={wave}
          alt="Crew Logo"
          className="crewLogo"
        />
        <img
          src={secondOfficer}
          alt="Crew Rank"
          className="crewRankImage"
        />
      </div>
      <div className="infoCardDetails">
        <p style={{ fontSize: "16px" }}>Second Officer</p>
        <h1>
          Abdul <br />
          Ghani
        </h1>
        <p>Crew ID 86526</p>
      </div>

      <div className="crewActivity">
        <h3>My Last Activity</h3>
        <p>
          Submitted the Deck Log for <br />
          <span style={{ fontWeight: "700" }}>{watchTiming} Watch</span> at
          08:16 UTC
        </p>
      </div>
    </div>
  );
}

export default CrewInfoCard;
