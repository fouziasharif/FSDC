import React, { useState, useEffect } from "react";

export default function CounterUseeffect() {
  const [count, setCount] = useState(0);

  
  useEffect(() => {
    console.log("Component mounted");


    return () => {
      console.log("Component unmounted");
    };
  }, []); 

  
  useEffect(() => {
    console.log(`Count changed to: ${count}`);
  }, [count]); 

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
