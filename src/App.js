import "./App.css";
import { useState } from "react";

function App() {
  const [name,setName]=useState("")
  const [mass,setMass]=useState("")
  const [heigt,setHeight]=useState("")
  
  const calBMI=function(){
    const cal=mass/ (heigt*heigt)
    return cal.toFixed(2)
  }
  


  return (
    <div>
      <h1>BMI Calculator</h1>
      <input type="text"  onChange={(e)=>setName(e.target.value)}/>
      <input type="text" placeholder="weight in KG"  onChange={(e)=>setMass(e.target.value)}/>
      <input type="text" placeholder="heigt in M"  onChange={(e)=>setHeight(e.target.value)}/>
      <button onClick={() => alert(`BMI: ${calBMI()}`)}>calculate</button>
      <div>
        <h2>Results</h2>
        <p>Name: {name}</p>
        <p>Mass: {mass} kg</p>
        <p>Height: {heigt} m</p>
        <p>BMI: {calBMI()}</p>
      </div>
      {/* <input type="text" />
      <input type="text" /> */}
    </div>
  );
}


export default App;
