import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        width: 500,
        height: 200,
        backgroundColor: "orange",
        padding: 20,
        borderRadius: 20,
      }}
    >
      <h1>Widget 1</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  );
}

export default App;
