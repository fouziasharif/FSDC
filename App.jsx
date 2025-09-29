import React from "react";
import CompFun from "./CompFun";

export default function App() {
  
  const people = [
    { name: "John", secondName: "Doe", age: 30 },
    { name: "Jane", secondName: "Smith", age: 25 },
    { name: "Alex", secondName: "Johnson", age: 28 },
    

  ];

  return (
    <div>
      <h2>Rendering FunctionalComponent as an Array</h2>
      {people.map((person, index) => (
        <CompFun
          key={index}
          name={person.name}
          secondName={person.secondName}
          age={person.age}
        />
      ))}
    </div>
  );
}

