import React from 'react';
import './App.css';
import ContactCard from "./components/ContactCard";
import Jokes from "./components/Jokes"

const App = () => {
  return (
    <div className="todo-list">
      <Jokes 
        question="What's the best thing about Switzerland?" 
        answer="I don't know, but the flag is a big plus!"
      />

      <Jokes
        //  question="Did you hear about the mathematician who's afraid of negative numbers?" 
         answer="He'll stop at nothing to avoid them!"
      />

      <Jokes 
         question="Hear about the new restaurant called Karma?" 
         answer="There’s no menu: You get what you deserve."
      />

      <Jokes
        question="Did you hear about the actor who fell through the floorboards?" 
        answer="He was just going through a stage."
      />
      {/* <ToDoItem 
        humer = {{name:"Unalo",phone:"0746544974", email:"Unalomtshokotsha@Gmail.com" ,laugh:"wena ukhona"}}
        contact ={{ name:"Unalo",phone:"0746544974", email:"Unalomtshokotsha@Gmail.com"}}   
      /> */}
      {/* <ToDoItem
              humer = {{name:"Unalo",phone:"0746544974", email:"Unalomtshokotsha@Gmail.com" ,laugh:"wena ukhona"}}

      contact = {{name:"Makho", phone:"0746544974", email:"Makho@Gmail.com"}}
         
      />
      <ToDoItem
              humer = {{name:"Unalo",phone:"0746544974", email:"Unalomtshokotsha@Gmail.com" ,laugh:"wena ukhona"}}

      contact = {{ name:"Thabang", phone:"0746544974", email:"Thabang@Gmail.com"}}
      />
      <ToDoItem
              humer = {{name:"Unalo",phone:"0746544974", email:"Unalomtshokotsha@Gmail.com" ,laugh:"wena ukhona"}}

      contact = {{name:"Pholisa", phone:"0746544974", email:"Pholisa@Gmail.com"}}
      /> */}
    </div>
  )
}

export default App;
