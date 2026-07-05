import React from 'react'

function Child({click}){
    console.log('child rerender');
    <button onClick={click}>Child Button</button>
} 

export default React.memo(Child)