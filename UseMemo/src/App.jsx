import { useState } from "react"
import WithoutUseMemo from "./WithoutUseMemo"
import WithUseMemo from "./WithUseMemo"
import Parent from "./Parent"
function App() {


  return (
    <>

    {/* <WithoutUseMemo/> */}  
      

     {/*  <WithUseMemo/> */}


     <Parent/>
    </>
  )
}

export default App
