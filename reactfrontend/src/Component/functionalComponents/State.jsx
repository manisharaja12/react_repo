import { useState } from "react";

const State = () => {
  const [stateComponent, updateState] = useState("StateComponents");

  function setState() {
    updateState("Updated State component");
  }

  return (
    <div>
      <p>This is {stateComponent}</p>
      <button onClick={setState}>Update</button>
    </div>
  );
};

export default State;