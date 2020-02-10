import React from "react";

const SquareOsc = props => {
    const { type } = props;

    return (
      <li>
        <div className={{ type }}>{type}</div>
      </li>
    );
};

export default SquareOsc;
