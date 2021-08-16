import React from "react";
import ArrownDown from "./ArrowDown";

const HeadBlock = ({ scroll }) => {
  return (
    <div className="head_block">
      <div className="titles">
        <h1>Claire Hart de Keating</h1>
        <h2>Portfolio</h2>
      </div>
      <ArrownDown scroll={scroll} />
      {/* <div className="arrow" onClick={scroll}></div> */}
    </div>
  );
};

export default HeadBlock;
