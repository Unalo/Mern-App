import React from "react";
const Jokes = (props) => {
    return (
      <div>
        <p style={{display: !props.question && "none"}}>question: {props.question}</p>
        <p style={{color: !props.question && "#888888"}}>Answer: {props.answer}</p>
        <hr/>
      </div>
    )
}

export default Jokes;