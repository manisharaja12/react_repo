import { useState } from "react";

const Events = () => {
  const [clickText, setClickText] = useState("Click the button");
  const [inputValue, setInputValue] = useState("");
  const [hoverText, setHoverText] = useState("Hover over me");
  const [doubleText, setDoubleText] = useState("Double click me");
  const [keyText, setKeyText] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h3>Click Event</h3>
      <p>{clickText}</p>
      <button onClick={() => setClickText("Button Clicked!")}>Click</button>
    

      <h3>Input Change Event</h3>
      <input
        type="text"
        placeholder="Type something"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>You typed: {inputValue}</p>


      <h3>Mouse Hover Event</h3>
      <p
        onMouseEnter={() => setHoverText("Mouse Entered")}
        onMouseLeave={() => setHoverText("Mouse Left")}
      >
        {hoverText}
      </p>
     

      <h3>Double Click Event</h3>
      <p onDoubleClick={() => setDoubleText("You Double Clicked!")}>
        {doubleText}
      </p>
     

      <h3>Key Press Event</h3>
      <input
        type="text"
        placeholder="Press any key"
        onKeyDown={(e) => setKeyText(`You pressed: ${e.key}`)}
      />
      <p>{keyText}</p>
    </div>
  );
};

export default Events;