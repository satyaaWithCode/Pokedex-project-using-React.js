import { useState } from "react";

function Addtodo()
{

    // const [inputText,setInputText] =useState('');
    

    return(
        <div>
            <input type="text" 
            placeholder="add your text todo..." 
            />
            <button>Add</button>

        </div>
    )
}
export default Addtodo;