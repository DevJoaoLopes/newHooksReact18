import "./styles.css";
import { useEffect, useState, useTransition } from "react";
import CircularProgress from "@mui/material/CircularProgress";

export default function App() {
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(100000);
  const [isPending, startTransition] = useTransition();

  const InterfaceSlow = ({ value }) => (
    <>
      {Array(value)
        .fill(1)
        .map((_, index) => (
          <span key={index}> {value - index} </span>
        ))}
    </>
  );

  const handleClick = () => {
    setValue(value + 1);
    startTransition(() => setValue2(value2 + 1));
  };

  return (
    <div className="App">
      <h1>New react hooks in react 18</h1>

      <h2>useTransition</h2>
      <h3>hook return isPending e startTransition for UI transitions</h3>
      <button onClick={handleClick}>{value}</button>

      <div>
        {isPending ? <CircularProgress /> : <InterfaceSlow value={value2} />}
      </div>
    </div>
  );
}
