import React, { useState } from "react";
import "../styles/Vowels.css";
import audio from "../audios/b.wav";

const Vowels = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = () => {
    const audioElement = document.getElementById("audio");
    if (audioElement) {
      audioElement.play();
      setIsPlaying(true);
    }
  };

  return (
    <div>
      <center>
        <h1>Vowels</h1>
        <div
          className={`container ${isPlaying ? "playing" : ""}`}
          onClick={playAudio}
        >
          <div className="t t1">&#x0C05;</div>
          <div className="t t2">&#x0C06;</div>
          <div className="t t3">&#x0C07;</div>
          <div className="t t4">&#x0C08;</div>
          <div className="t t5">&#x0C09;</div>
          <div className="t t6">&#x0C0A;</div>

          <div className="t t8">&#x0C0C;</div>
          <div className="t t9">&#x0C0E;</div>
          <div className="t t10">&#x0C0F;</div>
          <div className="t t11">&#x0C10;</div>
          <div className="t t12">&#x0C12;</div>
          <div className="t t13">&#x0C13;</div>
          <div className="t t14">&#x0C14;</div>
          <div className="t t15">&#x0C05;&#x0C02;</div>
          <div className="t t16">&#x0C05;&#x0C03;</div>
          <audio id="audio" src={audio}></audio>
        </div>
      </center>
    </div>
  );
};

export default Vowels;
