import { useReducer } from "react";
import Counter from "./Counter";
import Form from "./Form"

function App() {
  const [checked, toggle] = useReducer((checked) => {
    return !checked;
  }, false);

  return (
    // <div>
    //   <input
    //     type="checkbox"
    //     //checked={checked}
    //     onChange={toggle}
    //   />

    //   {checked ? "Checked" : "Not Checked"}
    // </div>


    //-----------2--------------
    //<Counter/>

    //----------------3-------------------
    <Form/>
  );
}

export default App;