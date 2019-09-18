import React from "react";
import WandItem from "./WandItem";
function WandsList(props) {
  const MyList = props.Wands.map((wand, index) => {
    return <WandItem Wand={wand} key={index} />;
  });

  return (
    <div class="container ">
      {" "}
      <div class="row">{MyList}</div>
    </div>
  );
}

export default WandsList;
