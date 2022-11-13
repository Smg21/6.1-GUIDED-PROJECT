/*
💥💥💥 Rules of STATE 💥💥💥
  - We create a slice of state like this: `const [healthPoints, setHealthPoints] = useState(100)`
  - A component may have as may slices of state as it needs
  - A slice of state may contain a string, a number, a boolean, an array, an object...
  - We use slices of state to store information that changes as the user interacts with the app
  - State is used in the JSX interpolated inside curly brackets
  - We never tamper with state: `healthPoints++`, `healthPoints--` or `someState.push(item)` is FORBIDDEN
  - We use the dedicated "state updater" to schedule a state change: `setHealthPoints(healthPoints + 1)`
*/
import React, {useState} from "react";

function Playground(props){
  const [count, setCount] = useState (0);
  const [spinnerOn, setSpinnerOn] = useState(true);
  const [weapon, setWeapon] = useState("scissors");

if (spinnerOn){
  return (
  <div className = "container">
<h3>The spinner is {spinnerOn ? "On" : "OFF" }</h3>
<button onClick={() => setSpinnerOn(false)} >TURN OFF</button>
  </div>
  )
}


  return (
    <div>
    <p>{count}</p>
    <button onClick= {()=> setCount(count + 1)}> Increment </button>
    <button onClick = {()=> setCount(0)}> RESET</button>
    <button onClick = {() => setCount (count -1)}>Decrement</button>
     
    <h3>The Spinner is {spinnerOn ? "ON" : "OFF" }</h3>
    <button onClick = {() => setSpinnerOn(!spinnerOn)}> TOGGLE SPINNER </button>

    <h3>The current weapon is {weapon}</h3>
    <button onClick = {()=> setWeapon("Scissors")} >PICK SCISSORS</button>
    <button onClick = {()=> setWeapon("Rock")} >PICK ROCK</button>
    <button onClick = {()=> setWeapon("Paper")}>PICK PAPER</button>
    </div>
  )
}

export default Playground;