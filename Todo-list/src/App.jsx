
import './App.css'
import Addtodo from './Components/AddTodo/AddTodo'
import TodoList from './Components/TodoList/TodoList'
import TodoContext from './Context/TodoContext'

function App() {

//now not need any props pass the data betn components
// //child component keep access of parent components
 
  return (
    <TodoContext.Provider>
      <Addtodo />
      <TodoList />
    </TodoContext.Provider>
  )
}

export default App
