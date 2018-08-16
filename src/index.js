import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
/****************************************/
function CreditCard() {
  return (
    <div className="MainCard">
      <div className="title-crdt-crd">
        <h1>Credit Card</h1>
      </div>
      <div className="chips">
        <img
          src="https://www.thebeneficial.com/portals/beneficialbankwebsite/images/chip.png"
          className="chips-img"
        />
      </div>
      <div className="numbervisacard">
        <span>7253 3256 7895 L245</span>
      </div>
      <div className="dateofvalidate">
        <div className="thru">
          VALID <br /> THRU
        </div>
        <div className="date">
          Month / year <br /> 11/50
        </div>
      </div>
      <div className="mainvisacard" />
      <div className="textvisacard">
        <p>
          5422
          <br />
          CARDHOLDER
        </p>
      </div>
      <div className="visacard">
        <img
          src="https://i.ebayimg.com/images/g/oLoAAOxyzHxRKY87/s-l300.jpg"
          className="mastercard"
        />
      </div>
    </div>
  );
}

ReactDOM.render(<CreditCard />, document.body);
