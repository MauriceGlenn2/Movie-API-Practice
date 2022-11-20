import { useState } from "react";
import "./Counter.css";

function Counter() {
    // every single time you click + button add +, everytime you click - add a - to arrary["+", "-", "+""]
   const [arr, setArr] = useState([])  
   
   function addPlus() {
   setArr(preArr => [...preArr, "+"])
}

   function addMinus() {
    setArr(preArr => [...preArr, "-"])
}

    return (
        <>
          <button onClick={addPlus}>+</button>
          <button onClick={addMinus}>-</button>
          {arr.toString()}
        </>
    )  
}
export default Counter;