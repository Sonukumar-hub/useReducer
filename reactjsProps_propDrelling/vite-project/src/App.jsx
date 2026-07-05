// function Parent(){
// const username = "sonu"
//  return <Child name={username} />
// }
// function Child({name}){
// return <GrandChild name={name} />
// }
// function GrandChild({name}){
// return <h2>Hello {name}</h2>
// }
import { useState } from "react"

function Parent(){
  const [text,setText] = useState('')
  return(
    <div>
      <InputBox onChange={setText}/>
      <h3>TYped:{text}</h3>
    </div>
  )
}

function InputBox({onChange}){
  return <input type="text" onChange={(e)=> onChange =(e.target.value)}/>
}

function App() {

  return (
    <>
      <Parent/>
    </>
  )
}

export default App
