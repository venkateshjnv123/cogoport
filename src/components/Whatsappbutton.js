import React, { Component } from "react";
import whatsappicon from "../Logos/whatsapp.svg";
import "./Whatsappbtn.css";
export default function Whatsappbtn() {
  return (
    <div className="whatsappbtn">
      <img src={whatsappicon} style={{ height: "35px", width: "35px" }} />
      <p className="whatsapppara">Whatsapp Us</p>
    </div>
  );
}
