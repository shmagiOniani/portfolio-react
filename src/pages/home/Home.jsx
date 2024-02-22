import React from "react";
import "./home.scss"

function Home() {
  return (
    <div id="home" className="active">
      <div className="home-text">
        <h1 className="left-fade">SHMAGI</h1>
        <h1 className="left-fade">ONIANI</h1>
        <div className="underlines left-fade"></div>
        <p className="left-fade">web-developer /</p>
        <p className="left-fade">markup designer.</p>
      </div>
    </div>
  );
}

export default Home;
