import { useState } from "react";
import axios from "axios";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [operand1, setOperand1] = useState("");
  const [operand2, setOperand2] = useState("");
  const [result, setResult] = useState("");

  const handleAddition = async () => {
    // Backend accepts a post request using (application/x-www-form-urlencoded)
    const response = await axios.post(
      "http://localhost:8080/api/v1/calculator/add",
      {
        operand1: operand1,
        operand2: operand2,
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    setResult(response.data.result);
  };

  const handleSubtraction = async () => {
    // Backend accepts a post request using (application/x-www-form-urlencoded)
    const response = await axios.post(
      "http://localhost:8080/api/v1/calculator/subtract",
      {
        operand1: operand1,
        operand2: operand2,
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    setResult(response.data.result);
  };

  return (
    <>
      <div>
        <h1>Welcome to our Simple Calculator!</h1>
        <p>
          <h2>To get started: </h2>
          <li>
            Enter your numbers in the two input fields provided on this page.
          </li>
          <li>
            To add the numbers, click the &quot;Add&quot; button. The sum of the
            two numbers will be displayed below.{" "}
          </li>
          <li>
            To subtract the numbers, click the &quot;Subtract&quot; button. The
            difference between the two numbers will be shown on the screen.{" "}
          </li>
          <li>
            Don&apos;t worry if you leave an input field blank; we&apos;ll just
            consider it as 0 and perform the calculation.{" "}
          </li>
        </p>
        <h3>
          Simply input your numbers and click the button for the operation you
          need – our calculator will do the rest!
        </h3>
      </div>
      <h1>Result: {result}</h1>
      <div className="card">
        <input
          type="number"
          value={operand1}
          onChange={(e) => setOperand1(e.target.value)}
          placeholder="Enter the first operand"
          style={{ margin: "0 10px" }}
        />
        <input
          type="number"
          value={operand2}
          onChange={(e) => setOperand2(e.target.value)}
          placeholder="Enter the second operand"
          style={{ margin: "0 10px" }}
        />
        <p>
          <button
            style={{ margin: "0 5px", width: "100px" }}
            onClick={handleAddition}
          >
            Add
          </button>
          <button
            style={{ margin: "0 5px", width: "100px" }}
            onClick={handleSubtraction}
          >
            Subtract
          </button>
        </p>
      </div>
      <p className="read-the-docs">
        Powered using Vite + React for frontend and Node + Express for the
        backend.
      </p>
    </>
  );
}

export default App;
