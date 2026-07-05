import { useState } from "react"
function WithoutUseMemo() {

  const [count,setCount] = useState(0);
  const [text,setText] = useState("")

  const expensiveCalculation = ()=>{
    console.log("Running Expensive Calculation...");
    let total = 0;

    for(let i = 0; i < 100000000; i++){
      total += i;
    }
    return total;
  }
  const result = expensiveCalculation();
  return (
    <>
      <h1>Result : {result}</h1>
      <button onClick={()=> setCount(count+1)}>Increse Count</button>
      <input type="text" value={{text}} onChange={(e)=>setText(e.target.value)}/>
      <p>Count : {count}</p>
    </>
  )
}

export default WithoutUseMemo;
