import { useCallback, useState } from "react";

const UseCallback = () => {

    const [number, setNumber] = useState(0);
    const [theme, toggleTheme] = useState(false);

    const styling = {
        backgroundColor: theme ? 'black' : 'white',
        color: theme ? 'white' : 'black'
    }

    var numList = useCallback((mul) => {
        return [number+mul*2, number+mul*3, number+mul*4];
    }, [number]);
    
    return (
        <div style={styling}>
            <h3>UseCallback Example</h3>
            <button onClick={() => toggleTheme(!theme)}>Toggle Theme</button><br/><br/>

            <button onMouseOver={() => setNumber(number-1)}>-</button>
            <input type='number' value={number} onChange={(e) => setNumber(parseInt(e.target.value))}/>
            <button onKeyUp={() => setNumber(number+1)}>+</button>
            
            <p>The number typed in the text box is {number}</p> 
            {numList(10).map((num, ind) => {
                return <h6 key={ind}>The multiplied number according to your multiplication is {num}</h6>
            })}
            
        </div>
    );
}

export default UseCallback;