import React from "react";
import "../styles/Vathulu.css";

function Vathulu({ unicodeValues }) {
  const renderConsonant = (consonant) => {
    return unicodeValues.map((value, index) => (
      <div className="k" key={index}>
        <div className="r1">{value}</div>
        <div className="r1">{`${value}\u0C3E`}</div>
        <div className="r1">{`${value}\u0C3F`}</div>
        <div className="r1">{`${value}\u0C40`}</div>
        <div className="r1">{`${value}\u0C41`}</div>
        <div className="r1">{`${value}\u0C42`}</div>
        <div className="r1">{`${value}\u0C43`}</div>
        <div className="r1">{`${value}\u0C44`}</div>
        <div className="r1">{`${value}\u0C62`}</div>
        <div className="r1">{`${value}\u0C63`}</div>
        <div className="r1">{`${value}\u0C46`}</div>
        <div className="r1">{`${value}\u0C47`}</div>
        <div className="r1">{`${value}\u0C48`}</div>
        <div className="r1">{`${value}\u0C4A`}</div>
        <div className="r1">{`${value}\u0C4B`}</div>
        <div className="r1">{`${value}\u0C4C`}</div>
        <div className="r1">{`${value}\u0C02`}</div>
        <div className="r1">{`${value}\u0C03`}</div>
      </div>
    ));
  };

  return (
    <div>
      <div className="v1">{renderConsonant()}</div>
    </div>
  );
}

export default Vathulu;
