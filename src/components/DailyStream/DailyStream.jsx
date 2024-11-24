import React from "react";
import "./DailyStream.css";
import refresh from "/refresh.svg";
import NoticeCard from "../NoticeCard/NoticeCard";
import StreamCard from "../StreamCard/StreamCard";

function DailyStream() {
  return (
    <div className="dailyStreamCard">
      <div style={{ marginBottom: "2em" }}>
        <div className="dailyStreamHeader">
          <h1>DailyStream</h1>
          <button>
            <img
              src={refresh}
              alt="Refresh Button"
            />
          </button>
        </div>
        <p style={{ fontWeight: 500 }}>Last updated - 4 minutes ago</p>
      </div>
      <div className="dailyStreamNotifications">
        <NoticeCard
          content={"Captain’s Bridge Order dated Nov 27, 2020"}
          views={1}
        />
        <StreamCard
          crewName={"Second Officer Oliver"}
          content={
            "submitted the Deck Log for 1400-1500 watch hour and completed the Handover Checklist"
          }
          time={"UTC 1105 | LT +06:30"}
        />
        <StreamCard
          crewName={"Third Engineer Edward"}
          content={
            "submitted the Engine Log for 1200-1600 watch hour and completed the Handover Checklist"
          }
          time={"UTC 1055 | LT +06:30"}
        />
      </div>
    </div>
  );
}

export default DailyStream;
