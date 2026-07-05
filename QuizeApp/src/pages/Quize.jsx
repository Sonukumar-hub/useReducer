import{useEffect,useContext} from 'react'
import{QuizeContext} from "../context/QuizContext"
import{useNavigate} from 'react-router-dom'
import Timer from '../components/Timer'
import ProgressBar from '../components/ProgressBar'
import QuestionCard from '../components/QuestionCard'
import useTimer from '../hooks/useTimer'

export default function Quize(){
    const {state,dispatch} = useContext(QuizeContext)
    const{index,questions} = state;
    const navigate = useNavigate();
    const{time,reset} = useTimer(15)

    if(!questions || questions.length === 0){
        return <h2 className='text-center mt-5'>Loading Questions...</h2>
    }

    if(index >= questions.length){
        dispatch({type:"FINISH"})
        navigate("/result")
        return null;
    }

    const current = questions[index]


    const handleSelect  = (option)=>{
        dispatch({type:"ANSWER",payload: option===current.answer})
        reset();
    }


    return(
    <div className="container mt-4">
        <Timer time={time}/>
        <ProgressBar current={index} total={questions.length}/>
        <QuestionCard
          question={current.question}
          options={current.options}
          onSelect={handleSelect}
        />
    </div>
    )
}