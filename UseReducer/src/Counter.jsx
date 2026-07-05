import { useReducer } from "react"; 


function Counter(){

    function reducer(state,action){
        switch(action.type){
            case "increment":
                return {count : state.count+1}
            case "decrement":
                return {count : state.count-1}
            case "reset":
                return {count : 0}
            default: 
            return state;
        }
    }
    const [state,dispatch] = useReducer(reducer,{count:0})


    return (
        <div>
            <h2>Count :{state.count}</h2>
            <buttom onClick={()=>{dispatch({type:"increment"})}} >+</buttom>
            <buttom onClick={()=>{dispatch({type:"decrement"})}}>---</buttom>
            <buttom onClick={()=>{dispatch({type:"reset"})}}>Reset</buttom>
           
        </div>
    )
}

export default Counter;