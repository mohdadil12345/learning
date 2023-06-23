import React from "react";

function Practise1(props) {
  return (
    <div className="cont">
      <h1 className="rrr">welcome to learn React</h1>

      {props.data.map((element, i) => (
        <div className="product">
          <h3>
            {element.name} {i}
          </h3>
          <h3>{element.age} </h3>
          <button>buy now</button>
          <p>Not completed</p>
        </div>
      ))}
    </div>
  );
}

export default Practise1;
