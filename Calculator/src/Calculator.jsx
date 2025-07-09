import React, { useState } from "react";
import "./index.css";

function Calculator() {
  const [display, setDisplay] = useState("");

  function clearDisplay() {
    setDisplay("");

  }

  function appendToDisplay(value) {
    setDisplay((prev) => prev + value);
  }

  function calculate() {
    try {
        const result = eval(display);
        setDisplay(result.toString());
    } catch (error) {
        console.error("Error in calculation:", error);
        setDisplay("Error");
    }
    }
  return (
    <>
      <div className="calculator-container">
        <input id="display" readOnly value={display}></input>
        <div className="calculator-btns">
          <button onClick={clearDisplay}>AC</button>
          <button onClick={() => appendToDisplay("+/-")}>+/-</button>
          <button onClick={() => appendToDisplay("%")}>%</button>
          <button onClick={() => appendToDisplay("/")} className="ariBtn">
            /
          </button>
          <button onClick={() => appendToDisplay("7")}>7</button>
          <button onClick={() => appendToDisplay("8")}>8</button>
          <button onClick={() => appendToDisplay("9")}>9</button>
          <button onClick={() => appendToDisplay("*")} className="ariBtn">
            *
          </button>
          <button onClick={() => appendToDisplay("4")}>4</button>
          <button onClick={() => appendToDisplay("5")}>5</button>
          <button onClick={() => appendToDisplay("6")}>6</button>
          <button onClick={() => appendToDisplay("-")} className="ariBtn">
            -
          </button>
          <button onClick={() => appendToDisplay("1")}>1</button>
          <button onClick={() => appendToDisplay("2")}>2</button>
          <button onClick={() => appendToDisplay("3")}>3</button>
          <button onClick={() => appendToDisplay("+")} className="ariBtn">
            +
          </button>
          <button onClick={() => appendToDisplay("0")}>0</button>
          <button onClick={() => appendToDisplay(".")}>.</button>
          <button onClick={() => calculate()} className="ariBtn">
            =
          </button>
        </div>
      </div>
    </>
  );
}

export default Calculator;
