import React, { useState } from "react";

function Counter() {

  const [user1, setUser1] = useState({
    name: "adil",
    age: 52,
    gender: "male",
  });

  const [ageCheck , setCheck] = useState("")
  const nameClick = () => {

    let obj = {...user1}

    obj.name = "Neha"
    obj.age = 16
    setUser1(obj)
  };

  const ageClick = ()=>{
    if (user1.age > 18) {
        setCheck("allowed for passport")
    }
    else{
        
        setCheck("not allowed for passport")
    }
  }

  return (
    <div>
      <h1>{user1.name}</h1>
      <h1>{user1.age}</h1>
      <h1>{user1.gender}</h1>
      <p>{ageCheck}</p>

      <button onClick={() => nameClick()}>click me</button>
      <button onClick={() => ageClick()}>age Check</button>
    </div>
  );
}

export default Counter;
