import React, { useState,useMemo } from "react";

function Parent(){
    const [count,setCount] = useState(0)
    const user = useMemo(()=>({name:"Sonu",age:23}),[])

    console.log("Parent render");
return(
    <div>
       <h2>Parent Count: {count}</h2>
       <button onClick={()=> setCount(count+1)}>Increse Count</button>
       <Child user= {user} />
    </div>
)}

const Child = React.memo(({user})=>{
    console.log("Child render");
    return <h3>user:{user.name}</h3>
})

export default Parent