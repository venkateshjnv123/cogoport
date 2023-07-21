import React from "react";
import { useState } from "react";
import "./footermob.css";
import "./footer1.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Footermob = (props) => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);

  return (
    <div className="footMob">
      <div className="footDrop">
        <button className="footButton" onClick={() => setShow1(!show1)}>
          <h4 className="footleftText">Products</h4>
          <div className="footrightText">
            <ArrowDropDownIcon sx={{ width: "1em", height: "1em" }} />{" "}
          </div>
        </button>
        {show1 && (
          <div className="footHidden footHidden1" style={{ display: "block" }}>
            <div className="foot1Bottom">
              <div className="foot1Text foothidText">
                <h6>Global Trade Platform</h6>
              </div>
              <div className="foot1Text foothidText">
                <h5>Cross-border logistics</h5>
                <h6>Ocean: FCL</h6>
                <h6>Ocean: LCL</h6>
                <h6>International Air</h6>
                <h6>Customs, CFCs, Handling</h6>
              </div>
              <div className="foot1Text foothidText">
                <h5>DOmestic logistics</h5>
                <h6>Ocean: FCL</h6>
                <h6>Ocean: LCL</h6>
              </div>
              <div className="foot1Text foothidText">
                <h5>Cross-border logistics</h5>
                <h6>Ocean: FCL</h6>
                <h6>Ocean: LCL</h6>
                <h6>International Air</h6>
                <h6>Customs, CFCs, Handling</h6>
              </div>
              <div className="foot1Text foothidText">
                <h5>Cross-border logistics</h5>
                <h6>Ocean: FCL</h6>
                <h6>Ocean: LCL</h6>
                <h6>International Air</h6>
                <h6>Customs, CFCs, Handling</h6>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="footDrop">
        <button className="footButton" onClick={() => setShow2(!show2)}>
          <h4 className="footleftText">Products</h4>
          <div className="footrightText">
            <ArrowDropDownIcon sx={{ width: "1em", height: "1em" }} />{" "}
          </div>
        </button>
        {show2 && (
          <div className="footHidden footHidden1" style={{ display: "block" }}>
            <div className="foot1Bottom">
              <div className="foot1Text foothidText">
                <h6>Global Trade Platform</h6>
              </div>
              <div className="foot1Text foothidText">
                <h5>Cross-border logistics</h5>
                <h6>Ocean: FCL</h6>
                <h6>Ocean: LCL</h6>
                <h6>International Air</h6>
                <h6>Customs, CFCs, Handling</h6>
              </div>
              <div className="foot1Text foothidText">
                <h5>DOmestic logistics</h5>
                <h6>Ocean: FCL</h6>
                <h6>Ocean: LCL</h6>
              </div>
              <div className="foot1Text foothidText">
                <h5>Cross-border logistics</h5>
                <h6>Ocean: FCL</h6>
                <h6>Ocean: LCL</h6>
                <h6>International Air</h6>
                <h6>Customs, CFCs, Handling</h6>
              </div>
              <div className="foot1Text foothidText">
                <h5>Cross-border logistics</h5>
                <h6>Ocean: FCL</h6>
                <h6>Ocean: LCL</h6>
                <h6>International Air</h6>
                <h6>Customs, CFCs, Handling</h6>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="footDrop">
        <button className="footButton" onClick={() => setShow3(!show3)}>
          <h4 className="footleftText">Products</h4>
          <div className="footrightText">
            <ArrowDropDownIcon sx={{ width: "1em", height: "1em" }} />{" "}
          </div>
        </button>
        {show3 && (
          <div className="footHidden footHidden1" style={{ display: "block" }}>
            <div className="foot1Bottom">
              <div className="foot1Text foothidText">
                <h6>Global Trade Platform</h6>
              </div>
              <div className="foot1Text foothidText">
                <h5>Cross-border logistics</h5>
                <h6>Ocean: FCL</h6>
                <h6>Ocean: LCL</h6>
                <h6>International Air</h6>
                <h6>Customs, CFCs, Handling</h6>
              </div>
              <div className="foot1Text foothidText">
                <h5>DOmestic logistics</h5>
                <h6>Ocean: FCL</h6>
                <h6>Ocean: LCL</h6>
              </div>
              <div className="foot1Text foothidText">
                <h5>Cross-border logistics</h5>
                <h6>Ocean: FCL</h6>
                <h6>Ocean: LCL</h6>
                <h6>International Air</h6>
                <h6>Customs, CFCs, Handling</h6>
              </div>
              <div className="foot1Text foothidText">
                <h5>Cross-border logistics</h5>
                <h6>Ocean: FCL</h6>
                <h6>Ocean: LCL</h6>
                <h6>International Air</h6>
                <h6>Customs, CFCs, Handling</h6>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="footDrop">
        <button className="footButton" onClick={() => setShow4(!show4)}>
          <h4 className="footleftText">Products</h4>
          <div className="footrightText">
            <ArrowDropDownIcon sx={{ width: "1em", height: "1em" }} />{" "}
          </div>
        </button>
        {show4 && (
          <div className="footHidden footHidden1" style={{ display: "block" }}>
            <div className="foot1Bottom">
              <div className="foot1Text foothidText">
                <h6>Global Trade Platform</h6>
              </div>
              <div className="foot1Text foothidText">
                <h5>Cross-border logistics</h5>
                <h6>Ocean: FCL</h6>
                <h6>Ocean: LCL</h6>
                <h6>International Air</h6>
                <h6>Customs, CFCs, Handling</h6>
              </div>
              <div className="foot1Text foothidText">
                <h5>DOmestic logistics</h5>
                <h6>Ocean: FCL</h6>
                <h6>Ocean: LCL</h6>
              </div>
              <div className="foot1Text foothidText">
                <h5>Cross-border logistics</h5>
                <h6>Ocean: FCL</h6>
                <h6>Ocean: LCL</h6>
                <h6>International Air</h6>
                <h6>Customs, CFCs, Handling</h6>
              </div>
              <div className="foot1Text foothidText">
                <h5>Cross-border logistics</h5>
                <h6>Ocean: FCL</h6>
                <h6>Ocean: LCL</h6>
                <h6>International Air</h6>
                <h6>Customs, CFCs, Handling</h6>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="footDrop">
        <button className="footButton" onClick={() => setShow5(!show5)}>
          <h4 className="footleftText">Products</h4>
          <div className="footrightText">
            <ArrowDropDownIcon sx={{ width: "1em", height: "1em" }} />{" "}
          </div>
        </button>
        {show5 && (
          <div className="footHidden footHidden1" style={{ display: "block" }}>
            <div className="foot1Bottom">
              <div className="foot1Text foothidText">
                <h6>Global Trade Platform</h6>
              </div>
              <div className="foot1Text foothidText">
                <h5>Cross-border logistics</h5>
                <h6>Ocean: FCL</h6>
                <h6>Ocean: LCL</h6>
                <h6>International Air</h6>
                <h6>Customs, CFCs, Handling</h6>
              </div>
              <div className="foot1Text foothidText">
                <h5>DOmestic logistics</h5>
                <h6>Ocean: FCL</h6>
                <h6>Ocean: LCL</h6>
              </div>
              <div className="foot1Text foothidText">
                <h5>Cross-border logistics</h5>
                <h6>Ocean: FCL</h6>
                <h6>Ocean: LCL</h6>
                <h6>International Air</h6>
                <h6>Customs, CFCs, Handling</h6>
              </div>
              <div className="foot1Text foothidText">
                <h5>Cross-border logistics</h5>
                <h6>Ocean: FCL</h6>
                <h6>Ocean: LCL</h6>
                <h6>International Air</h6>
                <h6>Customs, CFCs, Handling</h6>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="footDrop">
        <button className="footButton" onClick={() => setShow6(!show6)}>
          <h4 className="footleftText">Products</h4>
          <div className="footrightText">
            <ArrowDropDownIcon sx={{ width: "1em", height: "1em" }} />{" "}
          </div>
        </button>
        {show6 && (
          <div className="footHidden footHidden1" style={{ display: "block" }}>
            <div className="foot1Bottom">
              <div className="foot1Text foothidText">
                <h6>Global Trade Platform</h6>
              </div>
              <div className="foot1Text foothidText">
                <h5>Cross-border logistics</h5>
                <h6>Ocean: FCL</h6>
                <h6>Ocean: LCL</h6>
                <h6>International Air</h6>
                <h6>Customs, CFCs, Handling</h6>
              </div>
              <div className="foot1Text foothidText">
                <h5>DOmestic logistics</h5>
                <h6>Ocean: FCL</h6>
                <h6>Ocean: LCL</h6>
              </div>
              <div className="foot1Text foothidText">
                <h5>Cross-border logistics</h5>
                <h6>Ocean: FCL</h6>
                <h6>Ocean: LCL</h6>
                <h6>International Air</h6>
                <h6>Customs, CFCs, Handling</h6>
              </div>
              <div className="foot1Text foothidText">
                <h5>Cross-border logistics</h5>
                <h6>Ocean: FCL</h6>
                <h6>Ocean: LCL</h6>
                <h6>International Air</h6>
                <h6>Customs, CFCs, Handling</h6>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Footermob;
