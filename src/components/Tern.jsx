import React, { useState } from "react";

import Style from "../App.module.css";

function Tern() {

  const [likeStatus, setLikeStatus] = useState(false);

  const likeClick = () => {
    setLikeStatus(!likeStatus)

    // if (likeStatus) {
    //     setLikeStatus(false)
    // }
    // else{
    //     setLikeStatus(true)

    // }

  };
  return (
    <div>
        <h1 className={Style.heading}>like functionality</h1>
      <button className={ likeStatus ? Style.red : Style.blue } onClick={() => likeClick()}>{likeStatus ? "🤍" : "❤"}</button>
    </div>
  );
}

export default Tern;
