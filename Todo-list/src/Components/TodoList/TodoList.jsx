import { useState } from "react";


function TodoList()
{

    const [list,setLIst]=useState([
        {id:1 , tododata: "todo 1"},
        {id:2 , tododata: "todo 2"}
    ]);
    return(
        <div>
            
        </div>
    )

}
export default TodoList;

