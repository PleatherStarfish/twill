import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import uniqid from "uniqid";
import { useModuleListState } from "../../context/providers/moduleListProvider";

const MakeModButtons = () => {
  const [module, dispatchToModuleList] = useModuleListState();
  console.log(module);

  return (
    <DropdownButton id="add" title="CREATE">
      <Dropdown.Item className="btn btn-primary btn-block" href="">
        <span
          id="sineOsc"
          role="button"
          styling="link"
          tabIndex={0}
          onClick={x =>
            dispatchToModuleList({
              type: "ADD_MODULE",
              module: { type: x.target.id, id: uniqid() }
            })}
          onKeyDown={x =>
            dispatchToModuleList({
              type: "ADD_MODULE",
              module: x.target.id
            })}
        >
          add Sine Osc
        </span>
      </Dropdown.Item>
      <Dropdown.Item className="btn btn-primary btn-block" href="">
        <span
          id="sineOsc"
          role="button"
          styling="link"
          tabIndex={0}
          onClick={x =>
            dispatchToModuleList({
              type: "REMOVE_MODULE",
              module: { type: x.target.id, id: module[0].id }
            })}
          onKeyDown={x =>
            dispatchToModuleList({
              type: "REMOVE_MODULE",
                module: { type: x.target.id, id: module[0].id }
            })}
        >
          remove Sine Osc
        </span>
      </Dropdown.Item>
    </DropdownButton>
  );
};

export default MakeModButtons;
