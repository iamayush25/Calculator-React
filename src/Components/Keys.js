import React, { useState } from "react";
import "./style.scss";

function Keys() {
  const [getValue, setValue] = useState("");
  const [result, setResult] = useState("");
  function calculate(value) {
    if (value === "AC") {
      setValue("");
      setResult('')
    }
    else if (getValue == "Del" ) {
      setValue.slice(0,-1)
      setResult(' ')
    }
    
    else {
      setValue (getValue + value)
    }
  }

  return (
    <>
      <div className="calculator-Body">
        <div className="display">
          <input type="text" placeholder="Enter The number" value={getValue} readOnly />
          <input type="text" value={result} readOnly />
        </div>
        <div className="numbers">
          <button onClick={()=>calculate('AC')} >AC</button>
          <button onClick={()=>calculate('Del')} >Del</button>
          <button onClick={()=>calculate('%')} >%</button>
          <button onClick={()=>calculate('/')} >/</button>
          <button onClick={()=>calculate('7')} >7</button>
          <button onClick={()=>calculate('8')} >8</button>
          <button onClick={()=>calculate('9')} >9</button>
          <button onClick={()=>calculate('x')} >X</button>
          <button onClick={()=>calculate('4')} >4</button>
          <button onClick={()=>calculate('5')} >5</button>
          <button onClick={()=>calculate('6')} >6</button>
          <button onClick={()=>calculate('-')} >-</button>
          <button onClick={()=>calculate('1')} >1</button>
          <button onClick={()=>calculate('2')} >2</button>
          <button onClick={()=>calculate('3')} >3</button>  
          <button onClick={()=>calculate('=')} >=</button>  
          <button onClick={()=>calculate('+')} >+</button>
          <button onClick={()=>calculate('0')} >0</button>
          <button onClick={()=>calculate('.')} >.</button>
          
          
        </div>
      </div>
    </>
  );
}

export default Keys;
