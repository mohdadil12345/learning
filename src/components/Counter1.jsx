import React, { useState } from "react";
import Button from "./Button";

function Counter1() {
  const [num, setNum] = useState(0);

  const increaseClick = (val) => {
    setNum(num + val);
  };

  const [like, setLike] = useState("🤍");

  const likeClick = () => {
    if (like == "🤍") {
      setLike("❤");
    } else {
      setLike("🤍");
    }
  };

  const alertme = ()=>{
    alert('alert working')
  }

  return (
    <div>
      <h1>counter: {num}</h1>
{/* 
      <button onClick={() => increaseClick(-1)}>decrease</button>
      <button onClick={() => likeClick()}>{like}</button> */}

      <Button name="increase" functionName={()=>increaseClick(1)}/>
      <Button name="Decrease" functionName={()=>increaseClick(-1)}/>
      <Button name="alert" functionName={()=>alertme()}/>
    </div>
  );
}

export default Counter1;
