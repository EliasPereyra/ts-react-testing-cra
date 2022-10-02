import React from "react";

function Person({ name }: { name: string }) {
  return (
    <div>
      <h4>My name is {name}</h4>
    </div>
  );
}

export default Person;
