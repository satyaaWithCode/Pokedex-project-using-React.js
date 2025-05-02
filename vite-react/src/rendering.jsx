import {  useState } from "react";

//APPROACH-1
//Conditional Rendering

function Conditional()
{

    // const [x,setX]=useState(0); 

// conditional rendering 

//     return(
//         <>
//        Count X: {x} is {(x % 2 == 0) ? "even" : 'odd'} 
//        <button onClick={() => setX(x+1)}>Inc</button>
//        <button onClick={() => setX(x-1)}>Dec</button>
//        <br />


//         </>
//     )

// }


//APPROACH-2

// const [isEditing , setIsEditing] = useState(false);

// return(
//     <>
//   {
//     (isEditing ? <input/> : <p>some todo</p>) // ternary operator used as jsx curlies
//   } 
//    <br />

//    <button onClick={() => setIsEditing(!isEditing)}>Click</button>


//     </>
// )


//APROACH-3
//in case of array rendering 

// const [toDos , setTodos] = useState(["todo 1 , todo2 , todo3"]); //we can pass array as one arg for multiple value
// // for array rendering
// //Its not optimize way to rendering array

// //return callback map
// return (
//     <ul>
// {toDos.map((todo)=> <li>{todo}</li>)} 
// {/* <button onClick={()=>setTodos([1,2,3])}>Click</button> //new todo adding */}
// <button onClick={()=>setTodos([...toDos,"another one"])}>Click</button>

// </ul>
// )

//APROACH -3                 
//in case of array rendering 

const [toDos] = useState(["todo 1 , todo2 , todo3"]); 

return (  //in create AppFile 
    <>
    {toDos.map((v,idx) => <li key={idx}>{v}</li>)}
    </>
)

}
export default Conditional;