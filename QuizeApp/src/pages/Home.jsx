import {useState,useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import { QuizeContext } from '../context/QuizContext'


export default function Home(){

    
    const [name,setName] = useState("")

    const {dispatch} = useContext(QuizeContext)

    const navigate = useNavigate()


    const StartQuiz = ()=>{
        if(!name.trim()) return alert("Please Enter Your name")
            dispatch({type:"SET_NAME",payload: name})
            navigate("/quiz")
    }

    return(
    <div className="container text-center mt-5">
        <h1 className="fw-bold mb-4">🚀 React Quiz Challenge</h1>
        <input 
        placeholder="Enter your name" 
        className="form-control w-50 mx-auto mb-3" 
        type="text" 
        autoComplete="off" 
        onChange={(e)=> setName(e.target.value)}
        />

        <button 
        onClick={StartQuiz}
        className="btn btn-primary btn-lg">Start Quiz</button>
    </div>
    )
}