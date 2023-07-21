import React, { Component } from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import "./Ready.css";
export default function Ready() {
  return (
    <div className="readymain">
      <div className="readysub">
        <div className="headingreadydiv">
          <h3 className="headingready">
            Ready to take your Supply Chain to the Next Level?
          </h3>
        </div>
        <a target="_blank" className="readylink">
          <button className="readybutton">
            Get Started <ArrowRightIcon sx={{ width: "1em", height: "1em" }} />
          </button>
        </a>
      </div>
    </div>
  );
}
