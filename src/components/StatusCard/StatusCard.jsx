import React from "react";
import cargoShip from "/cargo-ship.svg";
import "./StatusCard.css";

function StatusCard() {
  return (
    <div className="infoCard card">
      <div className="infoCardHead">
        <img
          src={cargoShip}
          alt="Status Logo"
          className="statusImage"
        />
        <h2>SGSIN - NOOSL</h2>
      </div>
      <div className="infoCardDetails">
        <p style={{ fontSize: "16px", fontWeight: 500 }}>Statement of Facts</p>

        <p>Current Status</p>
        <p style={{ fontSize: "18px", fontWeight: 700 }}>Cargo First Lift</p>
      </div>

      <div className="statusActivity">
        <div>
          <p>Next Port Call</p>
          <p>INVTZ1</p>
        </div>
        <div>
          <p>ETA</p>
          <p>Nov 27, 1450 UTC</p>
        </div>
      </div>
    </div>
  );
}

export default StatusCard;
