import React from "react";
import "./NoticeCard.css";
import paperclip from "/paperclip.svg";
import eye from "/eye.svg";

function NoticeCard({ content, views }) {
  return (
    <div className="noticeCard">
      <div className="noticeCardHeader">
        <p>Important Notice</p>
        <img
          src={paperclip}
          alt="Important Notice"
        />
      </div>

      <p className="noticeCardContent">{content}</p>

      <div className="noticeCardFooter">
        <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
          <img
            src={eye}
            alt="Views"
          />
          <span>{views}</span>
        </div>
        <button className="redButton">READ</button>
      </div>
    </div>
  );
}

export default NoticeCard;
