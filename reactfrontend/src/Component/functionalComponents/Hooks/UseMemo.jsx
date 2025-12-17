import { useMemo } from 'react';
import { useState } from "react";           
const UseMemo = () => {
  const [number,Setnumber] = useState(0);
  const [theme,settheme]=useState("true");

  const styling = {
    backgroundColor: theme ? "black" : "white",
    color: theme ? "white" : "black"
  };
  return (
    <div style={styling}>
      <h1>UseMemo</h1>
      <input type="number" value={number} onChange={(e)=>Setnumber(e.target.value)}/>
      <button onClick={()=>settheme(!theme)}>Change Theme</button>
      <Demo a={number}/>
    </div>
  );
    <div>
    </div>
        
  }
  return (
    <div>
      <h1>Count: {count}</h1>
      <h1>Item: {item}</h1>
      <h1>Multiply: {memoizedValue}</h1>
      <button onClick={() => setCount(count + 1)}>Update Count</button>
      <button onClick={() => setItem(item * 10)}>Update Item</button>
    </div>
  );
};
export default UseMemo;