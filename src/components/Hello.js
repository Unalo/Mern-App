import React from "react"; 

const Hello = () =>  {
  const date = new Date()
  let time = date.getHours()
  var timeOfTheDay = "";
  if (time < 12) {
    timeOfTheDay = "Morning"
  } else if (time >= 12 && time < 17) {
    timeOfTheDay = "Afternoom"
  } else {
    timeOfTheDay = "night"
  }
  return (
    <h1> Good {`${timeOfTheDay}!`} Bhuti Unalo</h1>
  )
}
export default Hello;