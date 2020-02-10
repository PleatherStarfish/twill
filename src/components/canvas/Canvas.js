import React from "react";
import { useModuleListState } from "../../context/providers/moduleListProvider";
import SineOsc from "./mods/SineOsc";
import SquareOsc from "./mods/SquareOsc";

const modeType = mod => {
    console.log(mod.id);
  switch (mod.type) {
    case "sineOsc":
      return <SineOsc key={mod.id} type={mod.type} />;
    case "squareOsc":
      return <SquareOsc key={mod.id} type={mod.type} />;
    default:
      return "Error in switch statement (Canvas.js)";
  }
};

const Canvas = () => {
  const [module, dispatchToModuleList] = useModuleListState();

  const mods = module.map(item => {
    return modeType(item);
  });

  return (
    <div className="canvas">
      <h1>@twill</h1>
      <ul>{mods}</ul>
    </div>
  );
};

export default Canvas;
