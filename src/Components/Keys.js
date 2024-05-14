import React, { Component, useState } from "react";
import "./style.scss";

function Keys() {
  const [getValue, setValue] = useState("");
  const [result, setResult] = useState("");
  function calculate(value) {
    if (value === "AC") {
      setValue("");
      setResult("");
    } else if (value === "Del") {
      setValue(getValue.slice(0, -1));
      setResult(" ");
    } else if (value === "=") {
      setResult(eval(getValue));
    } else {
      setValue(getValue + value);
    }
  }
  return (
    <div className="main-container">
      {/* <h1 className="Title">Calculator</h1> */}
      <div className="calculator-Body">
        <div className="notification-bar">
          <div className="time">
            <span>11:30</span>
          </div>
          <div className="Camera"></div>
          <div className="network-bar">
            <span className="network-div-main">
              <div className="network-div1"></div>
              <div className="network-div2"></div>
              <div className="network-div3"></div>
              <div className="network-div4"></div>
            </span>
            <div><img className='Network' id="wifi" src={require('./Images/wifi-png-removebg-preview.png')}/></div>
            <div className='Network' id="battery"><div className="charging">80%</div></div>
            
          </div>
        </div>
        <div className="display">
          <input
            type="text"
            placeholder=""
            value={getValue}
            readOnly
          />
          <input type="text" value={result} readOnly />
        </div>
        <div className="numbers">
          <button className="AC" onClick={() => calculate("AC")}>AC</button>
          <button onClick={() => calculate("+")}>+</button>
          <button onClick={() => calculate("%")}>%</button>
          <button onClick={() => calculate("/")}>/</button>
          <button onClick={() => calculate("7")}>7</button>
          <button onClick={() => calculate("8")}>8</button>
          <button onClick={() => calculate("9")}>9</button>
          <button onClick={() => calculate("x")}>X</button>
          <button onClick={() => calculate("4")}>4</button>
          <button onClick={() => calculate("5")}>5</button>
          <button onClick={() => calculate("6")}>6</button>
          <button onClick={() => calculate("-")}>-</button>
          <button onClick={() => calculate("1")}>1</button>
          <button onClick={() => calculate("2")}>2</button>
          <button onClick={() => calculate("3")}>3</button>
          <button className="equal" onClick={() => calculate("=")}>=</button>
          <button onClick={() => calculate("Del")}>Del</button>
          <button onClick={() => calculate("0")}>0</button>
          <button onClick={() => calculate(".")}>.</button>
        </div>
        <div><hr className="hr"/></div>
      </div>
    </div>
  );
}

export default Keys;
