import React from "react";
import logo from "/logo.svg";
import logout from "/logout.svg";

import "./ContentHeader.css";

function ContentHeader({ totalCrew, activeCrew }) {
  return (
    <div className="contentHeader card">
      <div className="info">
        <img
          src={logo}
          alt="Logo"
        />
        <div className="crewInfo">
          <h3>Dev Vessel</h3>
          <p>
            {totalCrew} Crewmates ·{" "}
            <span>{activeCrew.toString().padStart(2, "0")} Active</span>
          </p>
        </div>
      </div>
      <div className="actions">
        <button className="timezone ">GMT +09:00</button>
        <button className="logout">
          <img
            src={logout}
            alt="Logout Button"
          />
        </button>
      </div>
    </div>
  );
}

export default ContentHeader;
