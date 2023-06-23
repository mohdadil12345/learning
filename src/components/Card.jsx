import React from 'react'

function Card(props){

    const cardClick = (obj)=>{
        alert(`hello ${obj.name} your age is ${obj.age}`)
    }

    return (
        <div>
            <h1>Card component</h1>
            <h2>{props.obj.name} </h2>
            <p>{props.obj.age}</p>
            <h3>{props.email}</h3>
            <button onClick={()=>cardClick(props.obj)}>Buy now</button>
        </div>
    )
}

export default Card