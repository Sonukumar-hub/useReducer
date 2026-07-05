import {useState,useCallback} from 'react'

function Counter(){

    const [count, setCount] = useState(0);
    
    // const increment = ()=>{
    //     setCount((prev)=>{
    //         return prev+1;
    //     })
    // }

    const increment = useCallback(()=>{
        setCount((prev)=>{
            return prev+1;
        })
    },[])
    return(
        <div>
            <h2>Count : {count}</h2>
            <button onClick={increment}>Increse</button>
        </div>
    )
}


export default Counter;