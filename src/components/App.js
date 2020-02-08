import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import { StateProvider } from "../context/providers/StateProvider";
import reducer from "../context/reducers/stateReducer";
import initialState from "../context/state/initialState";

const App = () => {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <div>Hello World</div>
    </StateProvider>
  );
};

export default App;
