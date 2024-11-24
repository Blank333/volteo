import React from "react";
import "./SidebarButton.css";

function SidebarButton({ name, icon }) {
  return (
    <button className="button">
      <img
        src={icon}
        alt="Button Icon"
        className="icon"
      />
      {name}
    </button>
  );
}

export default SidebarButton;
