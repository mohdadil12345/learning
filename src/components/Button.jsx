import React from "react";

function Button(props) {

  return (
    <div>
      <button onClick={props.functionName}>{props.name}</button>
    </div>
  );
}

export default Button;
