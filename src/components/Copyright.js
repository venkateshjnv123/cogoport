import React from "react";
import "./copy.css";

function Count1() {
  return (
    <div className="copyMobile">
      <div className="copyMobContainer">
        <div className="copyMob1">
          <div>
            <img
              src="https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fglobe.png&w=32&q=75"
              alt="Lang"
              width="20"
              height="20"
              style={{ marginRight: "5px" }}
            />
            <span className="copyLang">English (IN)</span>
          </div>
        </div>
        <div
          style={{ fontSize: "12px", textAlign: "start", paddingTop: "10px" }}
        >
          <span>© 2023 Cogo Universe PTE. All rights reserved.</span>
        </div>
      </div>
    </div>
  );
}

export default Count1;