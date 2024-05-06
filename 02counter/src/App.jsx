
import { useState } from 'react';
import './App.css'

function App() {
  let [counter,setCounter] = useState(15)

  const addvalue =() =>{
    // counter = counter + 1;
    setCounter(counter+1)
    console.log("clicked:",counter);
  }
  const removevalue = ()=>{
    setCounter(counter - 1)
    console.log("remove",counter);
  }

  return (
    <>
      <h1>chai-aur-react</h1>
      <h2>counter value : {counter}</h2>
      <button onClick={addvalue}>add value</button> <br />
      <button onClick={removevalue}>remove value</button>
    </>
  )
}

export default App
