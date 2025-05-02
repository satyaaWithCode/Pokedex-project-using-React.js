
import { useState } from "react";

let a =0; //will be increse in global scope when will increse to x
function Counter()
{

    // let a =0;

    const [x,setX]=useState(0);  // useState one arg eccept
    const [y,setY]=useState(0); 

    // here  x-> state variable name
    //setX -> fn name which will update to x state variable
    //{useState} is a hooks utility fn help us to create state variable
    return (
        <>
      Count A:{a}

      <button onClick={() => a+=1}>Inc</button>
      
      <br />

        Count X: {x} 
       <button onClick={() => setX(x+1)}>Inc</button>
       <button onClick={() => setX(x-1)}>Dec</button>
       <br />

       Count Y:{y}
       <button onClick={() => setY(y+1)}>Inc</button>
       <button onClick={() => setY(y-1)}>Dec</button>


        </>
    )

}
export default Counter;