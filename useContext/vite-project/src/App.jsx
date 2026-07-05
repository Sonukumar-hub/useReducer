// import { createContext,useContext} from "react";


// const UserContext = createContext();


// function App() {
//   const user = "Yahubaba";

//   return (
//     <>
//        <UserContext.Provider value={user}>
//         <Parent/>
//        </UserContext.Provider>
      
//     </>
//   )
// }
// function Parent(){
  
//   return <Child/>
// }

// function Child(){
//   return <GrandChild/>
// }

// function GrandChild(){
//   const user = useContext(useContext)
//   return <h2>My name is {user}</h2>
// }

//------------------------------------------------------------------------------

import { createContext,useContext, useState} from "react";


const ThemeContext = createContext();


function App() {
  const [theme,setTheme] = useState('light')
  return (
    <>
       <ThemeContext.Provider value={{theme,setTheme}}>
        <Toolbar/>
       </ThemeContext.Provider>
      
    </>
  )
}

function Toolbar(){
  return <ThemeButton/>
}

function ThemeButton(){
  const {theme,setTheme} = useContext(ThemeContext)


return (
  <button onClick={()=> setTheme(theme ==='light' ? "dark" : "light")}
  style={{
    backgroundColor: theme ==='light' ? "#fff" : "#333",
    color: theme ==='light' ? "#000" : "#fff",
  }}>
    Current Theme ;{theme}
  </button>
)
}
export default App
