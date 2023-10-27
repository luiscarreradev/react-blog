import React from "react";
import "./topbar.css";

const TopBar = () => {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-linkedin"></i>
        <i className="topIcon fa-brands fa-youtube"></i>
        <i className="topIcon fa-brands fa-square-x-twitter"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">WRITE</li>
          <li className="topListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
        <img className="topImg" src="https://yt3.ggpht.com/5ej18JIpqPQ4I-5XjEI_vUNR1moaSfvQJmM5NXGdFKoLi5JmZl2l4eezoUCzjAwVAwS38bsatw=s88-c-k-c0x00ffffff-no-rj" alt="propile-picture" />
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default TopBar;
