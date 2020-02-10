import React from "react";

const SineOsc = (props) => {
    const {type} = props;

    return (
      <li>
        <div className={type}>
          {type}
        </div>
      </li>
    );
};

export default SineOsc;