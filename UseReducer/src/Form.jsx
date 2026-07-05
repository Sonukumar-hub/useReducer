import { useReducer } from "react";

function Form(){


    function reducer(state,action){
        return {
            ...state,
            [action.name]:action.value
        }
    }

    const [formData,dispatch] = useReducer(reducer,{
        username : "",
        email:""
    })

    function handleChange(e){
        dispatch({
            name:e.target.name,
            value:e.target.value
        })
    }
    return (
        <form>
            <input type="text" name="username" placeholder="username" value={formData.username} onChange={handleChange}/>

            <input type="text" name="email" placeholder="username" value={formData.email} onChange={handleChange}/>

            <p>
                {formData.username} - {formData.email}
            </p>
        </form>
    )
}

export default Form