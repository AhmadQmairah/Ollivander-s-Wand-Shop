import React from "react";

function WandItem(props) {
  console.log(props);
  return (
    <div className="col-lg-4 mt-5">
      <div className="card" style={{ boxShadow: "15px 5px 5px black" }}>
        <img
          src={props.Wand.imageUrl}
          className="card-img-top"
          alt="..."
          style={{ width: "300px", paddingLeft: "80px" }}
        />
        <div className="card-body text-center">
          <h5 className="card-title">{props.Wand.core}</h5>
          <p className="card-text">
            {props.Wand.wood} {props.Wand.length}
          </p>
          <a href="#" className="btn btn-primary btn-block">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default WandItem;
