import React from "react";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        <img
          class="selected"
          itemprop="contentUrl"
          src="https://cdn160.picsart.com/upscale-278383411011211.png?r1024x1024"
          onerror="this.style.display='none'"
          alt="#harrypotter #hp #ollivanders #wands #varinhas #olivaras
Harry Potter - Ollivander's - Makers Of Fine Wands Since 382 B.C.
Harry Potter - Olivaras Varinhas - Fabricantes De Boas Varinhas Desde 382 a.C. (PT-BR)"
          height="60px"
          style={{ borderRight: "1px solid white", paddingRight: "20px   " }}
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">
              Disabled
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
